import axiosIntance from "@/lib/axios.config";
import { Company, CompanyDto } from "@/models/companies/company";
import { KeyValue } from "@/models/KeyValue";

export enum EnumEndpointsCompany {
  CreateCompany = "Auth/RegisterCompany",
  GetCompanyInformation = "Company",
}

export const getCompany = async (): Promise<CompanyDto> => {
  try {
    const response = await axiosIntance.get<CompanyDto>(
      `${EnumEndpointsCompany.GetCompanyInformation}`
    );

    return response.data;
  } catch (err) {
    throw "error in getCompany";
  }
};

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
