import React, { useContext } from 'react';
import Context from '../../contexts/Context';
import MacCircles from '../molecules/MacCircles';
import ColorButtons from '../molecules/ColorButtons';
import V001 from '../molecules/V001';

function MacTab() {
  const { selectedService, saveServiceData } = useContext(Context);
  console.log("🚀 ~ MacTab ~ selectedService:", selectedService);

  const defaultColor = "#000000";
  const colors = Array(5).fill(defaultColor);

  if (selectedService && selectedService.stage && selectedService.color) {
    const stageIndex = parseInt(selectedService.stage.slice(-1)) - 1;
    if (stageIndex >= 0 && stageIndex < colors.length) {
      colors[stageIndex] = selectedService.color;
    }
  }

  const handleBack = () => {
    saveServiceData({}, '');
    console.log("Context cleared via handleBack");
  };

  return (
    <div className="flex flex-col bg-white m-0 p-1 rounded-3xl w-full h-full">
      <div className='sticky flex justify-between px-3 py-2 p-x-2 rounded-xl w-full h-auto ga-col'>
        <MacCircles />
      </div>
      <div className='flex-1 p-0 rounded-3xl w-full min-h-[10rem] overflow-y-scroll'>
        <V001 />
      </div>
    </div>
  );
}

export default MacTab;
