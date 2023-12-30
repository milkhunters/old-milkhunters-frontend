import { useNavigate } from 'react-router-dom';

import { AuthLayout } from '@/components/Layouts/AuthLayout';
import { ConfirmEmailForm } from '../components/ConfirmEmail';

export const ConfirmEmail = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <ConfirmEmailForm onSuccess={() => navigate('/auth/login')} />
    </AuthLayout>
  );
};
