import {
  getSingleUserForAdmin,
  getUsersForAdmin,
} from "@/supabase/users/supabaseUsers";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { USERS_QUERY_KEYS } from "./usersQueryKeys.enum";
import { PostgrestError, User } from "@supabase/supabase-js";

export const useGetUsersList = ({
  queryOptions,
}: {
  queryOptions?: UseQueryOptions<User[], PostgrestError, User[]>;
} = {}): UseQueryResult<User[], PostgrestError> => {
  return useQuery<User[], PostgrestError, User[]>({
    queryKey: [USERS_QUERY_KEYS.LIST],
    queryFn: getUsersForAdmin,
    ...queryOptions,
  });
};

export const useGetSingleUser = (
  id: string,
  {
    queryOptions,
  }: {
    queryOptions?: UseQueryOptions<User, PostgrestError, User>;
  } = {}
): UseQueryResult<User, PostgrestError> => {
  return useQuery<User, PostgrestError, User>({
    queryKey: [USERS_QUERY_KEYS.SINGLE, id],
    queryFn: () => getSingleUserForAdmin(id),
    enabled: !!id,
    retry: false,
    ...queryOptions,
  });
};
