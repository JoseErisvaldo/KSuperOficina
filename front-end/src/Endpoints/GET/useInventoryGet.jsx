import { useFetchGet } from '../useFetchGet';

export function useInventoryGet(page, pageSize) {
  return useFetchGet('/inventory', page, pageSize);
}
