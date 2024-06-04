import React, { useContext, useEffect, useState } from 'react';
import ServiceGrid from '../molecules/ServiceGrid';
import V001 from '../molecules/V001';
import V002 from '../molecules/V002';
import V003 from '../molecules/V003';
import V004 from '../molecules/V004';
import V005 from '../molecules/V005';
import Context from '../../contexts/Context.jsx';
import MacTab from './MacTab';
function GridView() {
  const { selectedService } = useContext(Context);
  const [view, setView] = useState(<ServiceGrid />);

  useEffect(() => {
    switch (selectedService.stage) {
      case "001":
        setView(<MacTab />);
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
    <div className="bg-red-900 p-4 w-full h-min-screen h-screen overflow-auto">
      {view}
    </div>
  );
}

export default GridView;
