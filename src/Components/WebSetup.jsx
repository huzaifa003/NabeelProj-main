import React from 'react'
import Browsers from '../assets/Browsers.webp'
import WebSetupImage from '../assets/WebSetup.webp'

const WebSetup = () => {
    return (
        <div className='flex flex-row flex-wrap items-center justify-around'>
            <div className='flex flex-col' >
                <div>
                    <h1 className='text-2xl font-semibold'>Get IPTV on your Browser</h1>
                    <p className='my-4'>Explore TV in all your Devices</p>
                    {/* Button here */}
                    <div className='p-4 rounded-lg shadow-md mx-auto bg-green-500  flex items-center justify-center flex-col '>
                        <div className='flex items-center justify-center flex-col'>
                            <button type='button' className='w-'>
                                <h1 className='text-white text-1xl font-semibold'>Get My Instant Access Now</h1>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='my-12 '>
                    <h1 className='text-2xl font-semibold'>Our Web Apps support these browsers</h1>
                    <img className='w-60 h-16 my-4' src={Browsers} alt="" />
                    <p>*Minimum 8MBits/s internet Connectino</p>

                </div>

            </div>
            <div className='md:w-[40%] w-auto'>
                <img src={WebSetupImage} alt="" />
            </div>
        </div>
    )
}

export default WebSetup