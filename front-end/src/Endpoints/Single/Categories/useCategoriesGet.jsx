import { useState, useEffect } from 'react';
import api from '../../../Server/api';

export function useCategoriesGet() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/categories?select=*');
        setCategories(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('Não foi possível encontrar as categorias');
        } else {
          setError('Erro ao buscar categorias');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
