import axiosIntance from "@/lib/axios.config";
import { KeyValue } from "@/models/KeyValue";
import { RequestMaterialsDto } from "@/models/Requests/Requests";
import { UserDto } from "@/models/users/usersDto";

export enum EnumEndpoints {
  GetCompanies = "Utils/GetCompanies",
  GetUsersForCombo = "Utils/GetUsersForCombo",
  GetProjectByCompanyId = "Utils/GetProjectByCompanyId",
  GetEconomicProposalByProjectId = "Utils/GetEconomicProposalByProjectId",
  GetCompanyNameById = "Utils/GetCompanyNameById",
  GetRoles = "Utils/GetRoles",
}

export const getCompanies = async (): Promise<KeyValue[]> => {
  try {
    const response = await axiosIntance.get<KeyValue[]>(
      `${EnumEndpoints.GetCompanies}`
    );

    return response.data;
  } catch (err) {
    throw "error in getCompanies";
  }
};

export const getUsersForCombo = async (): Promise<UserDto[]> => {
  try {
    const response = await axiosIntance.get<UserDto[]>(
      `${EnumEndpoints.GetUsersForCombo}`
    );

    return response.data;
  } catch (err) {
    throw "error in getUsersForCombo";
  }
};

export const getProjectByCompanyId = async (): Promise<KeyValue[]> => {
  try {
    const response = await axiosIntance.get<KeyValue[]>(
      `${EnumEndpoints.GetProjectByCompanyId}`
    );

    return response.data;
  } catch (err) {
    throw "error in getProjectByCompanyId";
  }
};

export const getEconomicProposalByProjectId = async (
  projectId: number
): Promise<RequestMaterialsDto[]> => {
  try {
    const response = await axiosIntance.get<RequestMaterialsDto[]>(
      `${EnumEndpoints.GetEconomicProposalByProjectId}?projectId=${projectId}`
    );

    return response.data;
  } catch (err) {
    throw "error in getEconomicProposalByProjectId";
  }
};

export const getCompanyById = async (): Promise<string> => {
  try {
    const response = await axiosIntance.get<string>(
      `${EnumEndpoints.GetCompanyNameById}`
    );

    return response.data;
  } catch (err) {
    throw "error in GetCompanyNameById";
  }
};

export const getRoles = async (): Promise<KeyValue[]> => {
  try {
    const response = await axiosIntance.get<KeyValue[]>(
      `${EnumEndpoints.GetRoles}`
    );

    return response.data;
  } catch (err) {
    throw "error in getRoles";
  }
};
