import { Layout, Menu, MenuProps, theme } from "antd";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { getUsersForAdmin } from "../supabase/admin/supabaseAdmin";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: `users`,
    label: `Users`,
    children: [
      {
        key: 0,
        label: <Link to="users">Users</Link>,
      },
    ],
  },
  {
    key: `blogs`,
    label: `Blogs`,
    children: [
      {
        key: 1,
        label: <Link to="blogs">blogs</Link>,
      },
    ],
  },
];

const AdminLayout = () => {
  useEffect(() => {
    getUsersForAdmin();
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: "80vh" }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AdminLayout;
