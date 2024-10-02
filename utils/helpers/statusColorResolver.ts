import { ProjectStatusEnum } from "../enums/projectStatus.enum";

type RecordObject = {
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  value: string;
};

export const statusColorResolver = (status: string): RecordObject => {
  let result: RecordObject;

  switch (status) {
    case ProjectStatusEnum.Activo:
      result = {
        color: "success",
        value: ProjectStatusEnum.Activo,
      };
      break;

    case ProjectStatusEnum.Inactivo:
      result = {
        color: "danger",
        value: ProjectStatusEnum.Inactivo,
      };
      break;

    default:
      result = {
        color: "default",
        value: status,
      };
  }

  return result;
};
