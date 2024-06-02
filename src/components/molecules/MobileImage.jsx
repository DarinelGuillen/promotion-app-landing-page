import React from 'react';
// import mobileImage from '../../assets/images/fitsapp.png';
import mobileImage from '../../assets/images/fitsapp-rotate.png';

function MobileImage() {
  return (
    <div className="flex justify-center pt-0 pb-20">
      <img src={mobileImage} alt="Mobile Design" className="w-auto" />
    </div>
  );
}

export default MobileImage;
