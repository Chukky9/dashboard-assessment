'use client';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import type { RootLayoutProps } from '@/types/layout';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex h="100vh" overflow="hidden">
      <Sidebar />
      <Box 
        flex={1} 
        p={2} 
        bg="gray.50" 
        overflowY="auto"
        transition="margin-left 0.2s ease"
      >
        {children}
      </Box>
    </Flex>
  );
} 