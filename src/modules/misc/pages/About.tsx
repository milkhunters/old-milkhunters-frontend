import { Container } from '@/components/Layouts/Container';
import {
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from '@mui/joy';
import Box from '@mui/joy/Box/Box';

import about from '@/assets/about.png';

export const About = () => {
  const events = [
    {
      name: 'Sber STUDENT',
      city: 'Удаленноe участие',
      site: '',
      logo: 'https://sberstudent.sberclass.ru/assets/Background-1440.1c2aacec65.webp',
      years: '2023',
      isWin: false,
    },
    {
      name: 'RinhHack',
      city: 'Ростов-на-Дону',
      site: '',
      logo: 'https://hackathon.rsue.ru/static/images/rsue-logo.svg',
      years: '2023',
      isWin: true,
    },
    {
      name: 'XIII Форум программных разработчиков «Хакатон Осень 2023»',
      city: 'Ростов-на-Дону',
      site: '',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fSRY4Ywu4p3sds-ttuRkavc0i7GrcdwtzA&usqp=CAU',
      years: '2023',
      isWin: true,
    },
    {
      name: 'XII Форум программных разработчиков «Хакатон Весна 2023»',
      city: 'Ростов-на-Дону',
      site: '',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fSRY4Ywu4p3sds-ttuRkavc0i7GrcdwtzA&usqp=CAU',
      years: '2023',
      isWin: false,
    },
    {
      name: 'XI Форум программных разработчиков «Хакатон Осень 2022»',
      city: 'Ростов-на-Дону',
      site: '',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fSRY4Ywu4p3sds-ttuRkavc0i7GrcdwtzA&usqp=CAU',
      years: '2022',
      isWin: false,
    },
    {
      name: 'X Форум программных разработчиков «Хакатон Весна 2022»',
      city: 'Ростов-на-Дону',
      site: '',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fSRY4Ywu4p3sds-ttuRkavc0i7GrcdwtzA&usqp=CAU',
      years: '2022',
      isWin: false,
    },
    {
      name: 'IX Форум программных разработчиков «Хакатон Осень 2021»',
      city: 'Ростов-на-Дону',
      site: '',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fSRY4Ywu4p3sds-ttuRkavc0i7GrcdwtzA&usqp=CAU',
      years: '2021',
      isWin: false,
    },
  ];

  return (
    <Container>
      <Box sx={{ width: '90%', mx: 'auto' }}>
        <Typography
          textColor="text.secondary"
          level="title-md"
          fontWeight="700"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 4rem)"
          sx={{ my: 2, letterSpacing: '-0.04em' }}
        >
          Добро пожаловать в команду{' '}
          <Typography
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 4rem)"
            sx={{
              dislplay: 'flex',
              color: 'text.secondary',
              fontWeight: '600',
              fontFamily: 'Poppins',
              letterSpacing: '-0.01em',
            }}
          >
            milk
            <Typography sx={{ color: 'text.primary' }}>hunters</Typography>
          </Typography>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
            <img src={about} alt="about" />
          </Box>
        </Box>
        <Typography
          textColor="text.tertiary"
          level="body-sm"
          fontWeight="xl"
          fontSize="clamp(1.3rem, 0.3636rem + 0.1818vw, 1rem)"
          sx={{ mt: 2 }}
        >
          Мы — творческая IT-команда, собравшаяся вместе для реализации самых амбициозных
          проектов.Наша команда сформировалась в 2021 году в рамках Донского Технического
          Государственного Университета (ДГТУ). Мы готовы взяться за самые сложные проекты и достичь
          великих высот в своей области!
        </Typography>

        <Chip variant="outlined" size="lg" sx={{ my: 2 }}>
          <Typography fontWeight="lg">События</Typography>
        </Chip>

        <List sx={{ '--ListItemDecorator-size': '50px', gap: 4 }}>
          {events.map((event, eventIndex) => (
            <ListItem key={eventIndex} sx={{ alignItems: 'flex-start' }}>
              <ListItemDecorator>
                <Avatar src={event.logo} sx={{ '--Avatar-size': '30px' }} />
              </ListItemDecorator>
              <ListItemContent>
                <Typography sx={{ display: 'flex', alignItems: 'center' }} level="title-lg">
                  {event.name}
                  {event.isWin && (
                    <Chip color="success" sx={{ ml: 1 }}>
                      Победа
                    </Chip>
                  )}
                </Typography>
                <Typography level="body-sm">{event.city}</Typography>
              </ListItemContent>
              <Typography level="body-xs">{event.years}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};
