import { CustomGrid, CustomGridColumn } from "@/components/ui/Table/FTable";
import { PaginatorResponse } from "@/models/PaginatorResponse";
import { ProjectDto } from "@/models/projects/projectDto";
import { convertToCOP } from "@/utils/helpers/convertToCOP";
import { formatDate } from "@/utils/helpers/formatDate";
import { statusColorResolver } from "@/utils/helpers/statusColorResolver";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip, Tooltip } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  data?: PaginatorResponse<ProjectDto>;
}

const TableProject = ({ data }: Props) => {
  const renderStatusChip = (value: string) => {
    const colorResolver = statusColorResolver(value);

    return <Chip color={colorResolver.color}>{colorResolver.value}</Chip>;
  };

  return (
    <CustomGrid<ProjectDto> dataList={data?.dataList ?? []} keyIdentifier="id">
      <CustomGridColumn<ProjectDto>
        labelHeader="Nombre"
        colRender={(_, project) => project.name}
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Cliente"
        colRender={(_, project) =>
          project?.client?.companyName ?? "no hay registro"
        }
      />
      {/* <CustomGridColumn<ProjectDto>
        labelHeader="Empresa"
        colRender={(_, project) =>
          project?.company?.companyName ?? "no hay registro"
        }
      /> */}
      <CustomGridColumn<ProjectDto>
        labelHeader="Presupuesto"
        colRender={(_, project) => convertToCOP(project.budget)}
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Estado"
        colRender={(_, project) => renderStatusChip(project.status ?? "")}
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Fecha inicio"
        colRender={(_, project) => formatDate(project.initDate)}
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Fecha fin"
        colRender={(_, project) => formatDate(project.finishDate)}
      />
      <CustomGridColumn<ProjectDto>
        labelHeader="Acciones"
        colRender={(_, project) => (
          <div className="flex gap-3">
            <Tooltip content="Ver detalle" delay={100} closeDelay={50}>
              <Link href={`/projects/manage?id=${project.id}`}>
                <FontAwesomeIcon icon={faEye} className="text-default-500" />
              </Link>
            </Tooltip>
          </div>
        )}
      />
    </CustomGrid>
  );
};

export default TableProject;
