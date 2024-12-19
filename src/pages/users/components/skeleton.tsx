import { Form, Skeleton, Space } from "antd";

export const UsersCreateUpdateFormSkeleton = () => {
  return (
    <Form>
      <Space direction="vertical" size="large">
        <Skeleton.Input
          active
          style={{ marginLeft: 50, width: 300 }}
          size="large"
        />
        <Skeleton.Input
          active
          style={{ marginLeft: 50, width: 300 }}
          size="large"
        />
        <Skeleton.Button active style={{ marginLeft: 150 }} size="large" />
      </Space>
    </Form>
  );
};
