/**
 * Node Component
 * 
 * A versatile node component used in flow diagrams, featuring:
 * - Customizable icon and background color
 * - Optional badge with count or icon
 * - Optional sublabel for additional information
 * - Animated hover effects
 * - Responsive sizing
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Node
 *   icon={ServerIcon}
 *   label="Main Server"
 *   bgColor="blue.50"
 * />
 * 
 * // With badge and sublabel
 * <Node
 *   icon={ServerIcon}
 *   label="Email Gateway"
 *   bgColor="red.50"
 *   badgeIcon={UserGroupIcon}
 *   badge={{ count: 24, color: '#7A44FF' }}
 *   subLabel="192.168.1.1"
 * />
 * ```
 * 
 * @param props - Component props
 * @param props.icon - Icon component to display
 * @param props.label - Primary text label
 * @param props.subLabel - Optional secondary text label
 * @param props.bgColor - Background color for the node
 * @param props.badge - Optional badge configuration
 * @param props.badgeIcon - Optional icon for the badge
 * @param props.isServer - Whether the node represents a server
 */

'use client';

import { Box, Text, Circle, Icon } from '@chakra-ui/react';
import type { NodeProps } from '@/types/flow';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const Node = ({ icon, label, subLabel, bgColor = 'red.50', badge, badgeIcon, isServer }: NodeProps) => (
  <Box position="relative" textAlign="center" data-testid={`node-${label.toLowerCase().replace(/\s+/g, '-')}`}>
    <Circle 
      size={{ base: "48px", md: "60px" }}
      bg={bgColor}
      position="relative"
    >
      <Icon as={icon} boxSize={{ base: 5, md: 6 }} color="gray.600" />
      {badge && (
        <Circle
          size={{ base: "20px", md: "24px" }}
          bg={badge.color}
          color="white"
          fontSize="xs"
          fontWeight="bold"
          position="absolute"
          top="-8px"
          right="-8px"
          border="2px"
          borderColor="white"
          transition="all 0.3s ease"
          animation={badge.color === 'red.500' ? `${pulse} 2s infinite ease-in-out` : undefined}
          data-testid={`badge-${label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {badgeIcon ? (
            <Icon 
              as={badgeIcon} 
              color="white" 
              boxSize={{ base: 3, md: 4 }} 
              transition="transform 0.2s ease"
              _groupHover={{ transform: 'scale(1.1)' }}
            />
          ) : badge.count}
        </Circle>
      )}
      {(isServer && badgeIcon) && (
        <Circle
          size={{ base: "16px", md: "20px" }}
          bg="red.500"
          color="white"
          fontSize="xs"
          fontWeight="bold"
          position="absolute"
          top="-8px"
          right="-8px"
          border="2px"
          borderColor="white"
          data-testid={`server-badge-${label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <Icon as={badgeIcon} color="white" boxSize={{ base: 3, md: 4 }} className='size-3'/>
        </Circle>
      )}
    </Circle>
    <Text 
      mt={2} 
      fontSize={{ base: "xs", md: "sm" }}
      color="gray.700"
      fontWeight="medium"
      maxW={{ base: "80px", md: "120px" }}
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      data-testid={`label-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {label}
    </Text>
    {subLabel && (
      <Text 
        fontSize={{ base: "2xs", md: "xs" }} 
        color="gray.500"
        maxW={{ base: "80px", md: "120px" }}
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        data-testid={`sublabel-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {subLabel}
      </Text>
    )}
  </Box>
); 