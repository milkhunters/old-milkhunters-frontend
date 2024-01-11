import { useRoutes } from 'react-router-dom';
import { commonRoutes } from './common';

export const AppRoutes = () => {
  const router = useRoutes([...commonRoutes]);

  return <>{router}</>;
};
