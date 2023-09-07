import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import Error from "./Error";
import Footer from "../components/Footer";
import HouseSheets from "../components/HouseSheets";

function House() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const HouseData = data.find(House => House.id === id);

  return (
    <>
      {HouseData ? (
        <div className="houseWrapper">
          <div className="house">
            <Header />
            <HeroSlider pictures={HouseData.pictures} />
            <HouseSheets property={HouseData} />
          </div>
          <Footer />
        </div>
        
      ) : (
        <Error />
      )}
    </>
  );
}

export default House;