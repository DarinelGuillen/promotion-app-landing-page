import React from 'react';
import ServiceItem from './ServiceItem';

function ServiceGrid() {
  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 w-full">
      <ServiceItem color="bg-purple-600" text="Text Example" />
      <ServiceItem color="bg-gray-800" text="Text Example" />
      <ServiceItem color="bg-gray-900" text="Text Example" />
      <ServiceItem color="bg-gray-800" text="Text Example" />
      <ServiceItem color="bg-gray-900" text="Text Example" />
      <ServiceItem color="bg-gray-800" text="Text Example" />
      <ServiceItem color="bg-gray-900" text="Text Example" />
      <ServiceItem color="bg-gray-800" text="Text Example" />
    </div>
  );
}

export default ServiceGrid;
