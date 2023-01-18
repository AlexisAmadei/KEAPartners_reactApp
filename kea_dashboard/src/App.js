import './App.css';
import React, {useState} from 'react';
import { Route, Routes } from 'react-router';
import Accueil from './pages/Accueil';
import Objectifs from './pages/Objectifs';

function App() {
  return (
    <div className="App" id='root'>
      <Routes>
        <Route exact path='/' element={<Accueil />} />
        <Route path='/objectifs' element={<Objectifs />} />
      </Routes>
    </div>
  );
}

export default App;
