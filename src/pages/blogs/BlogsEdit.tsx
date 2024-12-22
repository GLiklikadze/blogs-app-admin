import { useNavigate, useParams } from "react-router-dom";
import { BlogsCreateUpdateFormSkeleton } from "./components/skeleton";
import { Divider } from "antd";
import { BlogsCreateUpdateForm } from "./components/createUpdateForm";
import { useGetSingleBlog } from "../../react-query/query/blogs/blogs-query";
import { writeBlogFormValues } from "../../supabase/blogs/supabaseBlogs";
import { ADMIN_PATHS } from "@/routes/admin-dashboard/adminRoutes.enum";
import { useUpdateBlogs } from "@/react-query/mutation/blogs/blogs-mutation";

export const BlogsEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    mutate: updateBlogMutate,
    isSuccess: updatedSuccess,
    error: updateError,
    isError: isUpdateError,
  } = useUpdateBlogs();

  const handleSubmit = (values: writeBlogFormValues) => {
    updateBlogMutate({ formValues: values, blogId: id ?? "" });
    navigate(`/${ADMIN_PATHS.ADMIN}/${ADMIN_PATHS.BLOGS_LIST}`);
  };

  const { data: singleBlogData, isLoading } = useGetSingleBlog(id ?? "");

  return (
    <div className="ml-10 w-[36rem] bg-gray-100 p-8">
      <h1 className="text-left mx-auto text-2xl font-bold">Edit Blog</h1>
      <Divider
        type="horizontal"
        style={{ height: "1px", backgroundColor: "#1677FF" }}
      />
      {isLoading || !singleBlogData ? (
        <BlogsCreateUpdateFormSkeleton />
      ) : (
        <BlogsCreateUpdateForm
          singleBlogData={singleBlogData}
          handleSubmit={handleSubmit}
          error={updateError}
          isError={isUpdateError}
          isSuccess={updatedSuccess}
        />
      )}
    </div>
  );
};

export default BlogsEdit;
