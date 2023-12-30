import { MainLayout } from '@/components/Layouts/MainLayout';
import { SandboxRoutes } from '@/modules/sandbox';

export const protectedRoutes = [
  {
    path: 'sandbox/',
    element: <MainLayout />,
    children: [{ path: '*', element: <SandboxRoutes /> }],
  },
];
