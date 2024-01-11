import { CssBaseline, CssVarsProvider, GlobalStyles } from '@mui/joy';
import { BrowserRouter } from 'react-router-dom';
import theme from '@/styles/theme';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <CssVarsProvider disableTransitionOnChange theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{}} />
      <BrowserRouter>{children}</BrowserRouter>
    </CssVarsProvider>
  );
};
