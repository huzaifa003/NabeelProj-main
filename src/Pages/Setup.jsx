import React, { useState, useRef } from 'react'
import { TbWorld } from 'react-icons/tb'
import { FaMobile } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { TbDevices } from 'react-icons/tb'
import { MdCastConnected } from 'react-icons/md'
import WebSetup from '../Components/WebSetup'
import MobileSetup from '../Components/MobileSetup'
import TvSetup from '../Components/TvSetup'
import BoxSetup from '../Components/BoxSetup'
import CastingSetup from '../Components/CastingSetup'
import Slide from 'react-reveal/Slide';
import { ButtonBase } from '@mui/material';
import Web from '@mui/icons-material/Web'




const Setup = ({ darkMode, setDarkMode }) => {
    const [current, setCurrent] = useState('Web');
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(1);
    const notActiveBtn = '  transition-all duration-300 ease-in-out dark:hover:bg-white hover:bg-[#040e2e] hover:text-white dark:hover:text-blue-lightmd md:w-[150px] w-full md:p-6 p-4 dark:text-white text-blue-lightmd  rounded-md dark:bg-[#040e2e] bg-white shadow-sm flex flex-col items-center justify-center gap-4'
    const Activebtn = ' transition-all duration-300 ease-in-out dark:hover:bg-white dark:hover:text-blue-lightmd md:w-[150px] w-full md:p-6 p-4 rounded-md dark:text-white text-blue-lightmd dark:bg-white dark:text-blue-darkmdbg bg-[#040e2e] text-slate-100 shadow-sm flex flex-col items-center justify-center gap-4'

    //references
    const WebRef = useRef(null);
    const MobileRef = useRef(null);
    const TvRef = useRef(null);
    const BoxRef = useRef(null);
    const CastingRef = useRef(null);

const element = document.getElementById('setupDiv');

    return (
        
        <div className=' w-screen p-8 md:p-0  mx-auto flex flex-col items-center justify-center'>

            <h1 className='text-center font-semibold md:text-6xl text-5xl mt-20  text-white'>DOWNLOAD THE BEST IPTV APP</h1>
            <p className='text-center font-bold text-2xl mt-4  text-white'>Our Apps Work Flawlessly on tv, mobile and browser</p>

            
                <div className='mt-24  w-full md:w-[90%]  lg:max-w-[1100px] flex-wrap rounded-mg shadow-sm mx-auto flex items-center justify-between flex-col gap-8'>
                    <div className='w-full h-full p-2 justify-between   flex-wrap md:flex-row flex-col flex  gap-8'>

                        {/* /icon 1 */}
                        <div >
                            <ButtonBase  style={{ height: 'max'}}>
                                <div   onClick={(e) => {

                                    WebRef.current?.scrollIntoView({ behavior: 'smooth' });
                                 element.scrollIntoView({ behavior: 'smooth' })
                                    setCurrent('Web');
                                    setPrevIndex(index);
                                    setIndex(0);
                             
                                    

                                }} className={` ${current == 'Web' ? Activebtn : notActiveBtn} setupBtn  `}>


                                    <button className='iconBtn ' >
                                        <TbWorld className='lg:h-[94px] lg:w-[120px] md:h-[94px] md:w-[120px] boxIcon'  fontSize={90} />
                                        <h1 className='font-bold text-xl btntext'>Web</h1>
                                    </button>


                                </div>
                            </ButtonBase>
                        </div>
                        {/* icons 2 */}
                        <div>
                            <ButtonBase>
                                <div onClick={(e) => {
                                    MobileRef.current?.scrollIntoView({ behavior: 'smooth' });
                                    setPrevIndex(index);
                                    setCurrent('Mobile');
                                    setIndex(1);
                                    element.scrollIntoView({ behavior: 'smooth' })
                                }} className={` ${current == 'Mobile' ? Activebtn : notActiveBtn}  setupBtn`}>

                                    <button className='iconBtn'>
                                        <FaMobile className='lg:h-[94px] lg:w-[120px] md:h-[94px] md:w-[120px] boxIcon'  fontSize={90} />
                                        <h1 className='font-bold text-xl btntext'>Mobile</h1>
                                    </button>

                                </div>
                            </ButtonBase>
                        </div>
                        {/* icon 3 */}
                        <div>
                            <ButtonBase>
                                <div onClick={(e) => {
                                    setCurrent('TV')
                                    setPrevIndex(index);
                                    setIndex(2);
                                    TvRef.current?.scrollIntoView({ behavior: 'smooth' });
                                    element.scrollIntoView({ behavior: 'smooth' })

                                }} className={` ${current == 'TV' ? Activebtn : notActiveBtn} setupBtn`}>
                                    <button className='iconBtn'>
                                        <FiMonitor className='lg:h-[94px] lg:w-[120px] md:h-[94px] md:w-[120px] boxIcon'  fontSize={90} />
                                        <h1 className='font-bold text-lg btntext'>TV</h1>
                                    </button>

                                </div>

                            </ButtonBase>
                        </div>
                        {/* icon 4 */}
                        <div>
                            <ButtonBase>
                                <div onClick={(e) => {
                                    setCurrent('Box & Stick')
                                    setPrevIndex(index);
                                    setIndex(3);
                                    BoxRef.current?.scrollIntoView({ behavior: 'smooth' });
                                    element.scrollIntoView({ behavior: 'smooth' })

                                }} className={` ${current == 'Box & Stick' ? Activebtn : notActiveBtn}   setupBtn`}>
                                    <button className='iconBtn'>
                                        <TbDevices className='lg:h-[94px] lg:w-[120px] md:h-[94px] md:w-[120px] boxIcon' fontSize={60} />
                                        <h1 className='font-bold text-xl btntext_box'>Box & Stick</h1>
                                    </button>

                                </div>
                            </ButtonBase>
                        </div>

                        <div>
                            <ButtonBase>
                                <div onClick={(e) => {
                                    
                                    setCurrent('Casting');
                                    setPrevIndex(index);
                                    setIndex(4);
                                    CastingRef.current?.scrollIntoView({ behavior: 'smooth' });
                                    element.scrollIntoView({ behavior: 'smooth' })

                                }} className={` ${current == 'Casting' ? Activebtn : notActiveBtn} setupBtn`}>
                                    <button className='iconBtn'>
                                        <h1><MdCastConnected className='lg:h-[94px] lg:w-[120px] md:h-[94px] md:w-[120px] boxIcon' fontSize={90} /></h1>
                                        <h1 className='font-bold text-xl btntext'>Casting</h1>
                                    </button>

                                </div>

                            </ButtonBase>
                        </div>
                    </div>
                </div>

           
            
            
       
            <div id='setupDiv' className='mt-6 max-w-full md:w-[90%]  lg:max-w-[1100px] dark:bg-blue-darkmd bg-white dark:text-white transition-all duration-300 ease-in-out text-blue-lightmd rounded-lg shadow-lg mx-auto flex items-center justify-center p-8 bottom-setup-div'>
                {current === 'Web' && (prevIndex >= index)? <Slide duration= {700} enter = 'false' left> <div ref={WebRef}><WebSetup /></div> </Slide > : ''}
                {current === 'Web' && (prevIndex < index)? <Slide duration= {700} enter = 'false' right> <div ref={WebRef}><WebSetup /></div> </Slide > : ''}

                {current === 'Mobile'  && (prevIndex >= index) ? <Slide left duration= {700} enter = 'false'> <div ref={MobileRef}> <MobileSetup /></div> </Slide > : ''}
                {current === 'Mobile'  && (prevIndex < index) ? <Slide right duration= {700} enter = 'false'> <div ref={MobileRef}> <MobileSetup /></div> </Slide > : ''}
                
                {current === 'TV' && (prevIndex >= index) ? <Slide left duration= {700} enter = 'false'> <div ref={TvRef}><TvSetup /></div> </Slide > : ''}
                {current === 'TV' && (prevIndex < index) ? <Slide right duration= {700} enter = 'false'> <div ref={TvRef}><TvSetup /></div> </Slide > : ''} 

                {current === 'Box & Stick' && (prevIndex >= index) ?  <Slide left duration= {700} enter = 'false'> <div ref={BoxRef}><BoxSetup /></div> </Slide > : ''}
                {current === 'Box & Stick' && (prevIndex < index) ? <Slide right duration= {700} enter = 'false'> <div ref={BoxRef}><BoxSetup /></div> </Slide > : ''}

                {current === 'Casting' && (prevIndex >= index) ?  <Slide left duration= {700} enter = 'false'> <div ref={CastingRef}><CastingSetup /></div>  </Slide > : ''}
                {current === 'Casting' && (prevIndex < index) ?  <Slide right duration= {700} enter = 'false'> <div ref={CastingRef}><CastingSetup /></div>  </Slide > : ''}
            </div>
        </div >
    )
}

export default Setup