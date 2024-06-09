import React from 'react';

const Footer = () => {
  return (
    <div className='w-full py-8 bg-gray-900 text-white'>
      <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6'>
          <button
            onClick={() => window.location.href = 'mailto:ary10kum@gmail.com'}
            className='bg-[#3498db] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'
          >
            Aryan Kumar
          </button>
          <button
            onClick={() => window.location.href = 'mailto:maxshi239@gmail.com'}
            className='bg-[#3498db] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'
          >
            Max Shi
          </button>
          <button
            onClick={() => window.location.href = 'mailto:amol.aarav@gmail.com'}
            className='bg-[#3498db] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'
          >
            Aarav Tuli
          </button>
        </div>
        <p className='mt-4 md:mt-0 text-gray-400 text-lg font-bold'>
          June 8th, 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
