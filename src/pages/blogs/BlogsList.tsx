import { Button, Table } from "antd";
import Column from "antd/es/table/Column";
import { getFormattedDate } from "../../utils/getFormattedDate";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { useGetBlogsList } from "../../react-query/query/blogs/blogs-query";
import { ADMIN_PATHS } from "@/routes/admin-dashboard/adminRoutes.enum";
import { blogsData } from "./Blogs.types";
import { useDeleteBlog } from "@/react-query/mutation/blogs/blogs-mutation";

const BlogsList = () => {
  const { data: blogsData, isLoading } = useGetBlogsList();
  const navigate = useNavigate();
  const handleNavigateToBlogEdit = (id: string) => {
    navigate(`/${ADMIN_PATHS.ADMIN}/${ADMIN_PATHS.BLOGS_UPDATE}/${id}`);
  };
  const { mutate: deleteMutate } = useDeleteBlog();

  const handleUserCreate = () => {
    navigate(`/${ADMIN_PATHS.ADMIN}/${ADMIN_PATHS.BLOGS_CREATE}`);
  };
  console.log(blogsData);
  return (
    <Table
      loading={isLoading}
      bordered
      className="w-full"
      title={() => (
        <Button
          type="primary"
          onClick={handleUserCreate}
          icon={<PlusCircleOutlined />}
        >
          Create Blog
        </Button>
      )}
      dataSource={blogsData?.map((blog: blogsData) => ({
        ...blog,
        key: blog.id,
        formatted_create_date: getFormattedDate(blog?.created_at),
        image_url: blog?.image_url
          ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${
              blog?.image_url
            }`
          : "",
      }))}
    >
      <Column title="Id" dataIndex="id" />
      <Column title="Title" dataIndex="title_en" />
      <Column title="Title (Geo)" dataIndex="title_ka" />
      <Column title="Description" dataIndex="description_en" />
      <Column title="Created At" dataIndex="formatted_create_date" />
      {/* <Column
        title="Image"
        dataIndex="image_url"
        width={150}
        render={(image_url) => (
          <img
            src={image_url}
            alt="Blog Image"
            style={{
              width: "120px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        )}
      /> */}
      <Column
        title="Actions"
        render={(_, row) => {
          return (
            <div className="flex flex-row gap-4">
              <div
                className="space-x-1 cursor-pointer"
                onClick={() => {
                  handleNavigateToBlogEdit(row?.id);
                }}
              >
                <EditOutlined className="cursor-pointer text-xl text-blue-500" />
                {/* <span className="text-blue-500">Edit</span> */}
              </div>
              <div
                onClick={() => {
                  deleteMutate(row?.id);
                }}
              >
                <DeleteOutlined className="cursor-pointer text-red-500 text-xl" />
              </div>
            </div>
          );
        }}
      />
    </Table>
  );
};

export default BlogsList;
