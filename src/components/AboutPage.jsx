import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const AboutPage = ({setDarkMode}) => {
    
    return (
        <>
            <div className='bg-gray-900 dark:bg-gray-200 transition ease-in-out w-full h-auto px-6 xl:px-2 py-8 flex flex-col-reverse md:flex-row flex-wrap justify-around items-center gap-5'
            >

                <div className=' w-full sm:w-[550px] h-[400px] flex flex-col justify-center items-start'>
                    <div className='flex items-center space-x-6'>
                        {/* <img className='w-12' src="./coding.png" alt="" /> */}
                        <FontAwesomeIcon className='text-white dark:text-black text-xl' icon={faCode} />
                        <h3 className='font-mono text-3xl text-white dark:text-black'>Web Development</h3>
                    </div>

                    {/* <div className='flex items-center space-x-10'>
                    <img className='w-12' src="./coding.png" alt="" />
                    <h3 className='font-mono text-3xl text-white'>Web Development</h3>
                </div>

                <div className='flex items-center space-x-10'>
                    <img className='w-12' src="./coding.png" alt="" />
                    <h3 className='font-mono text-3xl text-white'>Web Development</h3>
                </div> */}
                </div>

                <div className=' w-full  sm:w-[550px] h-[400px] flex flex-col justify-around items-start'>
                    <h2 className='font-bold text-5xl dark:text-black text-white'>About me</h2>
                    <p className='text-gray-300 dark:text-gray-500'>I'm a frontend developer, currently developing my backend skills. I can learn new
                        frameworks and libraries and use them in my projects. I am outgoing, I can work in a
                        team  </p>

                    <div className='w-full h-32  flex justify-between items-center'>
                        <div className='space-y-4'>
                            <h3 className='font-bold text-4xl text-white dark:text-black'>120 <span className='text-red-500'>+</span></h3>
                            <p className='font-medium text-sm text-gray-300 dark:text-gray-500'>Completed <br /> Project</p>
                        </div>

                        <div className='space-y-4'>
                            <h3 className='font-bold text-4xl text-white dark:text-black'>95 <span className='text-red-500'>%</span></h3>
                            <p className='font-medium text-sm text-gray-300 dark:text-gray-500'>Client <br /> Satisfaction</p>
                        </div>

                        <div className='space-y-4'>
                            <h3 className='font-bold text-4xl text-white dark:text-black'>10 <span className='text-red-500'>+</span></h3>
                            <p className='font-medium text-sm text-gray-300 dark:text-gray-500'>Years of <br /> experience</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutPage