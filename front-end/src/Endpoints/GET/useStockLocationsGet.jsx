import { useFetchGet } from '../useFetchGet';

export function useStockLocationsGet(page, pageSize) {
  return useFetchGet('/stock_locations', page, pageSize);
}
