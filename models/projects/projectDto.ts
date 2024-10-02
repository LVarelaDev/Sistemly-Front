import { Client } from "../clients/client";
import { Company } from "../companies/company";

export interface ProjectDto {
  id?: number;
  name: string;
  clientId: number;
  companyId?: number;
  budget: number;
  materialDescriptions?: string | null;
  initDate: Date;
  finishDate: Date;
  status?: string | null;
  client?: Client | null;
  company?: Company | null;
}
