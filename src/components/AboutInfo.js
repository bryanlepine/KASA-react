import React, { useState } from 'react';
import arrow from '../images/arrow.svg';
import CollapseItem from './CollapseItem'; 
import data from '../data.json';

const AboutInfo = () => {
    const [showFiability, setShowFiability] = useState(false);
    const [showRespect, setShowRespect] = useState(false);
    const [showService, setShowService] = useState(false);
    const [showSecurity, setShowSecurity] = useState(false);

    return (
      <div className='description-wrapper-all'>
        <div className='description-wrapper-apropos'>
          <CollapseItem
            title="Fiabilité"
            isExpanded={showFiability}
            toggleExpanded={() => setShowFiability(!showFiability)}
          >
           {data.fiability}
          </CollapseItem>

          <CollapseItem
            title="Respect"
            isExpanded={showRespect}
            toggleExpanded={() => setShowRespect(!showRespect)}
          >{data.respect} 
           
          </CollapseItem>

          <CollapseItem
            title="Service"
            isExpanded={showService}
            toggleExpanded={() => setShowService(!showService)}
          >
            {data.service}
          </CollapseItem>

          <CollapseItem
            title="Sécurité"
            isExpanded={showSecurity}
            toggleExpanded={() => setShowSecurity(!showSecurity)}
          >
           {data.security}
          </CollapseItem>
        </div>
      </div>
    );
}

export default AboutInfo;
