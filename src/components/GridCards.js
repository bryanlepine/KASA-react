import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import '../css-styles/Cards.scss';
function GridCards() {
  const [fetchedProperties, setFetchedProperties] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        setFetchedProperties(data);
      });
  }, []);

 

  return (
    <div className="logements-wrapper">
     {fetchedProperties.map((item, index)=>{
      return <Cards item={item} key={"cards-"+ index}/>
     })}
      
    </div>
  );
}

export default GridCards;