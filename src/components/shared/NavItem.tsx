'use client';

import { Box, Icon, Text, HStack as ChakraHStack } from '@chakra-ui/react';
import type { NavItemProps } from '@/types/sidebar';

export const NavItem = ({ icon, label, isActive, isCollapsed }: NavItemProps) => (
  <Box position="relative" w="full" borderRadius="md">
    <ChakraHStack
      w="full"
      px={isCollapsed ? 1 : 4}
      py={isCollapsed ? 1 : 3}
      cursor="pointer"
      bg={isActive ? '#E9FAF0' : 'transparent'}
      color={isActive ? 'black' : '#A3A9B6'}
      gap={4}
      my={1}
      _hover={{ bg: '#E9FAF0', color: isActive ? 'brand.primary' : 'gray.800' }}
      transition="all 0.2s"
      borderRadius="md"
    >
      <Icon as={icon} boxSize={5} />
      {!isCollapsed && (
        <Text fontSize="sm" fontWeight={isActive ? "semibold" : "medium"}>{label}</Text>
      )}
    </ChakraHStack>
  </Box>
); 