import BaseFetchContainer from "@/components/shared/BaseFetchContainer";
import ProfileLogo from "@/components/ui/Profile/ProfileLogo";
import { CustomGrid, CustomGridColumn } from "@/components/ui/Table/FTable";
import { UserListDto } from "@/models/users/usersDto";
import { EnumEndpoints } from "@/services/users/userService";
import { getUsers } from "@/services/users/userService";
import { statusColorResolver } from "@/utils/helpers/statusColorResolver";
import { Button, Chip } from "@nextui-org/react";
import React from "react";
import useSWR from "swr";
import ModalAddManage from "./partials/ModalAddManage";

const UserCardManage = () => {
  const {
    data: users,
    isLoading,
    error,
    mutate: mutateUser,
  } = useSWR([EnumEndpoints.GetUsers], () => getUsers());

  const renderStatusChip = (value: string) => {
    const colorResolver = statusColorResolver(value);

    return <Chip color={colorResolver.color}>{colorResolver.value}</Chip>;
  };

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg border">
      <ModalAddManage mutateUser={mutateUser} />
      <div className="custom-scroll px-1 max-h-[600px] overflow-y-auto">
        <BaseFetchContainer isLoading={isLoading} data={users} error={error}>
          <CustomGrid<UserListDto> dataList={users ?? []} keyIdentifier="id">
            <CustomGridColumn<UserListDto>
              labelHeader="Nombre"
              colRender={(_, project) => (
                <div className=" flex gap-2 items-center">
                  <ProfileLogo lettersIcon={project.letterForIcon} />
                  {project.name}
                </div>
              )}
            />
            <CustomGridColumn<UserListDto>
              labelHeader="Cliente"
              colRender={(_, project) => project.rol ?? "no hay registro"}
            />
            <CustomGridColumn<UserListDto>
              labelHeader="Correo"
              colRender={(_, project) => project.email ?? "no hay registro"}
            />
            <CustomGridColumn<UserListDto>
              labelHeader="Estado"
              colRender={(_, project) => renderStatusChip(project.status)}
            />
          </CustomGrid>
        </BaseFetchContainer>
      </div>
    </div>
  );
};

export default UserCardManage;
