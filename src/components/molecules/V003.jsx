import React, { useContext } from 'react';
import { FaUserTie, FaBook, FaBullseye } from 'react-icons/fa';
import Context from '../../contexts/Context.jsx';

function V003() {
  const { selectedService, saveServiceData } = useContext(Context);

  const handleBack = () => {
    saveServiceData({}, '');
  };

  const teamMembers = [
    {
      name: 'José Armando Pascacio Glaizar',
      role: 'Desarrollador Frontend',
      description: 'Estudiante apasionado por el diseño de interfaces y la experiencia de usuario. Líder en la implementación de la estructura visual de la app.',
      icon: <FaUserTie className="mb-2 text-6xl text-green-500" />
    },
    {
      name: 'Ulises Gálvez Miranda',
      role: 'Desarrollador Backend',
      description: 'Encargado de la lógica del servidor y la gestión de bases de datos. Su habilidad en Node.js y TypeScript asegura un backend robusto y eficiente.',
      icon: <FaUserTie className="mb-2 text-6xl text-blue-500" />
    },
    {
      name: 'Christian Darinel Escobar Guillén',
      role: 'Gestor de Proyectos',
      description: 'Experto en la gestión de proyectos y coordinación del equipo. Garantiza que todas las etapas del desarrollo se completen a tiempo y con alta calidad.',
      icon: <FaUserTie className="mb-2 text-6xl text-purple-500" />
    }
  ];

  return (
    <div className="flex flex-col flex-1 justify-center items-center drop-shadow-2xl p-8 rounded-3xl h-auto text-center text-white overflow-y-auto" style={{ backgroundColor: selectedService.color }}>
      <h1 className="mb-4 font-bold text-4xl">{selectedService.title}</h1>

      <div className="mb-8">
        <h2 className="mb-4 font-bold text-3xl">{selectedService.desc}</h2>
        <p className="text-lg">
          Este proyecto nació como una iniciativa de tres estudiantes de la Universidad Politécnica de Chiapas. Con el objetivo de resolver problemas reales relacionados con el seguimiento de entrenamientos físicos, desarrollamos una aplicación móvil intuitiva y eficaz.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 font-bold text-3xl">Nuestro Equipo</h2>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-white bg-opacity-20 p-6 rounded-lg text-black">
              {member.icon}
              <h3 className="mb-2 font-bold text-2xl">{member.name}</h3>
              <h4 className="mb-2 text-xl">{member.role}</h4>
              <p className="text-center text-lg">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 font-bold text-3xl">Misión</h2>
        <div className="flex justify-center items-center">
          <FaBook className="mr-4 text-6xl text-yellow-500" />
          <p className="text-lg">
            Nuestra misión es proporcionar una herramienta accesible y efectiva para que los usuarios puedan seguir y mejorar sus entrenamientos físicos, promoviendo un estilo de vida saludable.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-4 font-bold text-3xl">Visión</h2>
        <div className="flex justify-center items-center">
          <FaBullseye className="mr-4 text-6xl text-red-500" />
          <p className="text-lg">
            Nuestra visión es convertirnos en la aplicación líder en el seguimiento de entrenamientos físicos, reconocida por su facilidad de uso y eficacia en la mejora del rendimiento deportivo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default V003;
