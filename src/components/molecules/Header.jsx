import React from 'react';
import dumbbellIcon from '../../assets/images/dumbbell.png'; // Asegúrate de que esta ruta sea correcta
import '../../assets/css/Header.css';

function Header() {
  return (
    <div className="text-white header-container">
        <img src={dumbbellIcon} alt="Dumbbell Icon" />
      <div className="flex justify-center items-center">
        <h1 className="font-GA">FITSS TRACKER APP</h1>
      </div>
      <p className="leFadeInLeft"><span>The simplest tracking app for training</span></p>
    </div>
  );
}

export default Header;
