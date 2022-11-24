import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Dashboard from './Dashboard';
import DashboardNav from './DashboardNav';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <DashboardNav></DashboardNav>
            <Dashboard></Dashboard>
        </div>
    );
};

export default DashboardLayout;