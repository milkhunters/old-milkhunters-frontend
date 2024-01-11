import { AuthLayout } from '@/components/Layouts/AuthLayout/AuthLayout';
import { ConfirmEmailForm } from '../components/ConfirmEmail';

export const ConfirmEmail = () => {
  return (
    <AuthLayout>
      <ConfirmEmailForm />
    </AuthLayout>
  );
};
