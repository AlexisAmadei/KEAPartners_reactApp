import Header from '../components/Header';
import Navbar from '../components/Navbar';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import Layout from '../Layout';
import Treemap from '../assets/graph/treemap.svg';
import React, { useState } from 'react';
import Compteurs from '../components/graph/Compteurs';

import './accueil.css';

 const Accueil=({}) => {
    const [current, setCurrent] = useState(0);
    return(
        <div className='main-app'>
            <LeftSideBar />
                <div className='main'>
                    <Header />
                    <Navbar current={0} setCurrent={setCurrent} />
                    <div className='graph'>
                        <div className='left-graph'>
                            <div className='break-line'>
                                <h2>KEA Positive Impact</h2>
                            </div>
                            <div className='treemap'>
                                <p>Pourcentages des cases majeures KPIC mobilisées</p>
                                <img src={Treemap} alt='treemap' />
                            </div>
                        </div>
                        <div className='right-graph'>
                            <div className='break-line'></div>
                            <p>Moyennes générales de progression - <span className='span-bold'>en général</span></p>
                            <div className='compteurs'>
                                <Compteurs />
                            </div>
                        </div>
                    </div>
                </div>
            <RightSideBar />
        </div>
    )

}
export default Accueil;