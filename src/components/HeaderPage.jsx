import React from 'react'

const HeaderPage = () => {
    return (
        <>
            <div className="bg-gray-900 w-full py-6 px-6 xl:px-2 flex flex-wrap justify-around gap-6">

                <div className=" w-full sm:w-[550px] h-[400px] flex flex-col justify-around items-start">
                    <h2 className='text-white font-bold text-4xl'>Hello <span className='text-red-500 font-bold text-5xl'>.</span></h2>
                    <h3 className='text-4xl text-white pl-10'>I'm Hojiakbar</h3>
                    <h3 className='text-4xl font-medium text-white'>Front-end Developer</h3>
                    <div className='space-x-8'>
                        <button className='px-5 py-3 text-white bg-red-500 hover:bg-red-700 transition ease-in-out font-medium rounded'>Got a project?</button>
                        <button className='border rounded border-red-500 px-5 py-3 text-white font-medium hover:bg-red-700 transition ease-in-out'>My resume</button>
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