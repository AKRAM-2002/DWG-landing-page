import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[60px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] text-l font-bold'>Bridging Businesses to Technological Excellence</p>
        <h1 className='md:text-7xl sm:text-4xl text-2xl font-bold '>Empower Your Business with AI Innovation.</h1>
        <div className='flex flex-col justify-center'>
        <p className='text-xl mt-2  text-gray-500'>Revolutionize Your Business with AI Intelligence</p>
        <Typed  
        className='text-[#00df9a] text-xl mt-2'
        strings={[
            'AI-Powered Marketing Solutions',
            'Custom AI Development',
            'AI-Driven Automation',
            'AI Consulting',
        ]}
        typeSpeed={120}
        backSpeed={40}
        loop
        />
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black'>Explore Our AI Services</button>

      </div>
    </div>
  )
}

export default Hero
