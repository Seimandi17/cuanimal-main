import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ requiredRole }) => {
    // Obtener el usuario y el token desde localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    const isAuthenticated = user && token;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRole && (user.role_id !== requiredRole[0] || user.role_id !== requiredRole[1])) {
        return <Navigate to="/unauthorized" replace />;
        //GENERAR UN ELEMENTO PARA PAGINA SIN AUTORIZACION EN ROUTES
    }

    return <Outlet />;
};

export default ProtectedRoute;