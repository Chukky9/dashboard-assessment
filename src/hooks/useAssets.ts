import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';
import type { PaginationParams } from '@/services/api';

export function useAssets(params: PaginationParams = {}) {
  return useQuery({
    queryKey: ['assets', params],
    queryFn: () => api.getAssets(params),
  });
}

export function useAssetById(id: string) {
  return useQuery({
    queryKey: ['asset', id],
    queryFn: () => api.getAssetById(id),
  });
} 