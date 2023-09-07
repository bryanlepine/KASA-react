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
    fetch('/KASA-react/logements.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const HouseData = data.find((house) => house.id === id);

  if (!HouseData) {
    return <Error />;
  }

  return (
    <>
      <div className="houseWrapper">
        <div className="house">
          <Header />
          <HeroSlider pictures={HouseData.pictures} />
          <HouseSheets property={HouseData} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default House;