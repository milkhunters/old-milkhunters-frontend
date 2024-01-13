import { useModal } from '@/hooks/useModal';

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Drawer,
  ModalClose,
  Divider,
  useColorScheme,
  ListItemContent,
  ListItemDecorator,
} from '@mui/joy';

import { Building2, LayoutGrid, Newspaper, Sun, UsersRound } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Menu } from 'lucide-react';

import { useLocation, NavLink } from 'react-router-dom';
import { Logo } from './Logo';

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
    {
      name: 'Продукты',
      to: '/products',
      icon: <LayoutGrid />,
      select: [{ name: 'ShortLink', to: 'short' }],
    },
    { name: 'Блог', to: '/articles', icon: <Newspaper /> },
    { name: 'Команда', to: '/team', icon: <UsersRound /> },
    { name: 'О нас', to: '/about', icon: <Building2 /> },
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
        <Logo />
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

      <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
        <ColorShemeToggle />
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}>
        <ColorShemeToggle />
        <IconButton sx={{ ml: '1em' }} color="primary" onClick={drawerOpen}>
          <Menu />
        </IconButton>
        <Drawer size="sm" open={isDrawer} onClose={drawerClose} anchor="top">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mx: 2,
              my: 1,
            }}
          >
            <Box onClick={drawerClose}>
              <Logo />
            </Box>

            <ModalClose variant="outlined" id="close-icon" sx={{ position: 'initial' }} />
          </Box>

          <Divider />

          <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xs',
            }}
          >
            {menuItems.map((item) => {
              return (
                <Box key={item.to}>
                  <NavLink onClick={drawerClose} style={{ textDecoration: 'none' }} to={item.to}>
                    <ListItem key={item.to}>
                      <ListItemButton>
                        <ListItemDecorator sx={{ pt: 1 }}>{item.icon}</ListItemDecorator>
                        <ListItemContent
                          sx={{
                            pt: 1,
                            fontSize: 'lg',
                            fontWeight: 'md',
                          }}
                        >
                          {item.name}
                        </ListItemContent>
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                </Box>
              );
            })}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};
