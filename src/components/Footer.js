import React from 'react';
import Image from '../images/white-logo.png';
import '../css-styles/Footer.scss';

const Footer = () => {
    return (

          <footer className="footer-reserved">
            <img src={Image} className="logo-white-kasa" alt="white-logo-kasa" />
            <h3 className="rights-reserved"> © 2020 Kasa. All rights reserved</h3>
          </footer>
        
      );
}

export default Footer;