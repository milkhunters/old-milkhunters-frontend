import { Box, Button, IconButton } from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

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
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
      sx={{
        position: 'fixed',
        zIndex: 999,
        top: '1rem',
        right: '1rem',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
    >
      {mode === 'light' ? <i className="fi fi-rr-moon"></i> : <i className="fi fi-rr-sun"></i>}
    </IconButton>
  );
};

export const MainLayout = () => {
  return (
    <Box>
      <ColorShemeToggle />
      MainLayout - <Outlet></Outlet>
    </Box>
  );
};
