import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/ui/NavBar';
import { ConfigurationAccount } from '../pages/configuration/ConfigurationAccount';


export const ConfigurationRoutes = () => {
    return (
        <>
            <Navbar>
                <Routes>
                    <Route path="/" element={<ConfigurationAccount />} />
                </Routes>
            </Navbar >
        </>
    )
}
