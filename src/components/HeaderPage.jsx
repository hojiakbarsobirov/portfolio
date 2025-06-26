import React from 'react'
import {Link} from 'react-router-dom'

const HeaderPage = () => {
    return (
        <>
            <div className="bg-gray-900 transition ease-in-out dark:bg-gray-200 w-full py-6 px-6 xl:px-2 flex flex-wrap justify-around gap-6">

                <div className=" w-full sm:w-[550px] h-[400px] flex flex-col justify-around items-start">
                    <h2 className='text-white font-bold text-4xl dark:text-black'>Hello <span className='text-red-500 font-bold text-5xl'>.</span></h2>
                    <h3 className='text-4xl text-white dark:text-black'>I'm Hojiakbar</h3>
                    <h3 className='text-4xl font-medium text-white dark:text-black'>Front-end Developer</h3>
                    <div className='space-x-8'>
                        <button className='px-5 py-3 text-white dark:text-black dark:hover:text-white bg-red-500 hover:bg-red-700 transition ease-in-out font-medium rounded'>Got a project?</button>
                        <button className='border rounded dark:text-black dark:hover:text-white border-red-500 px-5 py-3 text-white font-medium hover:bg-red-700 transition ease-in-out'><Link target='_blank' to={'https://docs.google.com/document/d/1u7rGiRmLRNe6b34kODK-dLLr0U-wGjPykQF3qKfD6zU/edit?usp=sharing'}>My Resume</Link></button>
                    </div>
                </div>

                <div className=" w-full sm:w-[550px] h-[400px] flex flex-col justify-center items-center">
                    <img className='h-full' src="./my-image.png" alt="" />
                </div>

            </div>
        </>

    )
}

export default HeaderPage