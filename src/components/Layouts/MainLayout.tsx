import { Welcome } from '@/modules/misc';
import { Outlet, useLocation } from 'react-router-dom';

export const MainLayout = () => {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return (
      <>
        MainLayout - <Welcome />
      </>
    );
  }

  return (
    <>
      MainLayout - <Outlet></Outlet>
    </>
  );
};
