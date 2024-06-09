import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-black'>
      <div className='mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#3498db] font-bold'>
          Top quality YouTube videos and free courses from across the web 
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          MasteryOnline
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Find study resources in
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Coding', 'Design', 'Language', 'Math', 'Science']}
            typeSpeed={170}
            backSpeed={170}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Explore top-quality YouTube videos and free courses from across the web, all in one convenient platform.</p>
        <Link to="/SignUpPage">
          <button className='bg-[#3498db] w-[200px] hover:bg-blue-700 rounded-md font-medium my-6 mx-auto py-3 text-white'>SIGN UP</button>
        </Link>
      </div>
    </div>
  );
};





export default Hero;
