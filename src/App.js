import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import './styles/navbar.css'; // Assicurati che il percorso del CSS sia corretto
import Home from './pages/Home';   // Importazione dalla cartella 'pages'
import About from './pages/About'; // Importazione dalla cartella 'pages'
import Resume from './pages/Resume'; // Importazione dalla cartella 'pages'
import Navbar from './compontents/Navbar'; // Importazione del componente Navbar

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>My Page</title>
        </Helmet>
        {/* Barra di navigazione */}
        <Navbar /> {/* Usa il componente Navbar qui */}
        
        {/* Contenitore per le rotte */}
        <div className="Routes-container">
          <Routes>
            {/* Rotta di default */}
            <Route path="/my-page/" element={<Home />} />
            <Route path="/my-page/about" element={<About />} />
            <Route path="/my-page/resume" element={<Resume />} />
            
            {/* Redirect esplicito alla home, se la rotta non esiste */}
            <Route path="*" element={<Navigate to="/my-page" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
