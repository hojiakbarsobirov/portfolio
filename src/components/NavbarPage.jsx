import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const saveMode = localStorage.getItem('darkMode')
    return saveMode ? JSON.parse(saveMode) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.parse(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className='bg-gray-900 dark:bg-gray-200 shadow-md w-full h-24 transition ease-in-out flex items-center justify-between px-6 md:px-16 relative'>
      <h1 className='font-bold text-md xl:text-2xl dark:text-black text-white'>HOJIAKBAR SOBIROV</h1>

      <button
        className='text-white text-2xl md:hidden dark:text-black'
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <ul className='hidden md:flex space-x-10 text-white font-medium dark:bg-gray-200'>
        <li className='cursor-pointer hover:text-gray-400 dark:text-black'>Home</li>
        <li className='cursor-pointer hover:text-gray-400 dark:text-black'>About</li>
        <li className='cursor-pointer hover:text-gray-400 dark:text-black'>Projects</li>
        <li className='cursor-pointer hover:text-gray-400 dark:text-black'>Contacts</li>

        <div className='w-10 cursor-pointer'>
          {darkMode ? (
            <h1 onClick={() => setDarkMode(!darkMode)}>
              <Link>
                <img className='w-6' src="./sun.png" alt="" />
              </Link>
            </h1>
          ) : (
            <h1 onClick={() => setDarkMode(!darkMode)}>
              <Link>
                <img className='w-5' src="./moon.png" alt="" />
              </Link>
            </h1>
          )}
        </div>

      </ul>

      {isOpen && (
        <ul className='absolute top-24 left-0 w-full bg-gray-900 dark:bg-gray-200 shadow-lg flex flex-col items-center space-y-6 py-6 text-white font-medium md:hidden'>
          <li className='cursor-pointer hover:text-gray-400 dark:text-black'>Home</li>
          <li className='cursor-pointer hover:text-gray-400 dark:text-black'>About</li>
          <li className='cursor-pointer hover:text-gray-400 dark:text-black'>Projects</li>
          <li className='cursor-pointer hover:text-gray-400 dark:text-black'>Contacts</li>

          <div className='w-10 cursor-pointer'>
            {darkMode ? (
              <h1 onClick={() => setDarkMode(!darkMode)}>
                <Link>
                  <img className='w-6' src="./sun.png" alt="" />
                </Link>
              </h1>
            ) : (
              <h1 onClick={() => setDarkMode(!darkMode)}>
                <Link>
                  <img className='w-5' src="./moon.png" alt="" />
                </Link>
              </h1>
            )}
          </div>

        </ul>
      )}
    </div>
  );
  {setDarkMode && <darkMode setDarkMode={setDarkMode}/>}
};

export default NavbarPage;
