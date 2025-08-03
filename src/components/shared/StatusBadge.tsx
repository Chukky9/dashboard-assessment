/**
 * StatusBadge Component
 * 
 * A reusable badge component for displaying status information, featuring:
 * - Predefined status types (critical, high, medium, low)
 * - Status-specific colors and styling
 * - Custom content support
 * - Consistent design across the application
 * 
 * The component uses predefined status configurations from constants
 * to ensure consistent styling and behavior across the application.
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage with status
 * <StatusBadge status="critical" />
 * 
 * // With custom content
 * <StatusBadge status="high">
 *   Custom Label
 * </StatusBadge>
 * 
 * // With additional Chakra UI props
 * <StatusBadge
 *   status="medium"
 *   size="lg"
 *   variant="solid"
 * />
 * ```
 * 
 * @param props - Component props
 * @param props.status - The status to display (critical, high, medium, low)
 * @param props.children - Optional custom content to display instead of default label
 */

'use client';

import { Badge } from '@chakra-ui/react';
import type { StatusBadgeProps } from '@/types/status';
import { statusConfig } from '@/constants/status';

export default function StatusBadge({ status, children, ...props }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <Badge
      px={3}
      py={1}
      borderRadius="full"
      color={config.color}
      bgColor={config.bg}
      fontSize="xs"
      fontWeight="bold"
      {...props}
    >
      {children || config.label}
    </Badge>
  );
} 