import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import Column from "antd/es/table/Column";
import { getUsersForAdmin } from "../../supabase/admin/supabaseAdmin";

const UsersList = () => {
  const { data } = useQuery({
    queryKey: ["get-users-for-admin"],
    queryFn: getUsersForAdmin,
  });

  return (
    <Table
      bordered
      dataSource={data?.map((user) => ({ ...user, key: user.id }))}
    >
      <Column title="Email" dataIndex="email" />
      <Column title="Created At" dataIndex="created_at" />
      <Column title="Phone" dataIndex="phone" />
      <Column title="Last Sign In" dataIndex="last_sign_in_at" />
    </Table>
  );
};

export default UsersList;
