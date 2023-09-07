import React from 'react';
import Image from '../images/hero-beach-creek.jpg';
import Image2 from '../images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg';
import { useLocation } from 'react-router-dom';
import '../css-styles/Hero.scss';



const Hero = () => {

  const location = useLocation();

    return (
          <header className="hero-wrapper">

            {!(location.pathname === '/a-propos') && (
            <div className="hero-banner">
            <img src={Image} className="hero-creek" alt="beach-creek-image" />
            <h1 className="hero-title">Chez vous, partout et ailleurs</h1>
            </div>
            )}

            {location.pathname === '/a-propos' && (
        <img src={Image2} className="hero-creek" alt="beach-creek-image" />
      )}
          </header>
      );
}

export default Hero;