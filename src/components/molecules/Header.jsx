import React from 'react';
import dumbbellIcon from '../../assets/images/dumbbell.png'; // Asegúrate de que esta ruta sea correcta

function Header() {
  return (
    <div className="relative mb-8 text-center text-white">
      <img src={dumbbellIcon} alt="Dumbbell Icon" className="top-0 left-0 w-12 h-12" />
      <div className="pt-6">
        <h1 className="mt-6 font-GA text-4xl">FitSS Tracker App</h1>
        <p className="mt-4 text-lg">The simplest tracking app for training</p>
      </div>
    </div>
  );
}

export default Header;
