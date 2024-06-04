import React from 'react';
import Header from '../molecules/Header';
import MobileImage from '../molecules/MobileImage';
import GridView from './GridView';

function Center() {
  return (
    <div className="flex lg:flex-row xl:flex-row flex-col sm:flex-col md:flex-col w-full h-full">
      <div className="top-0 flex flex-col items-center w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 h-full lg:h-screen xl:h-screen expandable">
        <Header />
        <MobileImage />
      </div>
      <div className="lg:flex-1 xl:flex-1 w-full sm:w-full md:w-full h-full lg:h-screen xl:h-screen GridContainer">
        <GridView />
      </div>
    </div>
  );
}

export default Center;
