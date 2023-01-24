import React from "react";
import "./Objectifs.css";
import data from '../data/barchart.json'
import BarChart from '../components/graph/BarChart';

import ObjGauge from '../assets/ObjGauge.svg';

export default function Objectifs() {
    return (
        <div className="main-objectifs">
            <div className="gauge-chart">
                <p>Objectifs 2022</p>
                <img src={ObjGauge} alt="objectif-gauge" />
            </div>
            <div className="obj-results">
                <span>Résultats</span>
                <div className="obj-barChart">
                    <BarChart data={data} />
                </div>
            </div>
        </div>
    );
}