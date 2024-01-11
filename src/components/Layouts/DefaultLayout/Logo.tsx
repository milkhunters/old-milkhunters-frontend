import { Typography } from '@mui/joy';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink style={{ textDecoration: 'none' }} to="/">
      <Typography
        sx={{
          dislplay: 'flex',
          fontSize: { xs: 'xl', md: '25px', lg: '27px' },
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
  );
};
