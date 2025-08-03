import { FiMail } from 'react-icons/fi';

export interface NodeProps {
  icon: typeof FiMail;
  label: string;
  subLabel?: string;
  bgColor?: string;
  badge?: {
    count: number;
    color: string;
  };
  badgeIcon?: typeof FiMail;
  isServer?: boolean;
}

export interface FlowNode {
  id: string;
  label: string;
  badge?: number;
  status?: 'active' | 'warning' | 'error';
  connections: string[];
} 