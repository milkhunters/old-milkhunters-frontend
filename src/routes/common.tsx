import { MainLayout } from '@/components/Layouts/MainLayout';
import { ArticleRoutes } from '@/modules/artilces';
import { About, Team } from '@/modules/misc';
import { NotFound } from '@/modules/misc/pages/NotFound';

export const commonRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/articles/*', element: <ArticleRoutes /> },
      { path: '/team', element: <Team /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
