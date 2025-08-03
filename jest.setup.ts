import '@testing-library/jest-dom';

// Add structuredClone polyfill
global.structuredClone = function structuredClone(obj: any) {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === 'function') return obj;
  return JSON.parse(JSON.stringify(obj));
};

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

// Mock Chakra UI
jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react');
  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn().mockReturnValue([true]),
  };
}); 