import { AuthLayout } from '@/components/Layouts/AuthLayout/AuthLayout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
