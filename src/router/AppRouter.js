import React, { useContext, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { AuthRouter } from './AuthRouter';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ConfigurationRoutes } from './ConfigurationRoutes';
import { ProtectedRoute } from './ProtectedRoute';


export const AppRouter = () => {

    const { auth, verifyToken } = useContext(AuthContext);

    useEffect(() => {

        verifyToken();

    }, [verifyToken])

    if (auth.checking) {
        return <h1>Espere por favor!!</h1>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element={
                    <PublicRoute>
                        <AuthRouter />
                    </PublicRoute>
                }
                />
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashBoardRoutes />
                    </PrivateRoute>
                }
                />
                <Route path="/config/*" element={
                    <ProtectedRoute>
                        <ConfigurationRoutes />
                    </ProtectedRoute>
                }
                />
            </Routes>
        </BrowserRouter>
    )
}
