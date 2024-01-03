import { AuthLayout } from '@/components/Layouts/AuthLayout';
import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};
