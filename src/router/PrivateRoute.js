import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';


export const PrivateRoute = ({ children }) => {

    const { auth } = useContext(AuthContext);

    // const { pathname, search } = useLocation();

    // localStorage.setItem('lastPath', pathname + search);

    return auth.logged
        ? children
        : <Navigate to="/auth/register" />
}

