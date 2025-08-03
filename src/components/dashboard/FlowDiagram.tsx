/**
 * FlowDiagram Component
 * 
 * A visual representation of system architecture and data flow, featuring:
 * - Email gateway node with notification count
 * - Multiple server nodes with status indicators
 * - Interactive connection lines between nodes
 * - Responsive layout with horizontal scroll on mobile
 * - Animated hover effects and transitions
 * 
 * The diagram uses a combination of Node, ConnectionLine, and BranchLine
 * components to create a cohesive visualization of the system's architecture.
 * 
 * @component
 * @example
 * ```tsx
 * <FlowDiagram />
 * ```
 * 
 * The component fetches flow data using TanStack Query and includes
 * loading and error states for better user experience. It automatically
 * adjusts its layout based on screen size.
 */

'use client';

import { Box, Text, HStack, Circle, Icon, Spinner, Center } from '@chakra-ui/react';
import { useFlowNodes } from '@/hooks/useFlowNodes';
import { Fragment } from 'react';
import { MaskIcon, ServerIcon, ShieldIcon, UserGroupIcon } from '@/app/icons';
import { Node, ConnectionLine, BranchLine } from '@/components/shared/flow';

export default function FlowDiagram() {
  const { data, isLoading, isError } = useFlowNodes();

  if (isLoading) {
    return (
      <Center p={8}>
        <Spinner data-testid="loading-spinner" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center p={8}>
        <Text color="red.500">Error loading flow data</Text>
      </Center>
    );
  }

  const nodes = data?.data || [];
  const emailNode = nodes.find(node => node.type === 'email');
  const serverNodes = nodes.filter(node => node.type === 'server');

  return (
    <Box>
      <Box 
        display="flex" 
        alignItems="center" 
        mb={8}
        overflowX={{ base: "auto", lg: "visible" }}
        pb={{ base: 4, lg: 0 }}
        css={{
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'var(--chakra-colors-gray-100)',
            borderRadius: '9999px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--chakra-colors-gray-300)',
            borderRadius: '9999px',
          },
        }}
      >
        <Box 
          display="flex" 
          alignItems="center"
          minW={{ base: "fit-content", lg: "full" }}
          h="100%"
          px={{ base: 2, lg: 0 }}
          role="group"
        >
          <Node 
            icon={MaskIcon}
            label={emailNode?.name || ''}
            bgColor="red.50"
            badgeIcon={UserGroupIcon}
            badge={{ count: emailNode?.notificationCount || 0, color: '#7A44FF' }}
          />
          <ConnectionLine />
          {serverNodes.slice(0, 2).map((node, index) => (
            <Fragment key={node.id}>
              <Node 
                key={node.id}
                icon={ServerIcon}
                label={node.name}
                bgColor="#D7EAFF"
                isServer
              />
              {index < 1 && <ConnectionLine />}
            </Fragment>
          ))}
          <BranchLine />
          <Box>
            {serverNodes.slice(2).map((node, index) => (
              <Box key={node.id} mb={index === 0 ? { base: 6, md: 8 } : 0}>
                <Node 
                  icon={ServerIcon}
                  label={node.name}
                  subLabel={node.ipAddress}
                  bgColor="#D7EAFF"
                  badgeIcon={ShieldIcon}
                  isServer
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box 
        pt={6} 
        borderTop="1px" 
        borderColor="gray.200" 
        borderStyle="solid"
      >
        <HStack 
          gap={{ base: 2, md: 4 }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <HStack 
            transition="all 0.2s ease"
            _hover={{ transform: 'translateY(-1px)' }}
          >
            <Circle 
              size={{ base: "6", md: "7" }} 
              bg="brand.danger"
              transition="all 0.2s ease"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Icon 
                as={ShieldIcon} 
                color="white" 
                boxSize={{ base: 4, md: 5 }}
                transition="transform 0.2s ease"
                _groupHover={{ transform: 'scale(1.1)' }}
              />
            </Circle>
            <Text 
              color="brand.danger" 
              fontWeight="bold"
              fontSize="sm"
              transition="all 0.2s ease"
            >
              Lorem
            </Text>
          </HStack>
          <HStack 
            transition="all 0.2s ease"
            _hover={{ transform: 'translateY(-1px)' }}
          >
            <Circle 
              size={{ base: "6", md: "7" }} 
              bg="brand.warning"
              transition="all 0.2s ease"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Icon 
                as={ShieldIcon} 
                color="white" 
                boxSize={{ base: 4, md: 5 }}
                transition="transform 0.2s ease"
                _groupHover={{ transform: 'scale(1.1)' }}
              />
            </Circle>
            <Text 
              color="brand.warning" 
              fontWeight="bold"
              fontSize="sm"
              transition="all 0.2s ease"
            >
              Lorem
            </Text>
          </HStack>
          <HStack 
            transition="all 0.2s ease"
            _hover={{ transform: 'translateY(-1px)' }}
          >
            <Circle 
              size={{ base: "6", md: "7" }} 
              bg="brand.primary"
              transition="all 0.2s ease"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Icon 
                as={ShieldIcon} 
                color="white" 
                boxSize={{ base: 4, md: 5 }}
                transition="transform 0.2s ease"
                _groupHover={{ transform: 'scale(1.1)' }}
              />
            </Circle>
            <Text 
              color="brand.primary" 
              fontWeight="bold"
              fontSize="sm"
              transition="all 0.2s ease"
            >
              Lorem
            </Text>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
} 