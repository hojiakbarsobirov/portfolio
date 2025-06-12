import React, { useState } from 'react';

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gray-900 w-full h-24 flex items-center justify-between px-6 md:px-16 relative'>
      <h1 className='font-bold text-2xl text-white'>HOJIAKBAR SOBIROV</h1>

      <button
        className='text-white text-2xl md:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <ul className='hidden md:flex space-x-10 text-white font-medium'>
        <li className='cursor-pointer hover:text-gray-400'>Home</li>
        <li className='cursor-pointer hover:text-gray-400'>About</li>
        <li className='cursor-pointer hover:text-gray-400'>Projects</li>
        <li className='cursor-pointer hover:text-gray-400'>Contacts</li>
      </ul>

      {isOpen && (
        <ul className='absolute top-24 left-0 w-full bg-black flex flex-col items-center space-y-6 py-6 text-white font-medium md:hidden'>
          <li className='cursor-pointer hover:text-gray-400'>Home</li>
          <li className='cursor-pointer hover:text-gray-400'>About</li>
          <li className='cursor-pointer hover:text-gray-400'>Projects</li>
          <li className='cursor-pointer hover:text-gray-400'>Contacts</li>
        </ul>
      )}
    </div>
  );
};

export default NavbarPage;
