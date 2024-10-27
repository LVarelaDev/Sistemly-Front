export interface Company {
  id?: number;
  companyName: string;
  nit: string;
  rut: string;
  serviceType: number;
  category: string;
  email: string;
  emailVerified?: boolean;
  active?: boolean;
}

export interface CompanyDto {
  id: number;
  companyName: string;
  nit: string;
  serviceType: string;
  category: string;
}
