import { useModal } from '@/hooks/useModal';

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Button,
  IconButton,
  Drawer,
  ModalClose,
  Divider,
  useColorScheme,
} from '@mui/joy';

import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Menu } from 'lucide-react';

import { useLocation, NavLink } from 'react-router-dom';

const ColorShemeToggle = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      id="toggle-mode"
      size="md"
      color="primary"
      onClick={() => {
        if (mode === 'light') setMode('dark');
        else setMode('light');
      }}
      sx={{
        borderRadius: '50%',
        height: 'auto',
      }}
    >
      {mode === 'light' ? <Sun /> : <Moon />}
    </IconButton>
  );
};

export const Header = () => {
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
          <Button variant="outlined" sx={{ borderRadius: 'lg' }}>
            Войти
          </Button>
          <Button sx={{ borderRadius: 'lg' }}>Зарегистрироваться</Button>
        </Stack>
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}>
        <ColorShemeToggle />
        <IconButton sx={{ ml: '1em' }} color="primary" onClick={drawerOpen}>
          <Menu />
        </IconButton>
        <Drawer size="sm" open={isDrawer} onClose={drawerClose} anchor="left">
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
                <Box key={item.to}>
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
                </Box>
              );
            })}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};
