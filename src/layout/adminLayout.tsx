import {
  ContainerOutlined,
  PlusOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
// import BlogsStats from "../components/BlogsStats";
import { HeaderComponent } from "../components/Header";

const { Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: `users`,
    label: `Users`,
    icon: <UserOutlined style={{ color: "#1677FF" }} />,
    children: [
      {
        key: 0,
        label: <Link to="user/list">Users List</Link>,
        icon: <UnorderedListOutlined />,
      },
      {
        key: 1,
        label: <Link to="user/create">Create User</Link>,
        icon: <UserAddOutlined />,
      },
    ],
  },
  {
    key: `blogs`,
    label: `Blogs`,
    icon: <ContainerOutlined style={{ color: "#1677FF" }} />,
    children: [
      {
        key: 2,
        icon: <UnorderedListOutlined />,
        label: <Link to="blogs/list">Blogs List</Link>,
      },
      {
        key: 3,
        icon: <PlusOutlined />,
        label: <Link to="blogs/create">Add Blog</Link>,
      },
    ],
  },
];

const AdminDashboardLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // const location = useLocation();
  // const hasOutlet = location.pathname !== "/admin";

  return (
    <Layout>
      <HeaderComponent />
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
          <Content
            style={{
              padding: "0 24px",
              minHeight: "80vh",
              display: "flex",
              width: "100%",
              margin: "0 auto",
            }}
          >
            {/* {hasOutlet ? <Outlet /> : <BlogsStats />} */}
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AdminDashboardLayout;
