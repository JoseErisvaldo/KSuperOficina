// useCombinedData/useProducts.js
import { useState, useEffect } from 'react';
import { useSellerGet } from '../GET/useSellerGet';
import { useCategoriesGet } from '../GET/useCategoriesGet';
import { useProductsGet } from '../GET/useProductsGet';
import { useInventoryGet } from '../GET/useInventoryGet';
import { useStockLocationsGet } from '../GET/useStockLocationsGet';


export function useProducts(page = 1, pageSize = 10) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  const { data: sellers, loading: sellersLoading, error: sellersError } = useSellerGet(page, pageSize);
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useCategoriesGet(page, pageSize);
  const { data: products, loading: productsLoading, error: productsError, totalCount: productsTotal } = useProductsGet(page, pageSize);
  const { data: inventory, loading: inventoryLoading, error: inventoryError } = useInventoryGet(page, pageSize);
  const { data: stockLocations, loading: stockLocationsLoading, error: stockLocationsError } = useStockLocationsGet(page, pageSize);

  useEffect(() => {
    async function fetchData() {
      if (productsLoading || categoriesLoading || sellersLoading || inventoryLoading || stockLocationsLoading) return;

      try {
        const categoriesMap = categories.reduce((map, category) => ({ ...map, [category.id]: category }), {});
        const sellersMap = sellers.reduce((map, seller) => ({ ...map, [seller.id]: seller }), {});
        const inventoryMap = inventory.reduce((map, inv) => {
          map[inv.product_id] = map[inv.product_id] || [];
          map[inv.product_id].push({ ...inv, location: stockLocations.find(loc => loc.id === inv.location_id) || {} });
          return map;
        }, {});


        const combinedData = products.map(product => ({
          ...product,
          category: categoriesMap[product.category_id] || {},
          seller: sellersMap[product.seller] || {},
          inventory: inventoryMap[product.id] || [],
        }));

        setData(combinedData);
        setTotalCount(productsTotal);
      } catch (error) {
        setError('Erro ao buscar dados combinados');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [products, categories, sellers, inventory, stockLocations, productsLoading, categoriesLoading, sellersLoading, inventoryLoading, stockLocationsLoading, page, pageSize]);

  if (sellersError || categoriesError || productsError || inventoryError || stockLocationsError) {
    setError('Erro ao buscar dados');
    setLoading(false);
  }

  return { data, loading, error, totalCount };
}
