import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ModalClose,
  Stack,
  Typography,
} from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import Menu from '@mui/icons-material/Menu';

import { useModal } from '@/hooks/useModal';

const ColorShemeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <IconButton
      id="toggle-mode"
      size="md"
      variant="soft"
      color="primary"
      onClick={() => {
        if (mode === 'light') setMode('dark');
        else setMode('light');
      }}
      sx={{
        borderRadius: '50%',
        boxShadow: 'lg',
        height: 'auto',
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
};

const Header = () => {
  const menuItems = [
    { name: 'Продукты', to: '/products', select: [{ name: 'ShortLink', to: 'short' }] },
    { name: 'Блог', to: '/articles' },
    { name: 'Команда', to: '/team' },
    { name: 'О нас', to: '/about' },
  ];

  const location = useLocation();

  const { isOpen: isDrawer, open: drawerOpen, close: drawerClose } = useModal();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: { xs: '95%', md: '95%', lg: '1200px' },
        height: 'auto',
        margin: '0.7em auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <NavLink style={{ textDecoration: 'none' }} to="/">
          <Typography
            sx={{
              dislplay: 'flex',
              fontSize: { xs: '23px', md: '25px', lg: '27px' },
              color: 'text.secondary',
              fontWeight: '600',
              fontFamily: 'Poppins',
              letterSpacing: '-0.01em',
            }}
          >
            milk
            <Typography sx={{ color: 'text.primary' }}>hunters</Typography>
          </Typography>
        </NavLink>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
        <List role="menubar" orientation="horizontal">
          {menuItems.map((item) => {
            const isSelected = location.pathname === item.to;
            return (
              <ListItem key={item.to}>
                <NavLink style={{ textDecoration: 'none' }} to={item.to}>
                  <ListItemButton
                    variant={isSelected ? 'soft' : 'plain'}
                    sx={{ borderRadius: '12px' }}
                  >
                    <Typography fontSize="15px" fontWeight="500">
                      {item.name}
                    </Typography>
                  </ListItemButton>
                </NavLink>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <ColorShemeToggle />
          <Button variant="outlined" sx={{ borderRadius: '12px' }}>
            Войти
          </Button>
          <Button sx={{ borderRadius: '12px' }}>Зарегистрироваться</Button>
        </Stack>
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}>
        <ColorShemeToggle />
        <IconButton sx={{ ml: '1em' }} variant="outlined" color="neutral" onClick={drawerOpen}>
          <Menu />
        </IconButton>
        <Drawer size="sm" open={isDrawer} onClose={drawerClose} anchor="top">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.7,
              ml: 'auto',
              mt: 1,
              mr: 2,
            }}
          >
            <ModalClose id="close-icon" sx={{ position: 'initial' }} />
          </Box>

          <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xl',
            }}
          >
            {menuItems.map((item) => {
              return (
                <>
                  <Divider />
                  <ListItem key={item.to}>
                    <NavLink style={{ textDecoration: 'none' }} to={item.to}>
                      <ListItemButton sx={{ borderRadius: '12px' }}>
                        <Typography fontSize="15px" fontWeight="600" sx={{ color: 'black' }}>
                          {item.name}
                        </Typography>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box
      sx={{
        width: { xs: '95%', md: '95%', lg: '1200px' },
        height: 'auto',
        margin: '0 auto',
      }}
    >
      Footer
    </Box>
  );
};

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
      <Box
        sx={{
          width: { xs: '95%', md: '95%', lg: '1200px' },
          height: '100%',
          margin: '0 auto',
        }}
      >
        <Outlet></Outlet>
      </Box>
      <Divider />
      <Footer />
    </Box>
  );
};
