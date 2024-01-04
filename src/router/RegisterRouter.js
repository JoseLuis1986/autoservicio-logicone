import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import { RegisterPage } from '../pages/authentication/RegisterPage';
// import '../css/login-register.css';
import '../css/App.css'
import { MessagesInfo } from '../components/messages/MessagesInfo';


export const RegisterRouter = () => {
    return (
        <div className="App">
            <div className="App-login">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <MessagesInfo />
                    <Routes>
                        {/* <Route path="register" element={<RegisterPage />} /> */}
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="/*" element={<Navigate replace to="/" />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
