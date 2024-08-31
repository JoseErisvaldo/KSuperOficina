import { useState, useEffect } from 'react';
import api from "../../../Server/api";

export function useSellersGet() {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/sellers?select=*');
        setSellers(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('Não foi possível encontrar as sellers');
        } else {
          setError('Erro ao buscar sellers');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { sellers, loading, error };
}
