import { useFetchGet } from "../useFetchGet";

export function useInventoryGet() {
  return useFetchGet('/inventory?select=*');
}
