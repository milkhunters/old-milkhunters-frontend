import Box from '@mui/joy/Box/Box';

interface ContainerProps {
  children: React.ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  return (
    <Box
      sx={{
        width: { xs: '95%', md: '95%', lg: '1200px' },
        height: '100%',
        margin: '0 auto',
      }}
    >
      {children}
    </Box>
  );
};
