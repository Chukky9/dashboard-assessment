'use client';

import { Box } from '@chakra-ui/react';

export const ConnectionLine = () => (
  <Box 
    flex={1} 
    h="2px" 
    bg="gray.200" 
    mx={{ base: 2, md: 4 }} 
    minW={{ base: "20px", md: "40px" }}
    transition="all 0.3s ease"
    _groupHover={{
      bg: 'gray.300',
      height: '3px'
    }}
  />
); 