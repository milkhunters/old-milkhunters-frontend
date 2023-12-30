import { useNavigate } from 'react-router-dom';
import { CreateArticleForm } from '../components/CreateArticleForm';

export const CreateArticle = () => {
  const navigate = useNavigate();

  return <CreateArticleForm onSuccess={() => navigate(-1)} />;
};
