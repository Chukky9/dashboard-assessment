import type { StatusConfig } from '@/types/status';

export const statusConfig: StatusConfig = {
  critical: {
    bg: 'rgba(239, 68, 68, 0.1)',
    color: 'status.critical',
    label: 'Critical'
  },
  high: {
    bg: 'rgba(245, 158, 11, 0.1)',
    color: 'status.high',
    label: 'High'
  },
  medium: {
    bg: 'rgba(16, 185, 129, 0.1)',
    color: 'status.medium',
    label: 'Medium'
  },
  low: {
    bg: 'rgba(99, 102, 241, 0.1)',
    color: 'status.low',
    label: 'Low'
  }
}; 