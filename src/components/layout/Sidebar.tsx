/**
 * Sidebar Component
 * 
 * The main navigation component of the application, featuring:
 * - Collapsible/expandable functionality
 * - Responsive design with auto-collapse on mobile
 * - Animated transitions
 * - Navigation items with icons and labels
 * - Bottom section for additional navigation items
 * 
 * The sidebar automatically collapses on smaller screens and
 * provides smooth animations for all interactions. It uses
 * a combination of Chakra UI components for consistent styling.
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage in layout
 * <Sidebar />
 * 
 * // Usage with RootLayout
 * <RootLayout>
 *   <Sidebar />
 *   <MainContent />
 * </RootLayout>
 * ```
 */

'use client';

import { Box, Stack, Icon, Text, HStack as ChakraHStack, Avatar, Circle } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  MenuOne, MenuTwo,
  MenuThree, MenuFour,
  MenuFive, MenuSix,
  MenuSeven, MenuEight,
  MenuNine, LogoutIcon
} from '@/app/icons';
import { useState, useEffect, useCallback } from 'react';
import { NavItem } from '@/components/shared/NavItem';
import ThemeToggle from '@/components/shared/ThemeToggle';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      const width = document.documentElement.clientWidth;
      if (width <= 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    }
  }, []);

  useEffect(() => {
    handleResize();

    let timeoutId: NodeJS.Timeout;

    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return (
    <Box position="relative">
      <Box
        as="aside"
        h="100vh"
        w={isCollapsed ? "72px" : "250px"}
        bg="white"
        borderRight="1px"
        borderColor="gray.200"
        py={6}
        px={4}
        transition="width 0.2s ease"
      >
        <Stack direction="column" h="full" gap={4}>
          {/* Main Navigation */}
          <Stack direction="column" w="full" gap={0.5}>
            <NavItem icon={MenuOne} label="Lorem" isActive isCollapsed={isCollapsed} />
            <NavItem icon={MenuTwo} label="Lorem" isCollapsed={isCollapsed} />
            <NavItem icon={MenuThree} label="Lorem" isCollapsed={isCollapsed} />
            <NavItem icon={MenuFour} label="Lorem" isCollapsed={isCollapsed} />
            <NavItem icon={MenuFive} label="Lorem" isCollapsed={isCollapsed} />
            <NavItem icon={MenuSix} label="Lorem" isCollapsed={isCollapsed} />
            <NavItem icon={MenuSeven} label="Lorem" isCollapsed={isCollapsed} />
          </Stack>

          {/* Spacer */}
          <Box flex={1} />

          {/* Bottom Items */}
          <Stack direction="column" w="full" gap={0.5}>
            <NavItem icon={MenuEight} label="Lorem" isCollapsed={isCollapsed} />
            <NavItem icon={MenuNine} label="Lorem" isCollapsed={isCollapsed} />
          </Stack>

          {/* Theme Toggle */}
          <Box pt={2} pb={4}>
            <ThemeToggle isCollapsed={isCollapsed} />
          </Box>

          {/* User Profile */}
          <Box 
            w="full" 
            px={4} 
            py={3}
            borderTop="1px"
            borderColor="gray.100"
          >
            <ChakraHStack gap={3} w="full">
              <Avatar.Root size="sm">
                <Avatar.Fallback name="User" />
              </Avatar.Root>
              {!isCollapsed && (
                <Box flex={1}>
                  <Text fontSize="sm" fontWeight="medium">Lorem Lorem</Text>
                  <Text fontSize="xs" color="gray.500">Lorem</Text>
                </Box>
              )}
              {!isCollapsed && (
                <Icon 
                  as={LogoutIcon} 
                  boxSize={5} 
                  color="gray.400" 
                  cursor="pointer"
                  _hover={{ color: 'gray.600' }}
                />
              )}
            </ChakraHStack>
          </Box>
        </Stack>
      </Box>

      {/* Toggle Button */}
      <Circle
        position="absolute"
        right="-12px"
        top="5%"
        transform="translateY(-50%)"
        bg="brand.primary"
        color="white"
        size="5"
        cursor="pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
        zIndex={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ bg: 'brand.primary' }}
      >
        <Icon as={isCollapsed ? FiChevronRight : FiChevronLeft} boxSize={4} />
      </Circle>
    </Box>
  );
} 