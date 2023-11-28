import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../auth/AuthContext';


export const PublicRoute = ({ children }) => {

    const { auth } = useContext(AuthContext);

    return auth.logged
        ? <Navigate to="/" />
        : children
}