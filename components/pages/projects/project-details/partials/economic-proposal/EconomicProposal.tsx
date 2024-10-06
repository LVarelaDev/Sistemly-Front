import BaseFetchContainer from "@/components/shared/BaseFetchContainer";
import { CustomGrid, CustomGridColumn } from "@/components/ui/Table/FTable";
import { EconomicProposalDto } from "@/models/projects/economicProposal";
import { ProjectDto } from "@/models/projects/projectDto";
import {
  EnumEndpoints,
  getEconomicProposal,
} from "@/services/projects/projectService";
import { convertToCOP } from "@/utils/helpers/convertToCOP";
import { useForm } from "react-hook-form";
import useSWR, { KeyedMutator } from "swr";
import ModalDelete from "./partials/ModalDelete";
import ModalEdit from "./partials/ModalEdit";
import TableHeader from "./partials/TableHeader";

const EconomicProposal = ({
  id,
  mutateProject,
}: {
  id: number;
  mutateProject: KeyedMutator<ProjectDto>;
}) => {
  const form = useForm();
  const searchValue = form.watch("searchValue");

  const { data, isLoading, error, mutate } = useSWR(
    [EnumEndpoints.GetEconomicProposal, searchValue],
    () => getEconomicProposal(id, searchValue)
  );

  return (
    <div className="flex flex-col gap-4">
      <TableHeader
        form={form}
        projectId={id}
        mutate={mutate}
        mutateProject={mutateProject}
      />
      <BaseFetchContainer data={data} isLoading={isLoading} error={error}>
        <CustomGrid<EconomicProposalDto> dataList={data} keyIdentifier="id">
          <CustomGridColumn<EconomicProposalDto>
            labelHeader="Item"
            colRender={(_, item) => item.item}
          />
          <CustomGridColumn<EconomicProposalDto>
            labelHeader="Nombre"
            colRender={(_, item) => item.name}
          />
          <CustomGridColumn<EconomicProposalDto>
            labelHeader="Unidad de medida"
            colRender={(_, item) => item.unitMeasure}
          />
          <CustomGridColumn<EconomicProposalDto>
            labelHeader="Cantidad"
            colRender={(_, item) => item.quantity}
          />
          <CustomGridColumn<EconomicProposalDto>
            labelHeader="Valor unitario + IVA"
            colRender={(_, item) => convertToCOP(item.unitAmount)}
          />

          <CustomGridColumn<EconomicProposalDto>
            labelHeader="Acciones"
            colRender={(_, item) => (
              <div className="flex gap-3">
                <ModalEdit
                  economicProposal={item}
                  mutate={mutate}
                  mutateProject={mutateProject}
                />
                <ModalDelete
                  id={item.id}
                  mutate={mutate}
                  mutateProject={mutateProject}
                />
              </div>
            )}
          />
        </CustomGrid>
      </BaseFetchContainer>
    </div>
  );
};

export default EconomicProposal;
