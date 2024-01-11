import { Container } from '@/components/Layouts/Container';

import { Typography } from '@mui/joy';
import Box from '@mui/joy/Box/Box';

import notfound from '@/assets/404.svg';
import notfound_mobile from '@/assets/404_mobile.svg';

export const NotFound = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
          <img src={notfound} alt="404" />
        </Box>

        <Box sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}>
          <img src={notfound_mobile} alt="404" />
        </Box>

        <Typography
          textColor="#3f3d56"
          sx={{ py: 3 }}
          level="h1"
          fontSize={{ xs: '27px', md: '50px', lg: '60px' }}
        >
          Страница не найдена
        </Typography>
      </Box>
    </Container>
  );
};
