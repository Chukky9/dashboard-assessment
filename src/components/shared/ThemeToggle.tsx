'use client';

import { Box, Icon, HStack, Text } from '@chakra-ui/react';
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from 'react-icons/fi';
import { useEffect } from 'react';

interface ThemeToggleProps {
  isCollapsed?: boolean;
}

export default function ThemeToggle({ isCollapsed = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('chakra-ui-color-mode');
    if (!savedTheme) {
      // Default to light mode if no preference is saved
      localStorage.setItem('chakra-ui-color-mode', 'light');
    }
  }, []);

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('chakra-ui-color-mode', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Box
      as="button"
      onClick={handleToggle}
      px={isCollapsed ? 1 : 4}
      py={isCollapsed ? 1 : 3}
      w="full"
      transition="all 0.2s ease"
      _hover={{ bg: 'E9FAF0', _dark: { bg: 'whiteAlpha.200' } }}
      borderRadius="md"
      role="group"
    >
      <HStack gap={3}>
        <Icon
          as={theme === 'light' ? FiMoon : FiSun}
          boxSize={5}
          color="gray.500"
          _groupHover={{ color: 'gray.700', _dark: { color: 'white' } }}
          transition="all 0.2s ease"
        />
        {!isCollapsed && (
          <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.300' }}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Text>
        )}
      </HStack>
    </Box>
  );
} 