import React from 'react';

const ColorButtons = ({ colors }) => {
  return (
    <div className='flex gap-x-[.3rem]'>
      {colors.map((color, i) => (
        <div key={i} className='flex justify-center items-center w-[2rem] h-[2rem]'>
          <div
            className='relative flex justify-center items-center rounded-full w-[1.5rem] hover:w-[2rem] h-[1.5rem] hover:h-[2rem] transition-all duration-300'
            style={{
              background: color,
              color: '#FFFFFF'
            }}
          >
            {i + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorButtons;
