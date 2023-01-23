import './DashboardLayout.css';
import React from 'react';
import RightSideBar from '../components/RightSideBar';
import LeftSideBar from '../components/LeftSideBar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
    return (
        <div className="main-app">
            <LeftSideBar />
            <div className='main'>
                <Outlet />
            </div>
            <RightSideBar />
        </div>
    )
}