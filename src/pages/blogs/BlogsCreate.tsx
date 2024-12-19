import { useNavigate } from "react-router-dom";
import { BlogsCreateUpdateFormSkeleton } from "./components/skeleton";
import { Divider } from "antd";
import { BlogsCreateUpdateForm } from "./components/createUpdateForm";
import { usePostBlogs } from "../../react-query/blogs-query";
import { useAuthContext } from "../../context/hooks/useAuthContext";
import { writeBlogFormValues } from "./Blogs.types";

export const BlogsCreate = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const {
    BlogCreateError,
    createBlogMutate,
    createdSuccess,
    isBlogCreateError,
    isPending,
  } = usePostBlogs();

  const handleSubmit = (values: writeBlogFormValues) => {
    createBlogMutate({ formValues: values, id: user?.id ?? "" });
    if (createdSuccess) {
      navigate("/admin/blogs/list");
    }
  };
  return (
    <div className="ml-10 w-[36rem] bg-gray-100 p-8">
      <h1 className="text-left mx-auto text-2xl font-bold">Create Blog</h1>
      <Divider
        type="horizontal"
        style={{ height: "1px", backgroundColor: "#1677FF" }}
      />
      {isPending ? (
        <BlogsCreateUpdateFormSkeleton />
      ) : (
        <BlogsCreateUpdateForm
          handleSubmit={handleSubmit}
          error={BlogCreateError}
          isError={isBlogCreateError}
          isSuccess={createdSuccess}
        />
      )}
    </div>
  );
};

export default BlogsCreate;
