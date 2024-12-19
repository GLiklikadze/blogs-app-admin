import { Alert, Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { UserCreateUpdateFormProps } from "../Users.types";

const { Item } = Form;

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const UserCreateUpdateForm: React.FC<UserCreateUpdateFormProps> = ({
  singleUserData,
  handleSubmit,
  error,
  isError,
  isSuccess,
}) => {
  const [initialFormObj] = useState({
    phone: singleUserData?.phone,
    email: singleUserData?.email,
  });
  const [form] = useForm();

  return (
    <Form
      initialValues={initialFormObj}
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
      labelCol={{ span: 6 }}
      labelAlign="left"
      wrapperCol={{ span: 12 }}
    >
      <Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            min: 2,
            max: 25,
            pattern: emailRegex,
            message: "Please enter valid email address, min: 2, max: 25 symbol",
          },
        ]}
      >
        <Input placeholder="Enter Email" type="email" />
      </Item>

      <Item
        label="Phone Number"
        name="phone"
        rules={[{ required: true, min: 4, max: 16 }]}
      >
        <Input placeholder="Enter Phone Number" type="tel" />
      </Item>
      {!singleUserData && (
        <Item
          label="Password"
          name="password"
          rules={[{ required: true, min: 3, max: 14 }]}
        >
          <Input type="password" placeholder="Enter Password" />
        </Item>
      )}

      {isSuccess && (
        <Alert
          className="max-w-64 mx-auto mb-4"
          message={
            singleUserData
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
