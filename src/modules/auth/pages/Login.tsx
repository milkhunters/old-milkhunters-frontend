import { useNavigate } from 'react-router-dom';

import { AuthLayout } from '@/components/Layouts/AuthLayout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <LoginForm onSuccess={() => navigate('/articles')} />
    </AuthLayout>
  );
};
