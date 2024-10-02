import axiosIntance from "@/lib/axios.config";
import { Company } from "@/models/companies/company";
import { KeyValue } from "@/models/KeyValue";

export enum EnumEndpointsCompany {
  CreateCompany = "Auth/RegisterCompany",
}

export const createCompany = async (company: Company): Promise<KeyValue> => {
  try {
    const response = await axiosIntance.post<KeyValue>(
      `${EnumEndpointsCompany.CreateCompany}`,
      company
    );

    return response.data;
  } catch (err) {
    throw "error in CreateCompany";
  }
};
