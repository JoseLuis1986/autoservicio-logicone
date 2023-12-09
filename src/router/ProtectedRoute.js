import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';


export const ProtectedRoute = ({ children }) => {

    const { auth } = useContext(AuthContext);

    // const { pathname, search } = useLocation();
    console.log('ruta protegida', auth)
    // localStorage.setItem('lastPath', pathname + search);
    return auth.logged
        ? <Navigate to="/" />
        : children
}

