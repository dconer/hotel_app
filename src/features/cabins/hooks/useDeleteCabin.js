import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../../services/db/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabin, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Eliminación correcta");

      queryClient.invalidateQueries(["cabins"]);
    },
    onError: (error) => {
      toast.error("Hubo un   error al eliminar la cabina");
    },
  });

  return { isDeleting, deleteCabin };
}
