import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { AppRouter } from './router/AppRouter';
import { AlertProvider } from './context/alerts/AlertContext';

export const App = () => {
    return (
        <AlertProvider>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </AlertProvider>
    )
}