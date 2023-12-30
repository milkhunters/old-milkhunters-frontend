import { Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { ConfirmEmail } from '../pages/ConfirmEmail';
import { ResetPassword } from '../pages/ResetPassword';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="confirm" element={<ConfirmEmail />} />
      <Route path="reset" element={<ResetPassword />} />
    </Routes>
  );
};
