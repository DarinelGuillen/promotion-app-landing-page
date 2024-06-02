import React from 'react';

function ServiceItem({ color, text }) {
  return (
    <div className={`p-4 ${color} rounded-lg text-white flex items-center justify-center`}>
      <div className="text-center">
        <p className="text-lg font-bold">Text Example</p>
        <p>Service</p>
      </div>
    </div>
  );
}

export default ServiceItem;
