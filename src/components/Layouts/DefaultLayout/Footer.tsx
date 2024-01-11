import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import { Github } from 'lucide-react';

import { SendHorizontal } from 'lucide-react';

import { Container } from '../Container';
import { Link, NavLink } from 'react-router-dom';

const GITHUB_URL = 'https://github.com/milkhunters';

export const Footer = () => {
  return (
    <Container>
      <Sheet
        invertedColors
        sx={{
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: 'sm' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton variant="plain">
            <Link to={GITHUB_URL}>
              <Github color="black" />
            </Link>
          </IconButton>

          <Input
            variant="soft"
            placeholder="Type in your email"
            type="email"
            name="email"
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
              <Typography>Делаем мир лучше...</Typography>
            </CardContent>
          </Card>
          <List
            size="sm"
            orientation="horizontal"
            wrap
            sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px' }}
          >
            <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
              <ListSubheader sx={{ fontWeight: 'xl' }}>Карта</ListSubheader>
              <List>
                <ListItem>
                  <ListItemButton>Продукты</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Блог</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>О нас</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Команда</ListItemButton>
                </ListItem>
              </List>
            </ListItem>
            <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
              <ListSubheader sx={{ fontWeight: 'xl' }}>Продукты</ListSubheader>
              <List sx={{ '--ListItemDecorator-size': '32px' }}>
                <ListItem>
                  <ListItemButton>Klay</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>MilkyLinks</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>MilkyStorage</ListItemButton>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
      </Sheet>
    </Container>
  );
};
