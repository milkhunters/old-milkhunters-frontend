import { AuthLayout } from '@/components/Layouts/AuthLayout';
import { ConfirmEmailForm } from '../components/ConfirmEmail';

export const ConfirmEmail = () => {
  return (
    <AuthLayout>
      <ConfirmEmailForm />
    </AuthLayout>
  );
};
