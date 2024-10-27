export interface CreateRequestPayloadDto {
  type: string;
  assignedUser: number[];
  projectId: number;
  desctiption: string;
  status: string;
  priority: string;
  materials: RequestMaterialsDto[];
}

export interface RequestMaterialsDto {
  id: number | null;
  name: string;
  unitMeasure: string;
  unitAmount: number;
  quantity: number;
}

export interface GeneralDataRequestDto {
  id: number;
  name: string;
  priority: string;
  userCreated: string;
  createDate: Date;
  letterIcon: string;
}

export interface DetailDataRequest {
  requestInformation: RequestInformation;
  materials: RequestMaterialsDto[];
}

export interface RequestInformation {
  id: number;
  name:string;
  createdByUser: string;
  type: string;
  project: string;
  priority: string;
  status: string;
  description: string;
  assignedUsers: AssignedUsers[];
}

export interface AssignedUsers {
  name: string;
  companyName: string;
  letterIcon: string;
}
