import React, { useContext, useEffect, useState } from 'react';
import Header from '../molecules/Header';
import MobileImage from '../molecules/MobileImage';
import ServiceGrid from '../molecules/ServiceGrid';
import V001 from './V001';
import V002 from './V002';
import V003 from './V003';
import V004 from './V004';
import V005 from './V005';
import Context from '../../contexts/Context.jsx';

function Center() {
  const { selectedService } = useContext(Context);
  const [view, setView] = useState(<ServiceGrid />);

  useEffect(() => {
    switch (selectedService.stage) {
      case "001":
        setView(<V001 />);
        break;
      case "002":
        setView(<V002 />);
        break;
      case "003":
        setView(<V003 />);
        break;
      case "004":
        setView(<V004 />);
        break;
      case "005":
        setView(<V005 />);
        break;
      default:
        setView(<ServiceGrid />);
    }
  }, [selectedService]);

  return (
    <div className="flex lg:flex-row xl:flex-row flex-col sm:flex-col md:flex-col w-full h-full">
      <div className="top-0 flex flex-col items-center w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 h-full lg:h-screen xl:h-screen">
        <Header />
        <MobileImage />
      </div>
      <div className="lg:flex-1 xl:flex-1 w-full sm:w-full md:w-full h-full lg:h-screen xl:h-screen overflow-auto">
        {view}
      </div>
    </div>
  );
}

export default Center;
