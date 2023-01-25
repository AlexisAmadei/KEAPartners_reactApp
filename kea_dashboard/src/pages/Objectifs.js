import React from "react";
import "./Objectifs.css";
import data from '../data/barchart.json'
import BarChart from '../components/graph/BarChart';
import ProgressBar from "@ramonak/react-progress-bar";
import ObjGauge from '../assets/ObjGauge.svg';

export default function Objectifs() {
    return (
        <div className="main-objectifs">
            <div className="gauge-chart">
                <p>Objectifs 2022</p>
                <img src={ObjGauge} alt="objectif-gauge" />
            </div>
            <div className="obj-results">
                <div style={{ marginRight: '16px' }}>
                    <span>Résultats</span>
                    <div className="obj-barChart">
                        <BarChart data={data} />
                    </div>
                </div>
                <div className="container-pgbar">
                    <span>haha la dataviz</span>
                    <div className="container-progress-bar">
                        <h2>Fiches impact réalisées</h2>
                        <div    >
                            <ProgressBar
                                completed={75}
                                bgColor="#AF0929"
                                baseBgColor="#E0E0E0"
                                labelColor="white"
                                labelAlignment="center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}