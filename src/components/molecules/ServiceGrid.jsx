import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceItem from './ServiceItem';
import Context from '../../contexts/Context.jsx';

function ServiceGrid() {
  const { saveServiceData } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = (data, route) => {
    saveServiceData(data, route);
    // console.log("🚀 ~ handleClick ~ saveServiceData:", saveServiceData)
    // // navigate(route);
    // console.log("🚀 ~ handleClick ~ route:", route)
    // console.log("🚀 ~ handleClick ~ data:", data.stage)
  };

  return (
    <div className="flex flex-wrap gap-y-4 mt-5 p-4 w-full overflow-auto">
      {[
        { title: "Features", desc: "Discover More", color: "#532F7E", stage: "001", route: "/" },
        { title: "Benefits", desc: "Why Us", color: "#644D32", stage: "002", reverse: true, route: "/" },
        { title: "About Us", desc: "Our Story", color: "#7B3535", stage: "003", route: "/" },
        { title: "FAQ", desc: "Questions Answered", color: "#2A447A", stage: "004", reverse: true, route: "/" },
        { title: "Download", desc: "Join Us", color: "#3A6E52", stage: "005", route: "/" },
      ].map(({ title, desc, color, stage, route, reverse }) => (
        <div key={stage} className='w-full' onClick={() => handleClick({ title, desc, color, stage }, route)}>
          <ServiceItem
            color="#191B1C"
            hoverColor={color}
            description={desc}
            title={title}
            stageNumber={stage}
            styleBackground="#242424"
            reverse={reverse}
          />
        </div>
      ))}
    </div>
  );
}

export default ServiceGrid;
