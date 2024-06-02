import React from 'react';
import ServiceItem from './ServiceItem';

function ServiceGrid() {
  return (
    <div className="flex flex-wrap gap-y-4 mt-5 p-4 w-full">
      <ServiceItem
        color="#191B1C"
        hoverColor="#3E2D55"
        description="How can we help?"
        title="Services."
        stageNumber="001"
        styleBackground="#242424"
      />
      <ServiceItem
        color="#191B1C"
        hoverColor="#644D32"
        description="How can we help?"
        title="Services."
        stageNumber="002"
        styleBackground="#242424"
        reverse
      />
      <ServiceItem
        color="#191B1C"
        hoverColor="#7B3535"
        description="How can we help?"
        title="Services."
        stageNumber="003"
        styleBackground="#242424"
      />
      <ServiceItem
        color="#191B1C"
        hoverColor="#2A447A"
        description="How can we help?"
        title="Services."
        stageNumber="004"
        styleBackground="#242424"
        reverse
      />
      <ServiceItem
        color="#191B1C"
        hoverColor="#3A6E52"
        description="How can we help?"
        title="Services."
        stageNumber="005"
        styleBackground="#242424"
      />
    </div>
  );
}

export default ServiceGrid;
