import { AuthLayout } from '@/components/Layouts/AuthLayout';
import { ResetPasswordForm } from '../components/ResetPasswordForm';

export const ResetPassword = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};
