import React, { useContext } from 'react';
import Context from '../../contexts/Context.jsx';

function V001() {
  const { selectedService, saveServiceData } = useContext(Context);

  const handleBack = () => {
    saveServiceData({}, '');
  };

  return (
    <div className="flex flex-col gap-y-4 h-screen" >

      <div className="flex flex-col flex-1 justify-center items-center p-8 rounded-3xl text-center text-white" style={{ backgroundColor: selectedService.color }}>
        <h1 className="mb-4 font-bold text-4xl">{selectedService.title}</h1>
        <p className="mb-8 text-lg">{selectedService.desc}</p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-4 rounded-lg w-64 text-black">
            <h2 className="font-bold text-xl">Brand Identity</h2>
            <p>Our performance to raise your brands profile through distinctive visuals and meticulous attention to detail.</p>
          </div>
          <div className="bg-white p-4 rounded-lg w-64 text-black">
            <h2 className="font-bold text-xl">UX/UI Design</h2>
            <p>We are focused on creating fluid consumer interfaces, utilizing cutting-edge interaction.</p>
          </div>
          <div className="bg-white p-4 rounded-lg w-64 text-black">
            <h2 className="font-bold text-xl">Development</h2>
            <p>Our seasoned team strives to polish your product and to satisfy your brand demands.</p>
          </div>
          <div className="bg-white p-4 rounded-lg w-64 text-black">
            <h2 className="font-bold text-xl">Unmatched Support</h2>
            <p>Support for all your needs and issues will be available 24/7, encompassing various channels worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default V001;
