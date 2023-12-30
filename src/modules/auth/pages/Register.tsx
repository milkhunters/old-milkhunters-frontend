import { useNavigate } from 'react-router-dom';

import { AuthLayout } from '@/components/Layouts/AuthLayout';
import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <RegisterForm onSuccess={() => navigate('/auth/confirm')} />
    </AuthLayout>
  );
};
