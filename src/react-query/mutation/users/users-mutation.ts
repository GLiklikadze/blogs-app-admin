import {
  InvalidateQueryFilters,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { USERS_MUTATION_KEYS } from "./usersMutationKeys";
import {
  createNewUser,
  updateUserByAdmin,
} from "@/supabase/users/supabaseUsers";
import { PostgrestError, User } from "@supabase/supabase-js";

type UpdateUserPayload = {
  email: string;
  phone: string;
};
type UserResponse = {
  user: User;
};

export const useUpdateSingleUser = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<
    UserResponse,
    PostgrestError,
    { id: string; payload: UpdateUserPayload }
  >;
} = {}): UseMutationResult<
  UserResponse,
  PostgrestError,
  { id: string; payload: UpdateUserPayload }
> => {
  const queryClient = useQueryClient();

  return useMutation<
    UserResponse,
    PostgrestError,
    { id: string; payload: UpdateUserPayload }
  >({
    mutationKey: [USERS_MUTATION_KEYS.UPDATE],
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
    ...mutationOptions,
  });
};

export const useCreateUser = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<
    User,
    PostgrestError,
    { email: string; password: string; phone: string }
  >;
} = {}): UseMutationResult<
  User,
  PostgrestError,
  { email: string; password: string; phone: string }
> => {
  return useMutation<
    User,
    PostgrestError,
    { email: string; password: string; phone: string }
  >({
    mutationKey: [USERS_MUTATION_KEYS.CREATE],
    mutationFn: createNewUser,
    ...mutationOptions,
  });
};
