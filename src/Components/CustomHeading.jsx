import React from 'react'

const CustomHeading = ({ Heading, subHeading }) => {
    return (
        <div className='flex flex-col items-center justify-center  '>
            <div className='md:w-[180px] w-full  flex items-center justify-center rounded-md shadow-blue-500 shadow-sm dark:shadow-none py-2 px-4 bg-blue-500 dark:bg-[#333E5C]'>
                <h1 className='text-white font-bold text-3xl p-0'>{Heading}</h1>
            </div>
            <div>
                <h3 className='dark:text-white text-blue-darkmd text-lg font-bold'>{subHeading}</h3>
            </div>
        </div>
    )
}

export default CustomHeading