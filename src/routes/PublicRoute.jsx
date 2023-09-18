import { useAuth } from '../hooks/auth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ component: Component, redirectto = '/params' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectto} /> : <Component />;
};

export default PublicRoute;
