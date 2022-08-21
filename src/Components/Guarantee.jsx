import React from 'react'
import guranteeLogo from '../assets/guranteeLogo.svg'
import GuranteeLogoDark from '../assets/GuranteeLogoDark.svg'

const Guarantee = ({ darkMode }) => {
    return (
        <div className='dark:bg-blue-darkmd flex-wrap p-10 bg-white w-[70vw] rounded-md shadow-md flex items-center justify-between md:gap-0 gap-8 guranteeCard'>
            <div className=''>
                {
                    darkMode ? (<img src={GuranteeLogoDark} />) :
                        (<img src={guranteeLogo} />)

                }
            </div>
            <div className='flex gap-6 flex-col items-start justify-center md:w-[80%]' >
                <h1 className='text-black dark:text-white font-bold text-4xl'>30 Day Money Back Gurantee</h1>
                <p className=' text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore placeat minima repudiandae impedit provident sit repellendus expedita, laboriosam qui autem odio nostrum doloribus, fugiat nihil possimus! Sequi blanditiis incidunt inventore.
                </p>
            </div>


        </div >
    )
}

export default Guarantee