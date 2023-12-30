import { BrowserRouter } from 'react-router-dom';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
