import { useFetchGet } from "../useFetchGet";

export function useSellerGet(page, pageSize) {
  return useFetchGet('/sellers?select=*', page, pageSize);
}
