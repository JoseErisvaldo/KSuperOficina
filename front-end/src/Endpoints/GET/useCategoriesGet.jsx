import { useFetchGet } from '../useFetchGet';

export function useCategoriesGet(page, pageSize) {
  return useFetchGet('/categories', page, pageSize);
}
