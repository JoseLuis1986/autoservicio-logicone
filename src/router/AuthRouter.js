import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import { LoginPage } from '../pages/authentication/LoginPage';
import { ConfigInitialPage } from '../pages/authentication/ConfigInitialPage';
// import '../css/login-register.css';
import '../css/App.css'
import { MessagesInfo } from '../components/messages/MessagesInfo';
import { RegisterPage } from '../pages/authentication/RegisterPage';
import { AuthContext } from '../auth/AuthContext';


export const AuthRouter = () => {
    const imagenBase64 = JSON.parse(localStorage.getItem('imageBg'));
    const {auth} = useContext(AuthContext);
    
    return (
        <div style={{
            width: '100%', // Puedes ajustar el ancho según tus necesidades
            height: '100vh', // Puedes ajustar la altura según tus necesidades
            backgroundImage: `url(data:image/png;base64,${imagenBase64 ? imagenBase64 : auth.background})`,
            backgroundSize: 'cover', // Esto ajustará la imagen para cubrir todo el contenedor
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#bac2da'
        }}>
            <div className="App-login">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <div style={{ width: '440px', display: 'flex' }}>
                        <MessagesInfo />
                    </div>
                    <Routes>
                        <Route path="register" element={<ConfigInitialPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="registration" element={<RegisterPage />} />
                        <Route path="/*" element={<Navigate replace to="register" />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
