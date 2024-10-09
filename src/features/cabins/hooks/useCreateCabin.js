import { useQueryClient, useMutation } from "@tanstack/react-query";

import { createEditCabin } from "../../../services/db/apiCabins";

import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: (data) => createEditCabin(data),
    onSuccess: () => {
      toast.success("Creación correcta");
      queryClient.invalidateQueries(["cabins"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createCabin };
}
