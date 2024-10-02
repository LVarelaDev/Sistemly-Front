import axiosIntance from "@/lib/axios.config";
import { KeyValue } from "@/models/KeyValue";

export enum EnumEndpoints {
  GetCompanies = "Utils/GetCompanies",
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
