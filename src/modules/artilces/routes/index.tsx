import { Routes, Route } from 'react-router-dom';
import { Articles } from '../pages/Articles';
import { Article } from '../pages/Article';

export const ArticleRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/:id" element={<Article />} />
    </Routes>
  );
};
