import React, { useContext, useEffect, useState } from 'react';
import Context from '../../contexts/Context.jsx';
import MacTab from './MacTab';
import ServiceGrid from '../molecules/ServiceGrid';

function GridView() {
  const { selectedService } = useContext(Context);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const isEmptyObject = (obj) => {
      return !obj || Object.keys(obj).length === 0 || (Object.keys(obj).length === 1 && obj.route === '');
    };

    setIsEmpty(isEmptyObject(selectedService));
  }, [selectedService]);

  return (
    <div className="py-4 w-full h-min-screen h-screen overflow-auto">
      {isEmpty ? (
        <ServiceGrid />
      ) : (
        <MacTab selectedService={selectedService} />
      )}
    </div>
  );
}

export default GridView;
