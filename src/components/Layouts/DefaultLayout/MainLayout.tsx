import { Box, Divider } from '@mui/joy';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const MainLayout = () => {
  return (
    <Box
      sx={{
        height: 'auto',
        width: '100vw',
      }}
    >
      <Header />
      <Divider />
      <Outlet />
      <Divider />
      <Footer />
    </Box>
  );
};
