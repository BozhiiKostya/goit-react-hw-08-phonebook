import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const authenticated = useSelector(state => state.auth.authenticated);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const shouldRedirect = !authenticated && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
