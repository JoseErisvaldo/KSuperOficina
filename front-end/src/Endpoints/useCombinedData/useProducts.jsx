import { useState, useEffect } from 'react';
import { useCategoriesGet } from '../GET/useCategoriesGet'; // Corrija o nome e o caminho para useCategoriesGet
import { useProductsGet } from '../GET/useProductsGet'; // Corrija o nome e o caminho para useProductsGet
import { useSellerGet } from '../GET/useSellerGet';

export function useProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: seller, loading: sellersLoading, error: sellersError } = useSellerGet();
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useCategoriesGet(); // Corrigido
  const { data: products, loading: productsLoading, error: productsError } = useProductsGet();

  useEffect(() => {
    async function fetchData() {
      if (productsLoading && categoriesLoading && sellersLoading) {	
        return;
      }

      try {
        const categoriesMap = categories.reduce((map, category) => {
          map[category.id] = category;
          return map;
        }, {});

        const sellersMap = seller.reduce((map, seller) => {
          map[seller.id] = seller;
          return map;
        }, {});
        const combinedData = products.map(product => ({
          ...product,
          category: categoriesMap[product.category_id] || {},
          seller: sellersMap[product.seller] || {}
        }));

        setData(combinedData);
      } catch (error) {
        setError('Erro ao buscar dados combinados');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [products, categories, productsLoading, categoriesLoading]);

  if (sellersError || categoriesError || productsError) {
    setError('Erro ao buscar dados');
    setLoading(false);
  }

  return { data, loading, error };
}
