import { useParams } from 'react-router-dom';

export const Article = () => {
  const { id } = useParams();
  return <>Article with id = {id}</>;
};
