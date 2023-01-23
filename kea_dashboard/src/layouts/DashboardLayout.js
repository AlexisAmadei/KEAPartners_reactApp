import './DashboardLayout.css';
import React from 'react';
import RightSideBar from '../components/RightSideBar';
import LeftSideBar from '../components/LeftSideBar';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import Accueil from '../pages/Accueil';
import Objectifs from '../pages/Objectifs';

export default function DashboardLayout() {
    return (
        <div className="dash-main-app">
            <LeftSideBar />
            <div className='main'>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Accueil />} />
                        <Route path='objectifs' element={<Objectifs />} />
                    </Route>
                </Routes>
            </div>
            <RightSideBar />
        </div>
    )
}