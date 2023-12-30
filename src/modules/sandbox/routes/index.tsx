import { Route, Routes } from 'react-router-dom';
import { CreateArticle } from '../pages/CreateArticle';

export const SandboxRoutes = () => {
  return (
    <Routes>
      <Route path="create" element={<CreateArticle />} />
    </Routes>
  );
};
