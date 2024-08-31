// src/Endpoints/useFetchGet.js
import { useState, useEffect } from 'react';
import api from '../Server/api'; // Ajuste o caminho conforme necessário

export function useFetchGet(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(endpoint);
        setData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError(`Não foi possível encontrar os dados para ${endpoint}`);
        } else {
          setError('Erro ao buscar dados');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
