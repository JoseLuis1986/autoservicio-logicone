import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';


export const PrivateRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);

    console.log('ruta privada', auth)
    // return auth.logged
    return auth.logged
        ? children
        : <Navigate to="/auth/register" />
}

