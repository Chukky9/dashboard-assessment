/**
 * RiskIndicator Component
 * 
 * A visual representation of risk levels in the system, featuring:
 * - A circular indicator showing critical risk count
 * - A list of all risk levels with their respective counts
 * - Animated elements for better user engagement
 * 
 * @component
 * @example
 * ```tsx
 * <RiskIndicator />
 * ```
 * 
 * The component uses TanStack Query for data fetching and caching,
 * with automatic background updates. It also includes loading and
 * error states for better UX.
 */

'use client';

import { Box, Text, VStack, HStack, Circle, Spinner, Center } from '@chakra-ui/react';
import { useRiskSummary } from '@/hooks/useRiskSummary';
import { riskLevels } from '@/constants/risk';
import { pulseAnimation, rotateAnimation } from '@/styles/animations';
import type { RiskSummary } from '@/types/risk';

export default function RiskIndicator() {
  const { data, isLoading, isError } = useRiskSummary();

  if (isLoading) {
    return (
      <Center p={8}>
        <Spinner role="status" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center p={8}>
        <Text color="red.500">Error loading risk summary</Text>
      </Center>
    );
  }

  const summary = data?.data || { critical: 0, high: 0, medium: 0, low: 0 };

  return (
    <Box p={6} bg="white">
      <Text 
        fontSize="lg" 
        fontWeight="semibold" 
        color="gray.500"
        mb={6}
        data-testid="risk-title"
      >
        Contextual Risk
      </Text>

      <Box display="flex" gap={12} alignItems="center">
        {/* Risk Levels */}
        <VStack align="start" gap={3} data-testid="risk-levels">
          {riskLevels.map((risk) => (
            <HStack 
              key={risk.level} 
              gap={2}
              transition="all 0.2s ease"
              _hover={{ transform: 'translateX(2px)' }}
              data-testid={`risk-level-${risk.level.toLowerCase()}`}
            >
              <Circle 
                size="2" 
                bg={risk.color}
                transition="all 0.2s ease"
                _hover={{ transform: 'scale(1.2)' }}
              />
              <Text 
                fontSize="sm" 
                color="gray.600"
                transition="all 0.2s ease"
                _hover={{ color: 'gray.800' }}
              >
                <Text 
                  as="span" 
                  fontWeight="bold" 
                  mr={1}
                  transition="all 0.3s ease-in-out"
                  data-testid={`risk-count-${risk.level.toLowerCase()}`}
                >
                  {summary[risk.level.toLowerCase() as keyof RiskSummary]}
                </Text>
                {risk.level}
              </Text>
            </HStack>
          ))}
        </VStack>

        {/* Circular Indicator */}
        <Box 
          position="relative" 
          width="140px" 
          height="140px"
          data-testid="risk-indicator"
          _hover={{
            '& > div:first-of-type': {
              transform: 'scale(1.05)',
              boxShadow: 'lg'
            }
          }}
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            borderRadius="full"
            border="8px solid"
            borderColor="brand.danger"
            transition="all 0.3s ease-in-out"
          />
          {/* Rotating background circle */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            borderRadius="full"
            border="2px solid"
            borderColor="gray.100"
            transition="all 0.3s ease-in-out"
            style={{ animation: `${rotateAnimation} 10s linear infinite` }}
          />
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize="6xl"
            fontWeight="semibold"
            color="gray.800"
            transition="all 0.3s ease-in-out"
            data-testid="critical-count"
            style={summary.critical > 0 ? { animation: `${pulseAnimation} 2s ease-in-out infinite` } : undefined}
          >
            {summary.critical}
          </Text>
        </Box>
      </Box>
    </Box>
  );
} 