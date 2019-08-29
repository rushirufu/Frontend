import React from 'react';
import './ReactWebApp.css';
// Mis Componentes
import NavComp from './Components/Layout/Header/index';
import FooterComp from './Components/Layout/Footer';
import HomePage from './Components/Views/Home/index';
import ThumbnailComp from './Components/Content/ThumbnailContainer/Thumbnail';



function ReactWebApp() {
  return (
    <div className="App">
      <NavComp/>
      <HomePage/>
      <ThumbnailComp/>
      <FooterComp/>
    </div>
  );
}

export default ReactWebApp;
