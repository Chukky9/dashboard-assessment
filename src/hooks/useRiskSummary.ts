import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

export function useRiskSummary() {
  return useQuery({
    queryKey: ['riskSummary'],
    queryFn: api.getRiskSummary,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 10000, // Consider data stale after 10 seconds
  });
} 