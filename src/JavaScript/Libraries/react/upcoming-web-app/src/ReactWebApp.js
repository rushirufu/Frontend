import React from 'react';
import './ReactWebApp.css';
// Mis Componentes
import NavComp from './Components/Layout/Header/index';
import FooterComp from './Components/Layout/Footer';
import HomePage from './Components/Views/Home/index';
import BoxComp from './Components/Box'

function ReactWebApp() {
  return (
    <div className="App">
      <NavComp/>
      <HomePage/>
      <BoxComp/>
      <FooterComp/>
    </div>
  );
}

export default ReactWebApp;
