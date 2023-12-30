import { MainLayout } from '@/components/Layouts/MainLayout';
import { ArticleRoutes } from '@/modules/artilces';
import { About, NotFound, Team, Welcome } from '@/modules/misc';

export const commonRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Welcome /> },
      { path: '/articles/*', element: <ArticleRoutes /> },
      { path: '/team', element: <Team /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
