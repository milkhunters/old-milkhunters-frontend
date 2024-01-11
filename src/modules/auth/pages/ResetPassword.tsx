import { AuthLayout } from '@/components/Layouts/AuthLayout/AuthLayout';
import { ResetPasswordForm } from '../components/ResetPasswordForm';

export const ResetPassword = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};
