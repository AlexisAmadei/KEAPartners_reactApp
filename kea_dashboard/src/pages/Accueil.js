import React from 'react';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import LineChart from '../components/graph/LineChart';
import Compteurs from '../components/graph/Compteurs';
import ProgressBar from '../components/graph/progressBar';

import './accueil.css';
import data from '../data/linechart.json'
import Treemap from '../assets/graph/treemap.svg';

export default function Accueil() {
    return(
        <div className='main-app'>
            <LeftSideBar className="LeftSideBar" />
            <div className='main'>
                <Header />
                <Navbar />
                <div className='graph'>
                    <div className='left-graph'>
                        <div className='break-line'>
                            <h2>KEA Positive Impact</h2>
                        </div>
                        <div className='treemap'>
                            <p>Pourcentages des cases majeures KPIC mobilisées</p>
                            <img src={Treemap} alt='treemap' />
                        </div>
                        <div className='progressBar'>
                            <ProgressBar />
                        </div>
                    </div>
                    <div className='right-graph'>
                        <div className='break-line'></div>
                        <p>Moyennes générales de progression - <span className='span-bold'>en général</span></p>
                        <div className='compteurs'>
                            <Compteurs />
                        </div>
                        {!!data &&
                            <div className='containerLine-chart'>
                                <div className="line-chart">
                                    <LineChart data={data}/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <RightSideBar />
        </div>
    )
}
