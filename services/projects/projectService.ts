import axiosIntance from "@/lib/axios.config";
import { KeyValue } from "@/models/KeyValue";
import { PaginatorResponse } from "@/models/PaginatorResponse";
import { ProjectDto } from "@/models/projects/projectDto";

export enum EnumEndpoints {
  GetProjects = "Project/GetProjects",
  GetProjectById = "Project/GetProjectsById",
  CreateProject = "Project/Project",
}

interface Params {
  page?: number;
  pageSize?: number;
  sort?: string;
}

export const getProjects = async ({
  page,
  pageSize,
  sort,
}: Params): Promise<PaginatorResponse<ProjectDto>> => {
  try {
    const response = await axiosIntance.get<PaginatorResponse<ProjectDto>>(
      `${EnumEndpoints.GetProjects}?pageIndex=${page}&pageSize=${pageSize}${sort !== undefined ? `&sort=${sort}` : ""}`
    );

    return response.data;
  } catch (err) {
    throw "error in getProjects";
  }
};

export const getProjectsById = async (id: number): Promise<ProjectDto> => {
  try {
    const response = await axiosIntance.get<ProjectDto>(
      `${EnumEndpoints.GetProjectById}?id=${id}`
    );

    return response.data;
  } catch (err) {
    throw "error in getProjectsById";
  }
};

export const createProject = async (project: ProjectDto): Promise<KeyValue> => {
  try {
    const formData = new FormData();
    formData.append(
      "budget",
      project.budget.toString() == "" ? "0" : project.budget.toString()
    );
    formData.append("economicProposal", project.economicProposal.toString());
    formData.append("clientId", project.clientId.toString());
    formData.append("finishDate", project.finishDate.toString());
    formData.append("initDate", project.initDate.toString());
    formData.append("name", project.name);
    formData.append("description", project.description);

    if (project.economicProposalFile) {
      formData.append("economicProposalFile", project.economicProposalFile[0]);
    }

    const response = await axiosIntance.post<KeyValue>(
      `${EnumEndpoints.CreateProject}`,
      formData,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (err) {
    throw "error in createProject";
  }
};
