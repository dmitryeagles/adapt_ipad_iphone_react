export type Icon = {
  id: string;
  path: string;
  name: string;
};

export type CustomPaginationProps = {
  total: number;
  perPage: number;
  onPage: (page: number) => void;
};

export type TPagination = { 
  itemsPerPage: number, 
  totalItems: number, 
  paginate: any 
};