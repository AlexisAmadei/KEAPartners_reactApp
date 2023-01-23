import React from "react";
import Switch from '@mui/material/Switch';
import './Settings.css';
import { Link } from "react-router-dom";

export default function Settings() {
    return (
        <div className="settings-container">
            <div>
                <h1>Paramètres</h1>
            </div>
            <div className="switch-container">
                <div className="switch-item">
                    <p>Changer le thème</p>
                    <Switch />
                </div>
            </div>
            <div className="back-home">
                <Link to='/'>Retour à l'accueil</Link>
            </div>
        </div>
    )
}