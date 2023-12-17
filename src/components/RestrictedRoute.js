import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const authenticated = useSelector(state => state.auth.authenticated);

  return authenticated ? <Navigate to={redirectTo} /> : Component;
};
