import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  deleteBlog,
  getBlogs,
  getSingleBlog,
  postBlogs,
  updateBlog,
} from "../supabase/blogs/supabaseBlogs";

export const useGetBlogsList = () => {
  const { data: blogsData, isLoading } = useQuery({
    queryKey: ["get-blogs-for-admin"],
    queryFn: getBlogs,
  });
  return { blogsData, isLoading };
};

export const useGetSingleBlog = (id: string) => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["get-single-blog", id],
    queryFn: () => getSingleBlog(id),
    enabled: !!id,
  });
  return { data, error, isError, isLoading };
};

export const usePostBlogs = () => {
  const {
    isSuccess: createdSuccess,
    mutate: createBlogMutate,
    isError: isBlogCreateError,
    error: BlogCreateError,
    isPending,
  } = useMutation({
    mutationKey: ["create-blog"],
    mutationFn: postBlogs,
  });
  return {
    createdSuccess,
    createBlogMutate,
    isBlogCreateError,
    BlogCreateError,
    isPending,
  };
};
export const useUpdateBlogs = () => {
  const {
    isSuccess: updatedSuccess,
    mutate: updateBlogMutate,
    isError: isUpdateError,
    error: updateError,
    isPending,
  } = useMutation({
    mutationKey: ["update-blog"],
    mutationFn: updateBlog,
  });
  return {
    updateBlogMutate,
    updatedSuccess,
    isUpdateError,
    updateError,
    isPending,
  };
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  const {
    mutate: deleteMutate,
    isError,
    error,
  } = useMutation({
    mutationKey: ["delete-blog"],
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries([
        "get-blogs-for-admin",
      ] as InvalidateQueryFilters);
    },
  });
  return { deleteMutate, isError, error };
};
