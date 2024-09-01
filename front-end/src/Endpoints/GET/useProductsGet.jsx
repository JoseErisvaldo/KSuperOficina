import { useFetchGet } from '../useFetchGet';

export function useProductsGet(page, pageSize) {
  return useFetchGet('/products', page, pageSize);
}
