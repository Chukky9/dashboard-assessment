'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, type ReactNode } from 'react';
import { system } from '@/theme';
// import { ThemeProvider } from 'next-themes'
import { makeServer } from '@/mocks/server';

// Initialize MirageJS in both development and production for demo purposes
if (typeof window !== 'undefined') {
  makeServer();
}

export function Providers({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            refetchOnWindowFocus: false,
        },
        },
    }));

    return (
        // <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ChakraProvider value={system}>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </ChakraProvider>
        // </ThemeProvider>
    );
}