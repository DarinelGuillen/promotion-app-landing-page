import React, { useContext } from 'react';
import { FaAndroid, FaApple, FaQrcode } from 'react-icons/fa';
import Context from '../../contexts/Context.jsx';
import appLogo from '.././../assets/images/dumbbell.png';
import imgFeature1 from '../../assets/images/Mobile_VisualizaciónClara.png';
import imgFeature2 from '../../assets/images/Mobile_PlanesPersonalizados.png';
import imgFeature3 from '../../assets/images/Mobile_RegistroSimplificado.png';
import imgFeature4 from '../../assets/images/Mobile_SobrecargaProgresiva.png';
import QR from '../../assets/images/QR.png';

function V005() {
  const { selectedService, saveServiceData } = useContext(Context);

  const handleBack = () => {
    saveServiceData({}, '');
  };

  const qrCodeUrl = 'https://via.placeholder.com/150'; // URL del código QR (puedes generar uno real más tarde)

  return (
    <div className="flex flex-col flex-1 justify-center items-center drop-shadow-2xl p-8 rounded-3xl h-auto text-center text-white overflow-y-auto" style={{ backgroundColor: selectedService.color }}>
      <h1 className="mb-4 font-bold text-4xl">{selectedService.title}</h1>
      <p className="mb-8 text-lg">{selectedService.desc}</p>

      <img src={appLogo} alt="App Logo" className="mb-8 w-32 h-32" />

      <div className="flex flex-col items-center mb-8">
        <h2 className="mb-4 font-bold text-3xl">Join Us</h2>
        <p className="mb-8 text-lg">Descarga nuestra app y mejora tu entrenamiento físico hoy mismo.</p>
        <div className="flex space-x-4">
          <a href="https://play.google.com" className="flex items-center bg-green-500 hover:bg-green-700 px-4 py-2 rounded-lg font-bold text-white">
            <FaAndroid className="mr-2 text-2xl" /> Android
          </a>
          <a href="https://www.apple.com/app-store/" className="flex items-center bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold text-white">
            <FaApple className="mr-2 text-2xl" /> iOS
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center mb-8">
        <h2 className="mb-4 font-bold text-3xl">Descarga Rápida</h2>
        <img src={QR} alt="Código QR" className="rounded-2xl w-32 h-32" />
        <p className="mt-4 text-lg">Escanea el código QR para una descarga rápida.</p>
      </div>

      <div className="flex flex-col items-center mb-8">
        <h2 className="mb-4 font-bold text-3xl">Capturas de Pantalla</h2>
        <div className="flex space-x-4">
          <img src={imgFeature1} alt="Screenshot 1" className="bg-white p-2 rounded-lg w-24 h-48" />
          <img src={imgFeature2} alt="Screenshot 2" className="bg-white p-2 rounded-lg w-24 h-48" />
          <img src={imgFeature3} alt="Screenshot 3" className="bg-white p-2 rounded-lg w-24 h-48" />
          <img src={imgFeature4} alt="Screenshot 3" className="bg-white p-2 rounded-lg w-24 h-48" />
        </div>
      </div>
    </div>
  );
}

export default V005;
