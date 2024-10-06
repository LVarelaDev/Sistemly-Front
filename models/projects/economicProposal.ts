export interface EconomicProposalDto {
    id: number;
    item: number;
    name: string;
    unitMeasure: string;
    quantity: number;
    unitAmount: number;
    active: boolean;
}


export interface AddMoreEconomicProposalDto {
    projectId: number;
    file: File;
    newFinishDate: Date | null;
}