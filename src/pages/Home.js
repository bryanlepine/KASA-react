import React from "react";
import Header from "../components/Header";
import GridCards from "../components/GridCards";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import '../css-styles/Home.scss';
import '../css-styles/Main.scss';
import '../css-styles/Responsive.scss';

function Home() {

  return (
    <div className="Home">
      <div className="HomeWrapper">
        <Header/>
        <Hero/>
        <GridCards/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;