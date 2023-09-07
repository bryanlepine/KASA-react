import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './css-styles/index.css';
import Home from './pages/Home'
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import House from './pages/House';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/KASA-react" element={<Home />} />
        <Route path="/KASA-react/a-propos" element={<Apropos />} />
        <Route path="KASA-react/logement/:id" element={<House />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
