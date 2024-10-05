import { File } from "buffer";
import { Client } from "../clients/client";
import { Company } from "../companies/company";

export interface ProjectDto {
  id?: number;
  name: string;
  clientId: number;
  companyId?: number;
  economicProposal: boolean;
  budget?: number;
  description?: string | null;
  initDate: Date;
  finishDate: Date;
  economicProposalFile?: File;
  status?: string | null;
  client?: Client | null;
  company?: Company | null;
}
