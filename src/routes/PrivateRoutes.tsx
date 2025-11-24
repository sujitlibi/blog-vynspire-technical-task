import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { type RootState } from '../redux/store/store';

interface PrivateRouteProps {
  children: React.ReactElement;
}

/**
 * PrivateRoute:
 * - Reads auth state from Redux and decides whether to render children.
 * - Preserves the attempted location in state so the login page can redirect back after a successful sign-in.
 */

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authReducer.isAuthenticated
  );
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!isAuthenticated && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
