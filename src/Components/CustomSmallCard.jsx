import React from 'react'
import greenStar from '../assets/greenStar.svg'

const CustomSmallCard = ({ heading, subHeading, name, time }) => {
    return (
        <div className='flex gap-8 flex-col items-center justify-center shadow-md rounded-lg px-6 py-4 dark:bg-blue-darkmd bg-white w-[80vw] lg:w-[940px] h-[270px] sliderCard'>
            <div className='w-full flex-wrap flex justify-between items-center'>
                <div className='flex items-center justify-center gap-2'>
                    <img className='w-5' src={greenStar} alt="" />
                    <img className='w-5' src={greenStar} alt="" />
                    <img className='w-5' src={greenStar} alt="" />
                    <img className='w-5' src={greenStar} alt="" />
                    <img className='w-5' src={greenStar} alt="" />
                </div>
                <div >
                    <p className='text-gray-50'>{time}</p>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center w-full '>
                <h1 className='dark:text-white text-blue-darkmd font-semibold text-xl'>{heading}</h1>
                <h2 className='dark:text-white text-blue-darkmd  font-normal text-sm'>{subHeading}</h2>
            </div>
            <div className='flex flex-col items-start justify-center w-full'>
                <p className='dark:text-white text-blue-darkmd  font-normal text-sm'>{name}</p>
            </div>
        </div>
    )
}

export default CustomSmallCard