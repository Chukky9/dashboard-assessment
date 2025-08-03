'use client';

import { Box } from '@chakra-ui/react';

export const BranchLine = () => (
  <Box 
    position="relative" 
    width={{ base: "60px", md: "100px" }} 
    height={{ base: "40px", md: "60px" }}
  >
    <Box 
      position="absolute"
      left={0}
      top="50%"
      width="100%"
      height="2px"
      bg="gray.200"
      transition="all 0.3s ease"
      _groupHover={{
        bg: 'gray.300',
        height: '3px'
      }}
    />
    <Box
      position="absolute"
      left="50%"
      top={0}
      width="2px"
      height="100%"
      bg="gray.200"
      transition="all 0.3s ease"
      _groupHover={{
        bg: 'gray.300',
        width: '3px'
      }}
    />
  </Box>
); 