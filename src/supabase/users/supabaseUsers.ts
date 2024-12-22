import { User } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";

export const getUsersForAdmin = async (): Promise<User[]> => {
  try {
    const { data, error } = await supabase.auth.admin.listUsers();
    if (error) {
      throw new Error(error.message);
    }
    console.log(data.users);
    return data.users as unknown as User[];
  } catch (err) {
    console.error("Error during getting Users List", err);
    throw err;
  }
};
type UserResponse = {
  user: User;
};
export const updateUserByAdmin = async ({
  id,
  payload,
}: {
  id: string;
  payload: { email: string; phone: string };
}): Promise<UserResponse> => {
  console.log("update", id, payload);
  try {
    const { data, error } = await supabase.auth.admin.updateUserById(
      id,
      payload
    );
    if (error) {
      throw new Error(error.message);
    }
    console.log("editdata", data);
    return data;
  } catch (err) {
    console.error("Failed to edit data", err);
    throw err;
  }
};

export const getSingleUserForAdmin = async (id: string): Promise<User> => {
  try {
    const { data, error } = await supabase.auth.admin.getUserById(id);
    if (error) {
      throw new Error(error.message);
    }
    console.log(data);
    return data?.user;
  } catch (err) {
    console.error("Failed to fetch single user data", err);
    throw err;
  }
};
export const createNewUser = async (payload: {
  email: string;
  password: string;
  phone: string;
}): Promise<User> => {
  try {
    const { data, error } = await supabase.auth.admin.createUser(payload);
    if (error) {
      throw new Error(error.message);
    }
    console.log(data);
    return data?.user;
  } catch (err) {
    console.error("Failed to create User", err);
    throw err;
  }
};
