import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: { value: '#02983E' }, // Green color from the design
          secondary: { value: '#6366F1' }, // Purple/indigo from the notification
          danger: { value: '#E5372B' }, // Red from critical status
          warning: { value: '#FF9500' }, // Yellow/orange from the design
        },
        status: {
          critical: { value: '#E5372B' },
          high: { value: '#F59E0B' },
          medium: { value: '#FF9500' },
          low: { value: '#02983E' },
        },
        gray: {
          50: { value: '#F9FAFB' },
          100: { value: '#F3F4F6' },
          200: { value: '#E5E7EB' },
          300: { value: '#D1D5DB' },
          400: { value: '#9CA3AF' },
          500: { value: '#6B7280' },
          600: { value: '#4B5563' },
          700: { value: '#374151' },
          800: { value: '#1F2937' },
          900: { value: '#111827' },
        },
      },
      fonts: {
        body: { value: 'Inter, sans-serif' },
        heading: { value: 'Inter, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        'sidebar.bg': { value: '{colors.white}' },
        'sidebar.border': { value: '{colors.gray.200}' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config); 