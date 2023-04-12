import { Navigate, useLocation } from 'react-router-dom';

const CheckToken = ({ children }: CheckTokenProps) => {
  const accessToken = localStorage.getItem('access_token');
  const isSignPath = useLocation().pathname.includes('sign');
  const isTodoPath = useLocation().pathname.includes('todo');

  if (isSignPath && accessToken) {
    return <Navigate to="/todo" />;
  } else if (isTodoPath && !accessToken) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default CheckToken;
