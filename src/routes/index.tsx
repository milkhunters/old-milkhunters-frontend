import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { commonRoutes } from './common';

export const AppRoutes = () => {
  const auth = false;

  const routes = auth ? protectedRoutes : publicRoutes;

  const router = useRoutes([...routes, ...commonRoutes]);

  return <>{router}</>;
};
