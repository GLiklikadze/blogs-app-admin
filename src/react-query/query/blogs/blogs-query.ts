import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { getBlogs, getSingleBlog } from "../../../supabase/blogs/supabaseBlogs";
import { blogsData } from "@/pages/blogs/Blogs.types";
import { PostgrestError } from "@supabase/supabase-js";
import { BLOGS_QUERY_KEYS } from "./blogsQueryKeys.enum";

export const useGetBlogsList = ({
  queryOptions,
}: {
  queryOptions?: UseQueryOptions<blogsData[], PostgrestError, blogsData[]>;
} = {}): UseQueryResult<blogsData[], PostgrestError> => {
  return useQuery<blogsData[], PostgrestError, blogsData[]>({
    queryKey: [BLOGS_QUERY_KEYS],
    queryFn: getBlogs,
    ...queryOptions,
  });
};

export const useGetSingleBlog = (
  id: string,
  {
    queryOptions,
  }: {
    queryOptions?: UseQueryOptions<blogsData, PostgrestError, blogsData>;
  } = {}
): UseQueryResult<blogsData, PostgrestError> => {
  return useQuery<blogsData, PostgrestError, blogsData>({
    queryKey: [BLOGS_QUERY_KEYS.SINGLE, id],
    queryFn: () => getSingleBlog(id),
    enabled: !!id,
    ...queryOptions,
  });
};
