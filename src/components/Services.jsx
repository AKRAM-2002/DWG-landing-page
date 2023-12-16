import React from 'react';
import { FaRocket, FaCogs, FaLightbulb, FaUsers } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      title: 'AI-Powered Marketing Solutions',
      description: 'Elevate your marketing strategies with AI-driven solutions.',
      icon: <FaRocket size={40} />,
    },
    {
      title: 'Custom AI Development',
      description: 'Tailored AI solutions to meet your specific business needs.',
      icon: <FaCogs size={40} />,
    },
    {
      title: 'AI-Driven Automation',
      description: 'Streamline processes and operations with AI automation.',
      icon: <FaLightbulb size={40} />,
    },
    {
      title: 'AI Consulting',
      description: 'Expert guidance to implement AI strategies in your business.',
      icon: <FaUsers size={40} />,
    },
  ];

  return (
    <div className='py-16 text-white max-w-[1240px] mx-auto'>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold mb-8 text-center'>
        Our AI Services
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 m-5'>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className='bg-[#1a1a1a] p-6 rounded-md text-center transition-transform transform hover:scale-105 flex flex-col items-center'
          >
            {service.icon}
            <h2 className='text-xl font-bold mb-4'>{service.title}</h2>
            <p className='text-gray-500'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
