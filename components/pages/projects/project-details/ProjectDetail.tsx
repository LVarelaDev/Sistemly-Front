import { ProjectDto } from "@/models/projects/projectDto";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import ProjectInformation from "./partials/project-information/ProjectInformation";
import EconomicProposal from "./partials/economic-proposal/EconomicProposal";
import { KeyedMutator } from "swr";

interface Props {
  project: ProjectDto;
  mutateProject: KeyedMutator<ProjectDto>;
}

const ProjectDetail = ({ project, mutateProject }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl uppercase font-bold text-default-800">
        {project.name}
      </p>
      <div className="flex w-full  flex-col">
        <Tabs aria-label="Options">
          <Tab
            key="information"
            title="Información general"
            className="flex justify-center items-center"
          >
            <Card className="w-1/2">
              <CardBody>
                <ProjectInformation project={project} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="economicProposal" title="Propuesta economica">
            <div>
              <EconomicProposal id={project.id} mutateProject={mutateProject} />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectDetail;
