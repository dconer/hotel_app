import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../../services/db/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
    staleTime: 60 * 1000,
  });
  return { isLoading, cabins, error };
}
