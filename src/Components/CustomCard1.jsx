import React from 'react'

import { AiOutlineArrowRight } from 'react-icons/ai'
const CustomCard1 = ({ mainHeading, subHeading, subPara, buttonHeading, image,icon }) => {
    return (
        <div className='flex flex-row items-start w-[90vw]  lg:w-[940px] justify-center gap-4 bg-white  dark:bg-blue-darkmd py-10 px-6 flex-wrap rounded-md shadow-sm'>
            <div className='order-2 w-full md:max-w-[300px]  flex flex-col items-start justify-start gap-4'>
                <h1 className='text-blue-700  text-5xl font-semibold customCardMainHead'>{mainHeading}</h1>
                <h1 className='dark:text-white text-blue-lightmdbg text-3xl font-bold'>{subHeading}</h1>
                <p className=' text-justify w-full   dark:text-white text-blue-lightmdbg font-lg font-normal  cardPara'>
                    {subPara}
                </p>
                <div className='  cardButton'>
                <button type='button' className='flex gap-2 items-center justify-center p-4 my-4 rounded-sm shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500 '>
                 <span>{icon}</span> 
                    <h1 className='font-bold text-sm text-white  customCardButtonText'>{buttonHeading}</h1>
                    <AiOutlineArrowRight fontSize={20} color={'white'} />
                </button>
                </div>
               
            </div>
            <div className='order-1 flex items-center justify-center p-4 w-[500px]' >
                <img src={image} alt="picture" />
            </div>
        </div>
    )
}

export default CustomCard1