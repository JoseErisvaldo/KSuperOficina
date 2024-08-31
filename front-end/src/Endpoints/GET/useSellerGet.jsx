import { useFetchGet } from "../useFetchGet";

export function useSellerGet() {
  return useFetchGet('/sellers?select=*');
}
