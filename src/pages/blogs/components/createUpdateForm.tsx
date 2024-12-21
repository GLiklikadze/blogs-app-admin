import { Alert, Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { BlogsCreateUpdateFormProps } from "../Blogs.types";

const { Item } = Form;

export const BlogsCreateUpdateForm: React.FC<BlogsCreateUpdateFormProps> = ({
  singleBlogData,
  handleSubmit,
  error,
  isError,
  isSuccess,
}) => {
  const [initialFormObj] = useState({
    title_en: singleBlogData?.title_en || "",
    title_ka: singleBlogData?.title_ka || "",
    description_en: singleBlogData?.description_en || "",
    description_ka: singleBlogData?.description_ka || "",
    image_url: singleBlogData?.image_url || "",
  });
  const [form] = useForm();

  return (
    <Form
      initialValues={initialFormObj}
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 700 }}
      labelCol={{ span: 6 }}
      labelAlign="left"
      wrapperCol={{ span: 18 }}
    >
      <Item
        label="Title (Geo)"
        name="title_ka"
        rules={[
          {
            required: true,
            min: 2,
            max: 25,
          },
        ]}
      >
        <Input placeholder="Enter Title (Geo)" type="text" />
      </Item>
      <Item
        label="Title (Eng)"
        name="title_en"
        rules={[
          {
            required: true,
            min: 2,
            max: 25,
          },
        ]}
      >
        <Input placeholder="Enter Title (Eng)" type="text" />
      </Item>
      <Item
        label="Description (Geo)"
        name="description_ka"
        rules={[
          {
            required: true,
            min: 2,
            max: 400,
          },
        ]}
      >
        <Input.TextArea rows={6} placeholder="Enter Description (Geo)" />
      </Item>
      <Item
        label="Description (Eng)"
        name="description_en"
        rules={[
          {
            required: true,
            min: 2,
            max: 400,
          },
        ]}
      >
        <Input.TextArea rows={6} placeholder="Enter Description (Eng)" />
      </Item>

      {isSuccess && (
        <Alert
          className="max-w-64 mx-auto mb-4"
          message={
            singleBlogData
              ? "User Updated Successfuly"
              : "User Created Successfuly"
          }
          type="success"
          action={isSuccess}
          closable
        />
      )}

      {isError && (
        <Alert
          className="max-w-64 mx-auto mb-4"
          message={error?.message}
          type="error"
          action={isError}
          closable
        />
      )}

      <Item wrapperCol={{ offset: 10, span: 12 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};
