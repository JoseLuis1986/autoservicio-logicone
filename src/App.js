import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { AppRouter } from './router/AppRouter';
import { AlertProvider } from './context/alerts/AlertContext';
import { ConfigProvider } from './context/configuration/ConfigurationContext';

export const App = () => {
    return (
        <AlertProvider>
            <ConfigProvider>
                <AuthProvider>
                    <AppRouter />
                </AuthProvider>
            </ConfigProvider>
        </AlertProvider>
    )
}