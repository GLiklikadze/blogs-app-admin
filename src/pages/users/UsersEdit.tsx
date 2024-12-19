import { UserCreateUpdateForm } from "./components/createUpdateForm";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleUser,
  useUpdateSingleUser,
} from "../../react-query/users-query";
import { UsersCreateUpdateFormSkeleton } from "./components/skeleton";
import { Divider } from "antd";

export const UsersEdit = () => {
  const { id } = useParams<{ id: string }>();

  const { mutateUser, error, isError, isSuccess } = useUpdateSingleUser();

  const navigate = useNavigate();

  const handleSubmit = (values: { email: string; phone: string }) => {
    mutateUser({ id: id ?? "", payload: values });
    navigate("/admin/user/list");
  };

  const { data: singleUserData, isLoading } = useGetSingleUser(id as string);

  return (
    <div className="ml-10 w-[36rem] bg-gray-100 p-8">
      <h1 className="text-left mx-auto text-2xl font-bold">Edit User</h1>
      <Divider
        type="horizontal"
        style={{ height: "1px", backgroundColor: "#1677FF" }}
      />
      {isLoading || !singleUserData ? (
        <UsersCreateUpdateFormSkeleton />
      ) : (
        <UserCreateUpdateForm
          singleUserData={singleUserData}
          handleSubmit={handleSubmit}
          error={error}
          isError={isError}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};

export default UsersEdit;
