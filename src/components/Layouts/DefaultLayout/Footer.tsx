import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import { Github } from 'lucide-react';
import { Gitlab } from 'lucide-react';
import { Youtube } from 'lucide-react';

import { SendHorizontal } from 'lucide-react';

import { Container } from '../Container';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const GITHUB_URL = 'https://github.com/milkhunters';

export const Footer = () => {
  return (
    <Container>
      <Sheet
        invertedColors
        sx={{
          flexGrow: 1,
          py: 2,
          borderRadius: { xs: 0, sm: 'sm' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton variant="plain">
            <Link to={GITHUB_URL}>
              <Github color="black" />
            </Link>
          </IconButton>
          <IconButton variant="plain">
            <Link to="">
              <Gitlab color="black" />
            </Link>
          </IconButton>
          <IconButton variant="plain">
            <Link to="">
              <Youtube color="black" />
            </Link>
          </IconButton>

          <Input
            variant="outlined"
            placeholder="Отсались вопросы?"
            type="email"
            endDecorator={
              <IconButton variant="soft" aria-label="subscribe">
                <SendHorizontal />
              </IconButton>
            }
            sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
          />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'flex-start' },
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Card
            variant="plain"
            size="sm"
            sx={{
              flexDirection: { xs: 'row', md: 'column' },
              minWidth: { xs: '100%', md: 'auto' },
              gap: 1,
            }}
          >
            <CardContent>
              <Logo />
              <Typography>Делаем мир лучше...</Typography>
            </CardContent>
          </Card>
        </Box>
      </Sheet>
    </Container>
  );
};
