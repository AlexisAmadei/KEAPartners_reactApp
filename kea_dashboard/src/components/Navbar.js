import { margin } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.scss"

const Navbar = ({ current, setCurrent }) => {

    return (
        <div className={`nav-slider current-${current}`}>
            <nav>
                <ol>
                    <li onClick={(e) => setCurrent(0)}>
                        <Link to={'/'}>Mon Entreprise</Link>
                    </li>
                    <li onClick={(e) => setCurrent(1)}>
                        <Link to={'/objectifs'}>Kea Objectifs</Link>
                    </li>
                    <li onClick={(e) => setCurrent(2)}>
                        <Link to={'/objectifs'}>Engagement</Link>
                    </li>
                </ol>
                <span className="slider"></span>
            </nav>
        </div>
    );
}

export default Navbar;