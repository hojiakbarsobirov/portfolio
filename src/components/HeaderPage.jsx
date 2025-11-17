import React from 'react'
import {Link} from 'react-router-dom'

const HeaderPage = () => {
    return (
        <>
            <div className="bg-white dark:bg-gray-900 w-full py-6 px-6 xl:px-2 flex flex-wrap justify-around gap-6 transition-colors duration-300">

                <div className="w-full sm:w-[550px] h-[400px] flex flex-col justify-around items-start">
                    <h2 className='text-gray-900 dark:text-white font-bold text-4xl'>
                        Hello<span className='text-blue-600 dark:text-blue-500 font-bold text-5xl'>.</span>
                    </h2>
                    <h3 className='text-4xl text-gray-900 dark:text-white'>I'm Hojiakbar</h3>
                    <h3 className='text-4xl font-medium text-gray-700 dark:text-gray-300'>Front-end Developer</h3>
                    
                    <div className='space-x-8'>
                        <button className='px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-medium rounded-lg shadow-lg hover:shadow-xl'>
                            Got a project?
                        </button>
                        <button className='border-2 rounded-lg border-blue-600 dark:border-blue-500 px-5 py-3 text-blue-600 dark:text-blue-500 font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl'>
                            <Link target='_blank' to={'https://docs.google.com/document/d/1u7rGiRmLRNe6b34kODK-dLLr0U-wGjPykQF3qKfD6zU/edit?usp=sharing'}>
                                My Resume
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="w-full sm:w-[550px] h-[400px] flex flex-col justify-center items-center">
                    <img className='h-full object-contain' src="./my-image.png" alt="Hojiakbar" />
                </div>

            </div>
        </>
    )
}

export default HeaderPage