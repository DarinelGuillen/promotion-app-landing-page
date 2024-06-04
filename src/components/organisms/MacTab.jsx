import React, { useContext } from 'react';
import Context from '../../contexts/Context';

function MacTab() {
  const { data } = useContext(Context);
  console.log("🚀 ~ MacTab ~ data:", data)

  const defaultColors = [
    "#000000", // Default color for 1
    "#000000", // Default color for 2
    "#000000", // Default color for 3
    "#000000", // Default color for 4
    "#000000"  // Default color for 5
  ];

  const colors = [...defaultColors];

  if (data && data.stage && data.color) {
    const stageIndex = parseInt(data.stage.slice(-1)) - 1;
    if (stageIndex >= 0 && stageIndex < colors.length) {
      colors[stageIndex] = data.color;
    }
  }

  return (
    <div className="bg-white m-0 p-1 rounded-3xl w-full h-full">
      <div className='flex justify-between px-3 py-2 p-x-2 rounded-xl w-full h-auto ga-col'>
        <div className='flex gap-x-[.3rem] bg-gray-400'>
          <div className='bg-[#FF605C] rounded-full w-[1rem] h-[1rem]'></div>
          <div className='bg-[#FFBD44] rounded-full w-[1rem] h-[1rem]'></div>
          <div className='bg-[#00CA4E] rounded-full w-[1rem] h-[1rem]'></div>
        </div>
        <div className='flex gap-x-[.3rem]'>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className='flex justify-center items-center rounded-full w-[1.5rem] h-[1.5rem]'
              style={{
                background: colors[i],
                color: '#FFFFFF' // White text for visibility
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MacTab;
