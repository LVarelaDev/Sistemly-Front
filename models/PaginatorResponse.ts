export interface PaginatorResponse<T>{
    currentPage:number;
    totalRecord: number;
    totalPages: number;
    pageSize: number;
    dataList: T[];
}