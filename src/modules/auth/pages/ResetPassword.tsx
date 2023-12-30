import { useNavigate } from 'react-router-dom';

import { AuthLayout } from '@/components/Layouts/AuthLayout';
import { ResetPasswordForm } from '../components/ResetPasswordForm';

export const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <ResetPasswordForm onSuccess={() => navigate('/auth/reset')} />
    </AuthLayout>
  );
};
