import { MainLayout } from '@/components/Layouts/MainLayout';
import { SandboxRoutes } from '@/modules/sandbox';

export const protectedRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/sandbox/*', element: <SandboxRoutes /> }],
  },
];
