import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

export function useFlowNodes() {
  return useQuery({
    queryKey: ['flowNodes'],
    queryFn: api.getFlowNodes,
  });
} 