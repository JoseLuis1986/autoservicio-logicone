import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import { LoginPage } from '../pages/authentication/LoginPage';
import { RegisterPage } from '../pages/authentication/RegisterPage';
// import '../css/login-register.css';
import '../css/App.css'
import { MessagesInfo } from '../components/messages/MessagesInfo';
import { Button } from '@fluentui/react-components';
import { ModalRegister } from '../components/ModalRegister';


export const AuthRouter = () => {
    // const [isConfigured, setIsConfigured] = useState(false)
    // const isToken = localStorage.getItem('token');
    const handleModal = () => {

    };

    return (
        <div className="App">
            <div className="App-login">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <MessagesInfo />
                    <Routes>
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="/*" element={<Navigate replace to="/" />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
