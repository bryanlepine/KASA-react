import React from 'react';
import logo from '../images/logo-kasa.png';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../css-styles/Header.scss';

const Header = () => {
  const location = useLocation();
    return (
          <header className="header">
            <img src={logo} className="Kasa-logo" alt="kasa-logo" />
            <nav className="nav-bar">
            <li><NavLink exact="true" to="/KASA-react" className={location.pathname==='/' ? 'active-link': ''}>Accueil</NavLink></li>
            <li><NavLink to="/KASA-react/a-propos" className={location.pathname === '/a-propos' ? 'active-link' : ''}>A propos</NavLink></li>
            </nav>
          </header>
      );
}

export default Header;