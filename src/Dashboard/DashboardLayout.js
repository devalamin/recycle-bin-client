import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Dashboard from './Dashboard';
import DashboardNav from './DashboardNav';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>

        </div>
    );
};

export default DashboardLayout;