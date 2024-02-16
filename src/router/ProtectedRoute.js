import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ConfigurationContext } from '../context/configuration/ConfigurationContext';


export const ProtectedRoute = ({ children }) => {
    const { configState } = useContext(ConfigurationContext);

    // return auth.logged
    return configState.isAdmin
        ? children
        : <Navigate to="/" />
}
