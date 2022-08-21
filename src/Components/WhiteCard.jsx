import React from 'react'

const WhiteCard = ({ image, heading, subHeading }) => {
    return (
        <div className='w-[300px] flex flex-col items-start justify-center whiteCard'>
            {/* Add Custom images here via props */}
            <img src={image} className='lg:max-w-[200px] service-img' alt="" />
            <h1 className='dark:text-white font-bold text-blue-lightmd font-lg'>{heading}</h1>
            <p className='dark:text-white  lg:text-xl md:text-lg w-[200px] text-blue-lightmd font-lg  service_text '>{subHeading}</p>
        </div>
    )
}

export default WhiteCard