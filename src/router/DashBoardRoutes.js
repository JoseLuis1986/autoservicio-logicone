import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/ui/NavBar';
import { Dashboard } from '../pages/home/Dashboard';
import { Profile } from '../pages/profile/Profile';
import { SalaryReceipt } from '../pages/payments_receipt/SalaryReceipt';
import { Permissions } from '../pages/permission_request/Permissions';
import { HistoryPermissions } from '../pages/permission_request/HistoryPermissions';
import { ErrorPage } from '../pages/errorPage/ErrorPage';


export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/salary-receipt" element={<SalaryReceipt />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path='/permissions' element={<Permissions />} />
                    <Route path='/history-permissions' element={<HistoryPermissions />} />
                    <Route path='/*' element={<ErrorPage />} />
                </Routes>
            </Navbar >
        </>
    )
}
