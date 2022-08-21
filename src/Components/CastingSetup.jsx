import React from 'react'
import ChromeCastImage from '../assets/ChromeCast.svg'
import AppleAirPlay from '../assets/AppleAirPlay.svg'
import MiraCast from '../assets/Miracast.png'
const CastingSetup = () => {
    return (
        <div className='flex items-start justify-between   flex-col max-w-full '>
            <h1 className='text-2xl font-semibold'>Cast Your IPTV with Any  TV Screen</h1>
            <p className='my-4'>Explore TV in all your Devices</p>
            <div className='flex items-between justify-start md:gap-[15rem] lg:gap-[22rem] my-6 cast-div'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h1 className='my-4 text-2xl font-semibold cast-google-text'>Google ChromCast</h1>
                    <img className='cast-google-icon' src={ChromeCastImage} alt="" />

                </div>
                <div className='flex flex-col items-center justify-center gap-2 '>
                    <h1 className='my-4 lg:text-2xl font-semibold cast-apple-text'>Apple AirPlay</h1>
                    <img className='cast-apple-icon' src={AppleAirPlay} alt="" />

                </div>

            </div>
            <div className='my-12 mt-24'>
                <h1 className='lg:text-2xl font-semibold my-4 Mcast-text'>MiraCast</h1>
                <img className='MCast-icon lg:max-w-[250px] lg:max-h-[100px]'  src={MiraCast} alt="" />
            </div>

        </div>
    )
}

export default CastingSetup