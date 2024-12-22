import { Button, Table } from "antd";
import Column from "antd/es/table/Column";
import { getFormattedDate } from "../../utils/getFormattedDate";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useGetUsersList } from "../../react-query/query/users/users-query";
import { ADMIN_PATHS } from "@/routes/admin-dashboard/adminRoutes.enum";

const UsersList = () => {
  const { data: usersListData, isLoading } = useGetUsersList();
  const navigate = useNavigate();
  const handleNavigateToUserEdit = (id: string) => {
    navigate(`/${ADMIN_PATHS.ADMIN}/${ADMIN_PATHS.USER_UPDATE}/${id}`);
  };
  const handleUserCreate = () => {
    navigate(`/${ADMIN_PATHS.ADMIN}/${ADMIN_PATHS.USER_CREATE}`);
  };
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
          Create User
        </Button>
      )}
      dataSource={usersListData?.map((user) => ({
        ...user,
        key: user.id,
        formatted_create_date: getFormattedDate(user?.created_at),
        formatted_last_sign_in_at: getFormattedDate(
          user?.last_sign_in_at || ""
        ),
        id: user?.id,
      }))}
    >
      <Column title="Email" dataIndex="email" />
      <Column title="Created At" dataIndex="formatted_create_date" />
      <Column title="Phone" dataIndex="phone" />
      <Column title="Last Sign In" dataIndex="formatted_last_sign_in_at" />
      <Column
        title="Actions"
        render={(_, row) => {
          return (
            <div
              className="space-x-1 cursor-pointer"
              onClick={() => {
                handleNavigateToUserEdit(row?.id);
              }}
            >
              <EditOutlined className="cursor-pointer text-xl text-blue-500" />
              <span className="text-blue-500">Edit</span>
            </div>
          );
        }}
      />
    </Table>
  );
};

export default UsersList;
