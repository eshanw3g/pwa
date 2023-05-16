import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  return localStorage.getItem('x-authToken') && localStorage.getItem('user') ? (
    <Outlet />
  ) : (
    <SignIn pathname={pathname} />
  );
};
export default ProtectedRoutes;
