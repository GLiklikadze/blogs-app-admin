import { PropertySafetyTwoTone, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout } from "antd";
import { useAuthContext } from "../context/hooks/useAuthContext";
import { useLogOut } from "../react-query/auth-query";
const { Header } = Layout;

export const HeaderComponent = () => {
  const { user } = useAuthContext();

  const { mutateLogOut } = useLogOut();
  const handleLogOut = () => {
    mutateLogOut();
  };
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 className="text-white text-lg font-semibold">
        <PropertySafetyTwoTone /> Blogs Admin Panel
      </h1>
      <div className="flex flex-row items-center gap-2">
        <Avatar
          style={{ backgroundColor: "#1766FF" }}
          icon={<UserOutlined />}
          size="default"
        />
        <p className="text-white text-md font-semibold ">
          {user?.email ?? "useremail@gmail.com"}
        </p>
        <Button onClick={handleLogOut}>Sign Out</Button>
      </div>
    </Header>
  );
};

export default Header;
