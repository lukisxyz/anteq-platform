import { createRouter, createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/theme-provider';
import { routeTree } from '@/app/router.gen';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  ),
});

export const router = createRouter({ routeTree, rootRoute });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
