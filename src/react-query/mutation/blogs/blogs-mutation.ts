import {
  deleteBlog,
  postBlogs,
  updateBlog,
} from "@/supabase/blogs/supabaseBlogs";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { BLOGS_MUTATION_KEYS } from "./blogsMutationKeys.enum";
import { blogsData } from "@/pages/blogs/Blogs.types";
import { PostgrestError } from "@supabase/supabase-js";
import { BLOGS_QUERY_KEYS } from "@/react-query/query/blogs/blogsQueryKeys.enum";
import { writeBlogFormValues } from "./blogs.types";

export const usePostBlogs = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<
    blogsData | null,
    PostgrestError,
    { formValues: writeBlogFormValues; id: string }
  >;
} = {}): UseMutationResult<
  blogsData | null,
  PostgrestError,
  { formValues: writeBlogFormValues; id: string }
> => {
  return useMutation<
    blogsData | null,
    PostgrestError,
    { formValues: writeBlogFormValues; id: string }
  >({
    mutationKey: [BLOGS_MUTATION_KEYS.CREATE],
    mutationFn: postBlogs,
    ...mutationOptions,
  });
};

export const useUpdateBlogs = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<
    blogsData | null,
    PostgrestError,
    { formValues: writeBlogFormValues; blogId: string }
  >;
} = {}): UseMutationResult<
  blogsData | null,
  PostgrestError,
  { formValues: writeBlogFormValues; blogId: string }
> => {
  return useMutation<
    blogsData | null,
    PostgrestError,
    { formValues: writeBlogFormValues; blogId: string }
  >({
    mutationKey: [BLOGS_MUTATION_KEYS.UPDATE],
    mutationFn: updateBlog,
    ...mutationOptions,
  });
};

export const useDeleteBlog = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<
    blogsData | null,
    PostgrestError,
    string
  >;
} = {}): UseMutationResult<blogsData | null, PostgrestError, string> => {
  const queryClient = useQueryClient();
  return useMutation<blogsData | null, PostgrestError, string>({
    mutationKey: [BLOGS_MUTATION_KEYS.DELETE],
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries([
        BLOGS_QUERY_KEYS.LIST,
      ] as InvalidateQueryFilters);
    },
    ...mutationOptions,
  });
};
