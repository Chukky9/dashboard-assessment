'use client';

import { useState } from 'react';
import { Box, Text, HStack, Icon, Spinner, Center, Circle, HStack as ChakraHStack } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Table from '@/components/shared/Table/Table';
import StatusBadge from '@/components/shared/StatusBadge';
import { useAssets } from '@/hooks/useAssets';
import type { StatusType } from '@/types/status';
import type { Asset } from '@/mocks/data';
import { ServerIcon } from '@/app/icons';
import { Column } from '@/types/table';

export default function AssetTable() {
  const [sortField, setSortField] = useState<keyof Asset>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading, isError } = useAssets({
    page,
    pageSize,
    sort: sortField,
    order: sortDirection,
  });

  const handleSort = (field: keyof Asset) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  if (isLoading) {
    return (
      <Center p={8}>
        <Spinner />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center p={8}>
        <Text color="red.500">Error loading assets</Text>
      </Center>
    );
  }

  const columns: Column<Asset>[] = [
    {
      header: 'Asset',
      accessorKey: 'name' as keyof Asset,
      cell: (value: string, row: Asset) => (
        <ChakraHStack gap={4} w="full">
            <Circle 
                size={{ base: "32px", md: "40px" }}
                bg="#D7EAFF"
                position="relative"
                transition="all 0.2s ease"
                _hover={{
                    boxShadow: 'sm'
                }}
                >
                <Icon 
                    as={ServerIcon} 
                    boxSize={{ base: 3, md: 4 }} 
                    color="gray.600"
                    transition="transform 0.2s ease"
                    _groupHover={{ transform: 'scale(1.1)' }}
                />
            </Circle>
            <Box>
                <Text fontWeight="medium">{value}</Text>
                <Text fontSize="sm" color="gray.500">{row.ipAddress}</Text>
            </Box>
        </ChakraHStack>
      ),
    },
    {
      header: 'Contextual Risk',
      accessorKey: 'status',
      cell: (value: string) => (
        <Box display="flex" justifyContent="center" alignItems="center" w="full">
            <StatusBadge status={value as StatusType} />
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Table<Asset>
        columns={columns}
        data={data?.data || []}
        onSort={handleSort}
        sortField={sortField}
        sortDirection={sortDirection}
      />
      
      <Box display="flex" justifyContent="center" mt={4} borderTop="1px" borderColor="gray.200" borderStyle="solid">
        <HStack gap={4} align="center">
          <Box 
            as="button"
            p={2}
            opacity={page === 1 ? 0.5 : 1}
            cursor={page === 1 ? "not-allowed" : "pointer"}
            onClick={() => page > 1 && setPage(page - 1)}
          >
            <Icon as={FiChevronLeft} boxSize={4} />
          </Box>

          <Text fontSize="sm" color="gray.600" minW="120px" textAlign="center">
            Showing {((page - 1) * pageSize) + 1}-{Math.min(page * pageSize, data?.meta.total || 0)} of {data?.meta.total || 0}
          </Text>

          <Box 
            as="button"
            p={2}
            opacity={page * pageSize >= (data?.meta.total || 0) ? 0.5 : 1}
            cursor={page * pageSize >= (data?.meta.total || 0) ? "not-allowed" : "pointer"}
            onClick={() => page * pageSize < (data?.meta.total || 0) && setPage(page + 1)}
          >
            <Icon as={FiChevronRight} boxSize={4} />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
} 