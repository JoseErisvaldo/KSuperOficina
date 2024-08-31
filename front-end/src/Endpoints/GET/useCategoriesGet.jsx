import { useFetchGet } from "../useFetchGet";

export function useCategoriesGet() {
  return useFetchGet('/categories?select=*');
}
