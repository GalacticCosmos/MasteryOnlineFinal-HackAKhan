import React from 'react';

const Contact = () => {
  return (
    <div className='w-full py-16 bg-[#3498db] text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='text-4xl text-white font-bold py-2'>
            Do you have any questions?
          </h1>
          <p className='text-xl'>
            Have questions or feedback about MasteryOnline? Want to explore partnership opportunities or share your thoughts on our platform? We'd love to hear from you! Drop us an email with your inquiries, suggestions, or simply to say hello.
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <button className='bg-white text-[#3498db] rounded font-medium w-[600px] ml-4 my-15 px-6 py-3' onClick={() => window.open('mailto:MasteryOnlineHelp@gmail.com', '_blank')}>
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
