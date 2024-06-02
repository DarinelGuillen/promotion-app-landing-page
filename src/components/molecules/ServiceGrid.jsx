import React from 'react';
import ServiceItem from './ServiceItem';

function ServiceGrid() {
  return (
    <div className="flex flex-wrap mt-5 p-4 w-full">
      <ServiceItem
        color="#191B1C"
        hoverColor="#3E2D55"
        description="How can we help?"
        title="Services."
        stageNumber="001"
        styleBackground="#242424"
      />
    </div>
  );
}

export default ServiceGrid;
