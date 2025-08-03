export interface RiskLevel {
  level: string;
  count?: number;
  color: string;
}

export interface RiskSummary {
  critical: number;
  high: number;
  medium: number;
  low: number;
} 