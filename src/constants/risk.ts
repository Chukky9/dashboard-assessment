import type { RiskLevel } from '@/types/risk';

export const riskLevels: RiskLevel[] = [
  { level: 'Critical', color: 'brand.danger' },
  { level: 'High', color: 'orange.500' },
  { level: 'Medium', color: 'brand.warning' },
  { level: 'Low', color: 'brand.primary' },
]; 