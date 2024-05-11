import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import { Card, CardContent, Stack } from '@mui/joy';

import { MoveRight } from 'lucide-react';

import { Container } from '@/components/Layouts/Container';

import team2 from '@/assets/team2.png';

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
        py: 3,
        gap: 4,
        [theme.breakpoints.up(900)]: {
          flexDirection: 'row',
          py: 5,
          gap: 6,
        },
        [theme.breakpoints.up(1200)]: {
          py: 8,
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
          borderRadius: 'lg',
          flexBasis: '50%',
        })}
      >
        <img src={team2} alt="Welcome Img" />
      </AspectRatio>
    </Box>
  );
};

export const Welcome = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Создание современных и отзывчивых веб-приложений, обеспечение высокой производительности и удобства использования. Опыт разработки интерфейсов для различных устройств.',
      color: '#d7f4ea',
    },
    {
      id: 2,
      title: 'Databases and Backend',
      skills: ['SQL', 'MongoDB', 'Python'],
      description:
        'Проектирование и оптимизация баз данных, создание надежных бэкенд-систем для обеспечения стабильности и безопасности ваших приложений.',
      color: '#fff1c1',
    },
    {
      id: 3,
      title: 'Mobile Development',
      skills: ['Swift', 'Kotlin', 'React Native'],
      description:
        'Разработка интуитивных мобильных приложений для iOS и Android с обеспечением высокой производительности и современного дизайна.',
      color: '#e9feec',
    },
    {
      id: 4,
      title: 'Artificial Intelligence and Machine Learning',
      skills: ['Python', 'TensorFlow', 'PyTorch'],
      description:
        'Применение технологий искусственного интеллекта для создания интеллектуальных решений, обучение моделей машинного обучения для оптимизации бизнес-процессов.',
      color: '#e9feec',
    },
    {
      id: 5,
      title: 'Testing and QA',
      skills: ['Selenium', 'JUnit', 'Postman'],
      description:
        'Гарантия качества вашего продукта через тщательное тестирование, создание эффективных стратегий тестирования и автоматизация процессов.',
      color: '#d7f4ea',
    },
    {
      id: 6,
      title: 'DevOps and Version Control',
      skills: ['Docker', 'Kubernetes', 'Git'],
      description:
        'Обеспечение надежного развертывания и масштабирования приложений, автоматизация процессов CI/CD и обеспечение эффективного контроля версий кода.',
      color: 'success',
    },
  ];

  return (
    <Box>
      <Container>
        <TwoSidedLayout>
          <Typography
            textColor="text.secondary"
            level="h1"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          >
            Мы - команда энтузиастов, объединенных общей страстью к созданию и воплощению IT-решений
          </Typography>
          <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
            Войдите в свой аккаунт, чтобы продолжить работу с milkhunters
          </Typography>
          <Button
            onClick={() => navigate('/')}
            size="lg"
            endDecorator={<MoveRight />}
            sx={{ borderRadius: 'lg' }}
          >
            Войти в аккаунт
          </Button>

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
      </Container>

      <Box
        sx={(theme) => ({
          background: `linear-gradient(180deg,#ffffff 0%,#dcacff 18.008868243243246%,${theme.vars.palette.primary[300]} 54.177224099099085%,${theme.vars.palette.primary[500]} 68.34318693693693%, #ffffff 100%);`,
        })}
      >
        <Container>
          <Stack
            direction={{ sm: 'column', md: 'row', lg: 'row' }}
            justifyContent="center"
            alignItems="center"
            spacing={3}
            flexWrap="wrap"
            useFlexGap
            sx={{ py: 3 }}
          >
            {cards.map((card) => {
              return (
                <Card
                  key={card.id}
                  sx={{
                    width: { sm: '100%', md: '31.5%', lg: '32%' },
                    height: { sm: 'auto', md: '20em' },
                    my: '0.7em',
                    border: '1px solid #e1e1e8',
                    borderRadius: 'lg',
                    background: '#f9f9fd',
                  }}
                  variant="soft"
                >
                  <CardContent sx={{ p: 1 }}>
                    <Typography
                      sx={{ fontSize: { sm: 'sm', md: 'lg', lg: 'xl' } }}
                      textColor="text.secondary"
                      level="h3"
                      fontWeight="700"
                    >
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
