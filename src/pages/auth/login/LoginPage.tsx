import { Alert, Button, Form, Input, Card } from "antd";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;

import { LoginFormValues } from "./LoginPage.types";
import { useLogin } from "../../../react-query/auth-query";
import { useNavigate } from "react-router-dom";
import { ADMIN_PATHS } from "@/routes/admin-dashboard/adminRoutes.enum";

const initialLoginObj = {
  email: "",
  password: "",
};
const LoginPage: React.FC = () => {
  const { mutateLogin, error, isError, isSuccess } = useLogin();
  const navigate = useNavigate();
  const handleSubmit = (fieldValues: LoginFormValues) => {
    console.log(fieldValues);
    mutateLogin(fieldValues);
    if (isSuccess) {
      navigate(ADMIN_PATHS.ADMIN);
    }
  };
  const [form] = useForm();
  const cardContent = (
    <div className="flex gap-8 flex-col mx-auto p-10 ">
      <Card className="flex mx-auto items-center justify-center w-full border-2 bg-blue-50">
        <h1 className="font-bold text-2xl pb-6 mx-auto text-center">Sign In</h1>
        <p className="text-center">Blogs Admin Panel</p>
      </Card>
      <Form
        initialValues={initialLoginObj}
        form={form}
        onFinish={handleSubmit}
        style={{ width: 400 }}
        labelCol={{ span: 5 }}
        labelAlign="left"
        wrapperCol={{ span: 46 }}
      >
        <Item
          wrapperCol={{ offset: 1, span: 20 }}
          label="Email"
          name="email"
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
          wrapperCol={{ offset: 1, span: 20 }}
          label="Password"
          name="password"
          rules={[{ required: true, min: 4, max: 25 }]}
        >
          <Input placeholder="Enter Phone Number" type="password" />
        </Item>

        <Item wrapperCol={{ offset: 9 }}>
          {isError && (
            <Alert
              className="min-w-64 mx-auto my-4"
              message={error?.message}
              type="error"
              action={isError}
              closable
            />
          )}
          <Button type="primary" size="large" htmlType="submit">
            Sign In
          </Button>
        </Item>
      </Form>
    </div>
  );

  return (
    <div className="flex h-screen w-full items-center justify-center px-4 bg-gray-100">
      <Card className="border-blue-400">{cardContent}</Card>
    </div>
  );
};

export default LoginPage;
