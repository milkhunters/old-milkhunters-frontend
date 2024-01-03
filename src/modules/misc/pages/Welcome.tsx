import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/joy/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import { useNavigate } from 'react-router-dom';

const TwoSidedLayout = ({
  children,
  reversed,
}: React.PropsWithChildren<{ reversed?: boolean }>) => {
  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        display: 'flex',
        flexDirection: reversed ? 'column-reverse' : 'column',
        alignItems: 'center',
        py: 10,
        gap: 4,
        [theme.breakpoints.up(900)]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up(1200)]: {
          gap: 12,
        },
      
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          maxWidth: '50ch',
          textAlign: 'center',
          flexShrink: 999,
          [theme.breakpoints.up(900)]: {
            minWidth: 420,
            alignItems: 'flex-start',
            textAlign: 'initial',
          },
        })}
      >
        {children}
      </Box>
      <AspectRatio
        ratio={600 / 520}
        variant="outlined"
        maxHeight={300}
        sx={(theme) => ({
          minWidth: 300,
          alignSelf: 'stretch',
          [theme.breakpoints.up(900)]: {
            alignSelf: 'initial',
            flexGrow: 1,
            '--AspectRatio-maxHeight': '520px',
            '--AspectRatio-minHeight': '400px',
          },
          borderRadius: 'sm',
          bgcolor: 'background.level2',
          flexBasis: '50%',
        })}
      >
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </AspectRatio>
    </Box>
  );
};

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <TwoSidedLayout>
      <Typography
        textColor="text.secondary"
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Управление задачами: эффективный инструмент для достижения целей
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Войдите в свой аккаунт, чтобы продолжить работу с milkhunters
      </Typography>
      <Button
        onClick={() => navigate('/auth/login')}
        size="lg"
        endDecorator={<ArrowForward fontSize="small" />}
      >
        Войти в аккаунт
      </Button>
      <Typography>
        Остались вопросы? <Link fontWeight="lg">Напишите нам</Link>
      </Typography>
      <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      ></Typography>
    </TwoSidedLayout>
  );
};
