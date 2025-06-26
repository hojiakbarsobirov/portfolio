import React from 'react'

const SkillsMarquee = () => {
  return (
    <div className='bg-gray-700 dark:bg-white w-full h-24 flex justify-center items-center'>
      <marquee className="w-[92%] h-auro py-8 flex flex-wrap justify-start text-white items-center">
        <div className='w-full h-full flex justify-around space-x-20 items-start font-medium text-gray-500 dark:text-gray-300 text-3xl'>
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>Bootstrap</h3>
          <h3>Tailwind</h3>
          <h3>JavaScript</h3>
          <h3>React Js</h3>
        </div>
      </marquee>
    </div>
  )
}

export default SkillsMarquee