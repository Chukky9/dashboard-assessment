import { BadgeProps } from '@chakra-ui/react';

export type StatusType = 'critical' | 'high' | 'medium' | 'low';

export interface StatusBadgeProps extends Omit<BadgeProps, 'colorScheme'> {
  status: StatusType;
}

export type StatusConfigItem = {
  bg: string;
  color: string;
  label: string;
};

export type StatusConfig = Record<StatusType, StatusConfigItem>; 