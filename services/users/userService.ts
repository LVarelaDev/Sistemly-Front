import axiosIntance from "@/lib/axios.config";
import { KeyValue } from "@/models/KeyValue";
import { CreateUserDto, UserListDto } from "@/models/users/usersDto";

export enum EnumEndpoints {
  GetUsers = "Users",
  CreateUser = "Users",
}

export const getUsers = async (): Promise<UserListDto[]> => {
  try {
    const response = await axiosIntance.get<UserListDto[]>(
      `${EnumEndpoints.GetUsers}`
    );

    return response.data;
  } catch (err) {
    throw "error un getUsers";
  }
};

export const createUser = async (
  createUser: CreateUserDto
): Promise<KeyValue> => {
  try {
    const response = await axiosIntance.post<KeyValue>(
      `${EnumEndpoints.GetUsers}`,
      createUser
    );

    return response.data;
  } catch (err) {
    throw "error un createUser";
  }
};
