import { useState, useEffect } from 'react';
import { useCategoriesGet } from '../GET/useCategoriesGet';
import { useProductsGet } from '../GET/useProductsGet';
import { useSellerGet } from '../GET/useSellerGet';
import { useInventoryGet } from '../GET/useInventoryGet';
import { useStockLocationsGet } from '../GET/useStockLocationsGet';

export function useProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { data: sellers, loading: sellersLoading, error: sellersError } = useSellerGet();
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useCategoriesGet();
  const { data: products, loading: productsLoading, error: productsError } = useProductsGet();
  const { data: inventory, loading: inventoryLoading, error: inventoryError } = useInventoryGet();
  const { data: stockLocations, loading: stockLocationsLoading, error: stockLocationsError } = useStockLocationsGet();

  useEffect(() => {
    async function fetchData() {
      if (productsLoading || categoriesLoading || sellersLoading || inventoryLoading || stockLocationsLoading) {
        return;
      }

      try {
        const categoriesMap = categories.reduce((map, category) => {
          map[category.id] = category;
          return map;
        }, {});

        const sellersMap = sellers.reduce((map, seller) => {
          map[seller.id] = seller;
          return map;
        }, {});

        const inventoryMap = inventory.reduce((map, inv) => {
          if (!map[inv.product_id]) {
            map[inv.product_id] = [];
          }
          map[inv.product_id].push(inv);
          return map;
        }, {});

        const stockLocationsMap = stockLocations.reduce((map, location) => {
          map[location.id] = location;
          return map;
        }, {});

        const combinedData = products.map(product => ({
          ...product,
          category: categoriesMap[product.category_id] || {},
          seller: sellersMap[product.seller] || {},
          inventory: (inventoryMap[product.id] || []).map(inv => ({
            ...inv,
            location: stockLocationsMap[inv.location_id] || {}
          }))
        }));

        setData(combinedData);
      } catch (error) {
        setError('Erro ao buscar dados combinados');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [products, categories, sellers, inventory, stockLocations, productsLoading, categoriesLoading, sellersLoading, inventoryLoading, stockLocationsLoading]);

  if (sellersError || categoriesError || productsError || inventoryError || stockLocationsError) {
    setError('Erro ao buscar dados');
    setLoading(false);
  }

  return { data, loading, error };
}
