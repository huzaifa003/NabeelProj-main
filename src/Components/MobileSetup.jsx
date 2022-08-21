import React from 'react'
import MobileSetupImage from '../assets/MobileSetup.webp'
import { BsApple } from 'react-icons/bs'
import { FaDownload } from 'react-icons/fa'
import icon from '../assets/IptvFill.svg'

const MobileSetup = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Get IPTV on your Mobile and Tablet</h1>
            <p className='my-4'>Explore TV in all your Devices</p>
            <div className=' md:flex-none flex-wrap flex flex-row  items-center  justify-center gap-[10rem]'>
                {/* Left content */}
                <div className='flex flex-col gap-8 md:w-[300px] w-[90%]'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-4'>
                            <h1 className='text-2xl font-semibold'>IOS</h1>
                            <BsApple fontSize={30} />
                        </div>
                        <button className='px-8  rounded-lg shadow-lg flex flex-row items-center gap-2 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                        <button className='px-8  rounded-lg shadow-lg flex flex-row items-center gap-2 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                    </div>

                    <div className='flex flex-col gap-2 mt-4'>
                        <div className='flex gap-2'>
                            <h1 className='text-2xl font-semibold'>IOS</h1>
                            <BsApple fontSize={30} />
                        </div>
                        <button className='px-8  rounded-lg shadow-lg flex flex-row items-center gap-6 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                        <button className='px-8 rounded-lg shadow-lg flex flex-row items-center gap-6 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                        <button className='px-8  rounded-lg shadow-lg flex flex-row items-center gap-6 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                        <button className='px-8 rounded-lg shadow-lg flex flex-row items-center gap-6 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                    </div>

                </div>
                {/* right image */}
                <div className='flex items-center justify-center '>
                    <div className='md:w-[60%] w-auto'>
                        <img className='md:max-h-[60rem]' src={MobileSetupImage}  alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobileSetup