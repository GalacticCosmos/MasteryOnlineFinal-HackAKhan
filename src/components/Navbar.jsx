import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='text-3xl font-bold text-[#3498db]'>MasteryOnline</h1>
      <ul className='flex space-x-20'>
        <Link to="/LoginPage">
          <li className="hover:[#3498db]">Log In</li>
        </Link>
        <Link to="/SignUpPage">
          <li>Get Started</li>
        </Link>
      </ul>
    </div>

  );
};

export default Navbar;
