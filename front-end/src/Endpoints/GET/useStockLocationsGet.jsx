import { useFetchGet } from "../useFetchGet";

export function useStockLocationsGet() {
  return useFetchGet('/stock_locations?select=*');
}
