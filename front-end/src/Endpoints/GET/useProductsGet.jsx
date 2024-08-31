import { useFetchGet } from "../useFetchGet";

export function useProductsGet() {
  return useFetchGet('/products?select=*');
}
