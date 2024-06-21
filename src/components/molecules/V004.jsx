import React, { useState, useContext, useRef, useEffect } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Context from '../../contexts/Context.jsx';
import '../../assets/css/V004.css';

function V004() {
  const { selectedService, saveServiceData } = useContext(Context);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Cómo puedo registrar mis entrenamientos?',
      answer: 'Para registrar tus entrenamientos, simplemente ve a la sección de registro en la app y completa los campos requeridos para cada ejercicio.'
    },
    {
      question: '¿Qué es la sobrecarga progresiva?',
      answer: 'La sobrecarga progresiva es una técnica de entrenamiento que implica aumentar gradualmente la carga de trabajo para estimular el crecimiento muscular y la mejora del rendimiento físico.'
    },
    {
      question: '¿Cómo puedo visualizar mi progreso?',
      answer: 'En la sección de progreso de la app, puedes ver gráficos detallados que muestran tus avances en fuerza, resistencia y otros parámetros importantes.'
    },
    {
      question: '¿Puedo personalizar mis planes de entrenamiento?',
      answer: 'Sí, puedes personalizar tus planes de entrenamiento según tus objetivos individuales en la sección de planes personalizados de la app.'
    },
    {
      question: '¿La app es compatible con dispositivos wearables?',
      answer: 'Actualmente, nuestra app no es compatible con dispositivos wearables, pero estamos trabajando en esta funcionalidad para futuras actualizaciones.'
    },
    {
      question: '¿Cómo puedo contactar al soporte técnico?',
      answer: 'Puedes contactar al soporte técnico a través de la sección de ayuda en la app, donde encontrarás opciones para chat en vivo, correo electrónico y preguntas frecuentes.'
    },
    {
      question: '¿Es necesario tener una cuenta para usar la app?',
      answer: 'Sí, necesitas crear una cuenta para poder acceder a todas las funcionalidades de la app y guardar tus datos de entrenamiento.'
    },
    {
      question: '¿Hay algún costo asociado con el uso de la app?',
      answer: 'La app ofrece una versión gratuita con funciones básicas y una suscripción premium que desbloquea funciones avanzadas.'
    },
    {
      question: '¿Cómo se garantiza la precisión de los datos de entrenamiento?',
      answer: 'Nuestra app utiliza algoritmos avanzados y validación manual para asegurar que los datos registrados sean precisos y fiables.'
    },
    {
      question: '¿Puedo sincronizar la app con otras aplicaciones de fitness?',
      answer: 'En la actualidad, la app no permite la sincronización con otras aplicaciones de fitness, pero esta funcionalidad está en nuestra hoja de ruta para futuras actualizaciones.'
    }
  ];

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.style.maxHeight = expandedIndex === i ? `${ref.scrollHeight}px` : '0px';
      }
    });
  }, [expandedIndex]);

  return (
    <div className="flex flex-col flex-1 justify-center items-center drop-shadow-2xl p-8 rounded-3xl h-auto text-center text-white overflow-y-auto" style={{ backgroundColor: selectedService.color }}>
      <h1 className="mb-4 font-bold text-4xl">{selectedService.title}</h1>
      <p className="mb-8 text-lg">{selectedService.desc}</p>

      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button onClick={() => toggleAccordion(index)} className="flex justify-between items-center bg-white bg-opacity-20 p-4 rounded-lg w-full text-black text-left">
              <div className="flex items-center">
                <FaQuestionCircle className="mr-2 text-xl text-yellow-500" />
                <span className="font-bold">{faq.question}</span>
              </div>
              <div>
                {expandedIndex === index ? <FaChevronUp className="text-xl" /> : <FaChevronDown className="text-xl" />}
              </div>
            </button>
            <div ref={el => contentRefs.current[index] = el} className={`accordion-content ${expandedIndex === index ? 'expanded' : ''}`}>
              <div className="bg-white bg-opacity-10 mt-2 p-4 rounded-lg">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default V004;
