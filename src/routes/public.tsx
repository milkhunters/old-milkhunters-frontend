import { AuthRoutes } from '@/modules/auth';

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
