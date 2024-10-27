import axiosIntance from "@/lib/axios.config";
import { KeyValue } from "@/models/KeyValue";
import {
  CreateRequestPayloadDto,
  DetailDataRequest,
  GeneralDataRequestDto,
} from "@/models/Requests/Requests";

export enum EnumEndpoints {
  GetRequests = "Request",
  GetRequestDetail = "Request/GetRequestDetail",
  CreateRequest = "Request/CreateRequest",
}

export const getRequests = async (): Promise<GeneralDataRequestDto[]> => {
  try {
    const response = await axiosIntance.get<GeneralDataRequestDto[]>(
      `${EnumEndpoints.GetRequests}`
    );
    return response.data;
  } catch (error) {
    throw "Error in getRequests";
  }
};

export const createRequest = async (
  payload: CreateRequestPayloadDto
): Promise<KeyValue> => {
  try {
    const response = await axiosIntance.post<KeyValue>(
      `${EnumEndpoints.CreateRequest}`,
      payload
    );
    return response.data;
  } catch (error) {
    throw "Error in createRequest";
  }
};

export const getRequestDetail = async (
  requestId: number
): Promise<DetailDataRequest> => {
  try {
    const response = await axiosIntance.get<DetailDataRequest>(
      `${EnumEndpoints.GetRequestDetail}?requestId=${requestId}`
    );
    return response.data;
  } catch (error) {
    throw "Error in getRequestDetail";
  }
};
