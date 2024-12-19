import { UserCreateUpdateForm } from "./components/createUpdateForm";
import { UsersCreateUpdateFormSkeleton } from "./components/skeleton";
import { Divider } from "antd";
import { useCreateUser } from "../../react-query/users-query";
import { useNavigate } from "react-router-dom";

export const UsersCreate = () => {
  const navigate = useNavigate();
  const { createUserMutate, error, isError, isPending, isSuccess } =
    useCreateUser();

  const handleSubmit = (payload: {
    email: string;
    phone: string;
    password: string;
  }) => {
    createUserMutate(payload);
    navigate("/admin/user/list");
  };

  return (
    <div className="ml-10 w-[36rem] bg-gray-100 p-8">
      <h1 className="text-left mx-auto text-2xl font-bold">Add New User</h1>
      <Divider
        type="horizontal"
        style={{ height: "1px", backgroundColor: "#1677FF" }}
      />
      {isPending ? (
        <UsersCreateUpdateFormSkeleton />
      ) : (
        <UserCreateUpdateForm
          handleSubmit={handleSubmit}
          error={error}
          isError={isError}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};

export default UsersCreate;
