import React, { useContext } from 'react';
import { FaRegCheckCircle, FaChartLine, FaRegChartBar, FaUserCog, FaUserShield, FaTrophy, FaHandsHelping, FaBullseye } from 'react-icons/fa';
import Context from '../../contexts/Context.jsx';

function V002() {
  const { selectedService, saveServiceData } = useContext(Context);

  const handleBack = () => {
    saveServiceData({}, '');
  };

  const benefits = [
    {
      icon: <FaRegCheckCircle className="mb-2 text-4xl text-green-500" />,
      name: 'Registro Simplificado',
      description: 'Interfaz intuitiva para un registro rápido y fácil.'
    },
    {
      icon: <FaChartLine className="mb-2 text-4xl text-blue-500" />,
      name: 'Sobrecarga Progresiva',
      description: 'Programas y consejos específicos para implementar la sobrecarga progresiva.'
    },
    {
      icon: <FaRegChartBar className="mb-2 text-4xl text-purple-500" />,
      name: 'Visualización Clara del Progreso',
      description: 'Gráficos e informes claros que muestran los avances en fuerza, resistencia y otros parámetros.'
    },
    {
      icon: <FaUserCog className="mb-2 text-4xl text-orange-500" />,
      name: 'Planes Personalizados',
      description: 'Personalización según objetivos individuales.'
    },
    {
      icon: <FaUserShield className="mb-2 text-4xl text-red-500" />,
      name: 'Empoderamiento Personal',
      description: 'Proporciona a los usuarios un sentido de empoderamiento al permitirles tomar el control de su salud y condición física.'
    },
    {
      icon: <FaTrophy className="mb-2 text-4xl text-yellow-500" />,
      name: 'Sensación de Logro',
      description: 'Ver su progreso físico de manera clara y tangible, experimentando una sensación de logro y satisfacción.'
    },
    {
      icon: <FaHandsHelping className="mb-2 text-4xl text-teal-500" />,
      name: 'Autonomía y Flexibilidad',
      description: 'Ofrece la flexibilidad de adaptar el entrenamiento a necesidades y preferencias individuales.'
    },
    {
      icon: <FaBullseye className="mb-2 text-4xl text-indigo-500" />,
      name: 'Motivación y Compromiso',
      description: 'Mantiene a los usuarios motivados y comprometidos con su rutina de ejercicios a largo plazo.'
    }
  ];

  return (
    <div className="flex flex-col flex-1 justify-center items-center drop-shadow-2xl p-8 rounded-3xl h-auto text-center text-white overflow-y-auto" style={{ backgroundColor: selectedService.color }}>
      <h1 className="mb-4 font-bold text-4xl">{selectedService.title}</h1>
      <p className="mb-8 text-lg">{selectedService.desc}</p>

      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center bg-white bg-opacity-20 p-6 rounded-lg max-w-xs text-black">
            {benefit.icon}
            <h2 className="mb-2 font-bold text-2xl">{benefit.name}</h2>
            <p className="text-center text-lg">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default V002;
