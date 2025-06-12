import React from 'react'
import { Link } from 'react-router-dom'

const FooterPage = () => {

    return (
        <div className='bg-gray-800 w-full h-[35vh] flex flex-col justify-center items-center space-y-5 px-6 '>
            <h2 className='font-bold text-2xl text-white'>HOJIAKBAR SOBIROV</h2>
            <p className='font-medium text-gray-300 text-center'>Designed with love, all right reserved for Hojiakbar Sobirov Omega.</p>
            <div className='flex items-center space-x-6'>
                    <img className='w-10' src="./email.png" alt="" />
                <Link to={'https://github.com/hojiakbarsobirov'} target='_blank'>
                    <img className='w-10' src="./github.png" alt="" />
                </Link>
                <Link to={'https://www.linkedin.com/'} target='_blank'>
                    <img className='w-10' src="./linkedin.png" alt="" />
                </Link>
            </div>
        </div>
    )
}

export default FooterPage