import React from 'react';
import Header from '../molecules/Header';
import MobileImage from '../molecules/MobileImage';
import ServiceGrid from '../molecules/ServiceGrid';

function Center() {
  return (
    <div className="flex lg:flex-row xl:flex-row flex-col sm:flex-col md:flex-col w-full h-full">
      <div className="flex flex-col items-center w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 h-full lg:h-screen xl:h-screen">
        <Header />
        <MobileImage />
      </div>
      <div className="lg:flex-1 xl:flex-1 bg-blue-500 w-full sm:w-full md:w-full h-full lg:h-screen xl:h-screen overflow-auto">
        <ServiceGrid />
        <ServiceGrid />
        <ServiceGrid />
        <ServiceGrid />
      </div>
    </div>
  );
}

export default Center;
