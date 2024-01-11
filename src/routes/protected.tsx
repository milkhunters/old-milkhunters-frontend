import { MainLayout } from '@/components/Layouts/DefaultLayout/MainLayout';
import { SandboxRoutes } from '@/modules/sandbox';

export const protectedRoutes = [
  {
    path: 'sandbox/',
    element: <MainLayout />,
    children: [{ path: '*', element: <SandboxRoutes /> }],
  },
];
