import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  createNewUser,
  getSingleUserForAdmin,
  getUsersForAdmin,
  updateUserByAdmin,
} from "../supabase/users/supabaseUsers";

export const useGetUsersList = () => {
  const { data: usersListData, isLoading } = useQuery({
    queryKey: ["get-users-for-admin"],
    queryFn: getUsersForAdmin,
  });
  return { usersListData, isLoading };
};

export const useGetSingleUser = (id: string) => {
  return useQuery({
    queryKey: ["get-single-user", id],
    queryFn: () => getSingleUserForAdmin(id),
    enabled: !!id,
    retry: false,
  });
};

export const useUpdateSingleUser = () => {
  const queryClient = useQueryClient();

  const {
    isPending: isPendingUpdate,
    mutate: mutateUser,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationKey: ["edit-user-data"],
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: { email: string; phone: string };
    }) => updateUserByAdmin({ id, payload }),

    onSuccess: () => {
      queryClient.invalidateQueries([
        "get-single-user",
      ] as InvalidateQueryFilters);
    },
  });

  return {
    isPendingUpdate,
    mutateUser,
    isSuccess,
    isError,
    error,
  };
};

export const useCreateUser = () => {
  const {
    mutate: createUserMutate,
    isPending,
    error,
    isError,
    isSuccess,
  } = useMutation({
    mutationKey: ["create-user"],
    mutationFn: createNewUser,
  });
  return { createUserMutate, isPending, error, isError, isSuccess };
};
