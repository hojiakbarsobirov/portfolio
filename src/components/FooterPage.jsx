import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const FooterPage = () => {

    return (
        <div className='bg-gray-800 dark:bg-gray-200 border-t-2 border-gray-600 dark:border-gray-300 transition ease-in-out w-full h-[35vh] flex flex-col justify-center items-center space-y-5 px-6 '>
            <h2 className='font-bold text-2xl text-white dark:text-black'>HOJIAKBAR SOBIROV</h2>
            <p className='font-medium text-gray-300 text-center dark:text-black'>Designed with love, all right reserved for Hojiakbar Sobirov Omega.</p>
            <div className='flex items-center space-x-6'>
                    <FontAwesomeIcon className='text-2xl text-white dark:text-black' icon={faEnvelope} />
                <Link to={'https://github.com/hojiakbarsobirov'} target='_blank'>
                    <FontAwesomeIcon className='text-2xl text-white dark:text-black' icon={faGithub} />
                </Link>
                <Link to={'https://www.linkedin.com/'} target='_blank'>
                    <FontAwesomeIcon className='text-2xl text-white dark:text-black' icon={faLinkedin} />
                </Link>
            </div>
        </div>
    )
}

export default FooterPage