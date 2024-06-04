import React, { useContext } from 'react';
import { FaTimes, FaMinus, FaExpandAlt } from 'react-icons/fa';
import Context from '../../contexts/Context';

const MacCircles = () => {
  const { selectedService, saveServiceData } = useContext(Context);


  const handleCloseClick = () => {
    saveServiceData({}, '');
    console.log("Close clicked and context cleared");
  };
  const handleMinimizeClick = () => {
    const expandElement = document.querySelector('.expandable');
    if (expandElement) {
      expandElement.classList.remove('hidden');
      expandElement.classList.remove('collapsed');
    }
    console.log("Minimize clicked");
  };

  const handleExpandClick = () => {
    const expandElement = document.querySelector('.expandable');
    if (expandElement) {
      expandElement.classList.add('collapsed');
      expandElement.addEventListener('transitionend', () => {
        expandElement.classList.add('hidden');
      }, { once: true });
    }
    console.log("Expand clicked");
  };

  return (
    <div className='flex justify-center items-center gap-x-[.3rem]'>
      <div className='flex justify-center items-center w-[1.5rem] h-[1.5rem]'>
        <div
          className='relative flex justify-center items-center bg-[#FF605C] rounded-full w-[1rem] hover:w-[1.5rem] h-[1rem] hover:h-[1.5rem] transition-all duration-300'
          onClick={handleCloseClick}
        >
          <FaTimes className='absolute opacity-0 hover:opacity-100 text-white transition-opacity duration-300' />
        </div>
      </div>
      <div className='flex justify-center items-center w-[1.5rem] h-[1.5rem]'>
        <div
          className='relative flex justify-center items-center bg-[#FFBD44] rounded-full w-[1rem] hover:w-[1.5rem] h-[1rem] hover:h-[1.5rem] transition-all duration-300'
          onClick={handleMinimizeClick}
        >
          <FaMinus className='absolute opacity-0 hover:opacity-100 text-white transition-opacity duration-300' />
        </div>
      </div>
      <div className='flex justify-center items-center w-[1.5rem] h-[1.5rem]'>
        <div
          className='relative flex justify-center items-center bg-[#00CA4E] rounded-full w-[1rem] hover:w-[1.5rem] h-[1rem] hover:h-[1.5rem] transition-all duration-300'
          onClick={handleExpandClick}
        >
          <FaExpandAlt className='absolute opacity-0 hover:opacity-100 text-white transition-opacity duration-300' />
        </div>
      </div>
    </div>
  );
};

export default MacCircles;