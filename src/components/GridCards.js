import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import '../css-styles/Cards.scss';
import { useNavigate } from 'react-router-dom'; 

function GridCards() {
  const [fetchedProperties, setFetchedProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/KASA-react/logements.json') 
      .then(response => response.json())
      .then(data => {
        setFetchedProperties(data);
      });
  }, []);

  return (
    <div className="logements-wrapper">
      {fetchedProperties.map((item, index) => (
        <div
          key={"cards-" + index}
          onClick={() => navigate(`/KASA-react/logement/${item.id}`)} 
          className="card" 
        >
          <Cards item={item} />
        </div>
      ))}
    </div>
  );
}

export default GridCards;