import type { Asset, FlowNode } from '@/mocks/data';

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
  };
}

interface RiskSummary {
  critical: number;
  high: number;
  medium: number;
  low: number;
}

export const api = {
  // Assets
  getAssets: async ({ page = 1, pageSize = 10, sort, order = 'asc' }: PaginationParams = {}) => {
    const response = await fetch(
      `/api/assets?page=${page}&pageSize=${pageSize}${sort ? `&sort=${sort}&order=${order}` : ''}`
    );
    if (!response.ok) throw new Error('Failed to fetch assets');
    return response.json() as Promise<PaginatedResponse<Asset>>;
  },

  getAssetById: async (id: string) => {
    const response = await fetch(`/api/assets/${id}`);
    if (!response.ok) throw new Error('Failed to fetch asset');
    return response.json() as Promise<{ data: Asset }>;
  },

  // Flow Nodes
  getFlowNodes: async () => {
    const response = await fetch('/api/flow-nodes');
    if (!response.ok) throw new Error('Failed to fetch flow nodes');
    return response.json() as Promise<{ data: FlowNode[] }>;
  },

  // Risk Summary
  getRiskSummary: async () => {
    const response = await fetch('/api/risk-summary');
    if (!response.ok) throw new Error('Failed to fetch risk summary');
    return response.json() as Promise<{ data: RiskSummary }>;
  },
}; 