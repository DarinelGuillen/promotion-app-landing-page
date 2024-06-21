import React, { useContext } from 'react';
import Context from '../../contexts/Context.jsx';
import imgFeature1 from '../../assets/images/Mobile_VisualizaciónClara.png';
import imgFeature2 from '../../assets/images/Mobile_PlanesPersonalizados.png';
import imgFeature3 from '../../assets/images/Mobile_RegistroSimplificado.png';
import imgFeature4 from '../../assets/images/Mobile_SobrecargaProgresiva.png';

function V001() {
  const { selectedService, saveServiceData } = useContext(Context);

  const handleBack = () => {
    saveServiceData({}, '');
  };

  const features = [
    {
      icon: '📝',
      name: 'Registro Simplificado',
      description: 'Una interfaz intuitiva para un registro rápido y fácil de tus entrenamientos.',
      image: imgFeature3
    },
    {
      icon: '📈',
      name: 'Sobrecarga Progresiva',
      description: 'Programas y consejos específicos para implementar la sobrecarga progresiva de manera efectiva.',
      image: imgFeature4
    },
    {
      icon: '📊',
      name: 'Visualización Clara del Progreso',
      description: 'Gráficos e informes claros que muestran los avances en fuerza, resistencia y otros parámetros.',
      image: imgFeature1
    },
    {
      icon: '🏋️‍♂️',
      name: 'Planes Personalizados',
      description: 'Personalización según objetivos individuales para un entrenamiento efectivo.',
      image: imgFeature2
    }
  ];

  return (
    <div className="flex flex-col flex-1 justify-center items-center drop-shadow-2xl p-8 rounded-3xl h-auto text-center text-white overflow-visible" style={{ backgroundColor: selectedService.color }}>
      <h1 className="mb-4 font-bold text-4xl">{selectedService.title}</h1>
      <p className="mb-8 text-lg">{selectedService.desc}</p>

      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center bg-white bg-opacity-20 p-6 rounded-lg max-w-xs text-black">
            <div className="mb-4 text-6xl">{feature.icon}</div>
            <h2 className="mb-2 font-bold text-2xl">{feature.name}</h2>
            <p className="mb-4 text-center text-lg">{feature.description}</p>
            <img src={feature.image} alt={`${feature.name} image`} className="shadow-lg rounded-lg max-w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default V001;
