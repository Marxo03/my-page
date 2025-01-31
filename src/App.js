import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import './styles/navbar.css';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Navbar from './compontents/Navbar';

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight); // Ottieni l'altezza della navbar
    }

    // Ricalcola l'altezza della navbar se la finestra viene ridimensionata
    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup dell'event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Esegui solo una volta quando il componente viene montato

  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>My Page</title>
        </Helmet>
        {/* Barra di navigazione */}
        <Navbar />
        
        {/* Contenitore per le rotte */}
        <div className="Routes-container" style={{ marginTop: `${navbarHeight}px` }}>
          <Routes>
            <Route path="/my-page/" element={<Home />} />
            <Route path="/my-page/about" element={<About />} />
            <Route path="/my-page/resume" element={<Resume />} />
            <Route path="/my-page/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/my-page" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
