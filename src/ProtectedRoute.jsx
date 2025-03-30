import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ requiredRole }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const isAuthenticated = user && token;

  /*if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Verifica si el role del usuario está incluido en el array de roles permitidos
  if (requiredRole && !requiredRole.includes(user.role_id)) {
    return <Navigate to="/unauthorized" replace />;
  }*/

  return <Outlet />;
};

export default ProtectedRoute;
