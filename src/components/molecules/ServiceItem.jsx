import React from 'react';
import '../../assets/css/ServiceItem.css';

function ServiceItem({ color, hoverColor, description, title, stageNumber, styleBackground, reverse }) {
  return (
    <div className={`service-container ${reverse ? 'reverse' : ''} cursor-pointer`}>
      <div className="service-item" style={{ '--initial-color': color, '--hover-color': hoverColor }}>
        <div className="content">
          <p>{description}</p>
          <p>{title}</p>
        </div>
      </div>
      <div className="alternate-item" style={{ '--initial-color': styleBackground, '--hover-color': hoverColor }} data-description={description}>
        <div className="content">
          <p className='font-GA'>{stageNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
