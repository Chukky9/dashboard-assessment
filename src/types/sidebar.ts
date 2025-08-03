import { FiGrid } from 'react-icons/fi';

export interface NavItemProps {
  icon: typeof FiGrid;
  label: string;
  isActive?: boolean;
  isCollapsed?: boolean;
} 