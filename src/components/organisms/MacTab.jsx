import React, { useContext, useEffect, useState } from 'react';
import Context from '../../contexts/Context';
import MacCircles from '../molecules/MacCircles';
import ColorButtons from '../molecules/ColorButtons';
import ServiceGrid from '../molecules/ServiceGrid';
import V001 from '../molecules/V001';
import V002 from '../molecules/V002';
import V003 from '../molecules/V003';
import V004 from '../molecules/V004';
import V005 from '../molecules/V005';

function MacTab({ selectedService }) {
  const { saveServiceData } = useContext(Context);
  const [view, setView] = useState();

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
    }
  }, [selectedService]);

  const defaultColor = "#000000";
  const colors = Array(5).fill(defaultColor);

  if (selectedService && selectedService.stage && selectedService.color) {
    const stageIndex = parseInt(selectedService.stage.slice(-1)) - 1;
    if (stageIndex >= 0 && stageIndex < colors.length) {
      colors[stageIndex] = selectedService.color;
    }
  }

  return (
    <div className="flex flex-col bg-white m-0 p-1 rounded-3xl w-full h-full">
      <div className='sticky flex justify-around px-3 py-2 p-x-2 rounded-xl w-full h-auto ga-col'>
        <MacCircles />
      </div>
      <div className='flex-1 px-[2rem] pb-[2rem] rounded-3xl w-full overflow-y-scroll'>
        {view}
      </div>
    </div>
  );
}

export default MacTab;
