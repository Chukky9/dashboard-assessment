/**
 * Generic Table Component
 * 
 * A reusable table component that supports:
 * - Custom column definitions
 * - Sortable columns
 * - Custom cell rendering
 * - Responsive design
 * - Accessibility features
 * 
 * @component
 * @template T - The type of data being displayed in the table
 * 
 * @example
 * ```tsx
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 * }
 * 
 * const columns: Column<User>[] = [
 *   { header: 'Name', accessorKey: 'name' },
 *   { header: 'Email', accessorKey: 'email' },
 * ];
 * 
 * const data: User[] = [
 *   { id: 1, name: 'John Doe', email: 'john@example.com' },
 * ];
 * 
 * <Table<User>
 *   columns={columns}
 *   data={data}
 *   onSort={(field) => console.log(`Sort by ${field}`)}
 *   sortField="name"
 *   sortDirection="asc"
 * />
 * ```
 * 
 * @param props - Component props
 * @param props.columns - Array of column definitions
 * @param props.data - Array of data items to display
 * @param props.onSort - Optional callback for handling column sorting
 * @param props.sortField - Optional field to sort by
 * @param props.sortDirection - Optional sort direction ('asc' or 'desc')
 */

'use client';

import { Box, Icon } from '@chakra-ui/react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import type { TableProps } from '@/types/table';

export default function Table<T extends object>({
  columns,
  data,
  onSort,
  sortField,
  sortDirection,
}: TableProps<T>) {
  const handleSort = (field: keyof T) => {
    if (onSort) {
      onSort(field);
    }
  };

  return (
    <Box w="full">
      <Box as="table" w="full" borderCollapse="collapse">
        <Box as="thead">
          <Box 
            as="tr" 
            borderBottom="1px" 
            borderColor="gray.200"
            borderStyle="solid"
          >
            {columns.map((column) => (
              <Box
                as="th"
                key={String(column.accessorKey)}
                onClick={() => handleSort(column.accessorKey)}
                cursor={onSort ? 'pointer' : 'default'}
                position="relative"
                py={4}
                px={6}
                textAlign={column.header === 'Contextual Risk' ? 'right' : 'left'}
                fontSize="sm"
                fontWeight="medium"
                color="gray.400"
                transition="all 0.2s ease"
                _hover={onSort ? { 
                  bg: 'gray.50',
                  color: 'gray.800'
                } : undefined}
                userSelect="none"
              >
                <Box 
                  display="flex" 
                  alignItems="center" 
                  gap={2}
                  justifyContent={column.header === 'Contextual Risk' ? 'flex-end' : 'flex-start'}
                >
                  {column.header}
                  {onSort && (
                    <Icon 
                      as={column.accessorKey === sortField 
                        ? (sortDirection === 'asc' ? FiChevronUp : FiChevronDown)
                        : FiChevronUp}
                      color={column.accessorKey === sortField ? "gray.600" : "gray.300"}
                      opacity={column.accessorKey === sortField ? 1 : 0.5}
                    />
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box as="tbody">
          {data.map((row, rowIndex) => (
            <Box
              as="tr"
              key={rowIndex}
              borderBottom="1px"
              borderColor="gray.200"
              borderStyle="solid"
              transition="all 0.2s ease"
              _hover={{ 
                bg: 'gray.50',
                transform: 'translateY(-1px)',
                boxShadow: 'sm'
              }}
              _last={{ borderBottom: 'none' }}
            >
              {columns.map((column) => (
                <Box
                  as="td"
                  key={String(column.accessorKey)}
                  py={4}
                  px={6}
                  fontSize="sm"
                  textAlign={column.header === 'Contextual Risk' ? 'right' : 'left'}
                >
                  <Box 
                    display="flex" 
                    justifyContent={column.header === 'Contextual Risk' ? 'flex-end' : 'flex-start'}
                  >
                    {column.cell
                      ? column.cell(row[column.accessorKey], row)
                      : row[column.accessorKey] as React.ReactNode}
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
} 