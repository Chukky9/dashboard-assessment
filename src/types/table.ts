export interface Column<T> {
  header: string;
  accessorKey: keyof T;
  cell?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onSort?: (field: keyof T) => void;
  sortField?: keyof T;
  sortDirection?: 'asc' | 'desc';
} 