import React, { useState, useEffect } from 'react'
import Bitcoin from '../assets/Bitcoin.svg'
import BitcoinLight from '../assets/BitcoinLight.svg'
import WhiteCard from '../Components/WhiteCard'
import { Data } from '../Components/ResellerData'
import { questions } from '../Components/FaqData'
import { Resellersquestions } from '../Components/ResellersFAQs'

import PriceTag from '../Components/PriceTag'
import TimeTag from '../Components/TimeTag'
import Carousel from 'react-material-ui-carousel'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Reseller = ({ darkMode, setDarkMode }) => {



    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#3f51b5',
            },
            secondary: {
                main: '#f50057',
            },
            background: {
                paper: '#040e2e',
            },
            text: {
                primary: '#ffffff',
            },

        },

    });

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const [data, setData] = useState(null)
    const [FAQ, setFAQ] = useState(null);
    useEffect(() => {
        setFAQ(Resellersquestions);
        setData(Data)
    }, [])
    return (
        <div className='my-16 '>
            <div className=' p-6 flex flex-wrap  items-center justify-center  mx-auto w-[85vw] lg:max-w-[1400px]'>
                <div className='max-w-[500px]  flex-col gap-8 flex lg:items-start md:items-center items-start justify-around flex-wrap'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-start text-white font-semibold md:text-6xl text-5xl '>The Worlds <span className='text-orange-600 md:text-6xl text-5xl font-semibold ' >Best </span> IPTV Reseller Program</h1>
                    </div>
                    <div>
                        <p className='text-start text-white font-normal text-lg'>Earn Easy Money by Selling A Super-Fast, Super-Secure, And The Most Reliable IPTV Service.</p>
                    </div>

                    <div className='transition-all duration-300 ease-in-out flex items-center justify-center flex-col bg-green-400 p-4 rounded-md shadow-sm w-[250px] h-[50px]'>
                        <button type='button' className=''>
                            <h1 className='text-white text-lg relative top-2 font-bold'>BECOME A RESELLER</h1>
                            <span style={{fontSize:"10px",color:"grey"}}>instant access</span>
                        </button>

                    </div>
                </div>
                <div  className='my-6 md:block hidden '>
                    {
                        darkMode ? (<img src={Bitcoin} alt="" />) : (<img src={BitcoinLight} alt="" />)
                    }

                </div>
            </div>
            <div className='transition-all duration-300 ease-in-out service-container dark:bg-blue-darkmd bg-white w-[85vw]  lg:max-w-[1400px] flex flex-col items-center justify-center  py-8 mx-auto shadow-sm rounded-md '>

                <div className='flex flex-col items-center justify-center gap-3'>
                    <h1 className='text-center  dark:text-white text-blue-darkmd font-bold text-3xl'>Why should You Select Out IPTV Reseller Prgoram?</h1>
                    <h2 className='text-start md:text-center p-4 dark:text-white text-blue-lightmd font-normal text-lg'>Cccambox is a well-known brand in the IPTV industry. We have been delivering super-fast, highly secure, and the most reliable IPTV service with extraordinary features since 2010 to more than 200 000 users. Here’s what makes the Cccambox TV reseller program an ideal choice.</h2>
                </div>
                <div className='service_div  lg:grid-cols-3 grid md:grid-cols-2 sm:grid-col-1 p-4 gap-8   justify-center justify-items-center content-center items-center   mt-8 '>
                    {

                        data && data.map((item, index) => {
                            return <WhiteCard key={index} {...item} />
                        })
                    }
                </div>
            </div>
            <div className='transition-all duration-300 ease-in-out md:w-[85vw] w-[90vw] lg:max-w-[1400px] mx-auto my-20 py-8 px-4 dark:bg-blue-darkmd bg-white flex items-center flex-col justify-between gap-8 shadow-sm rounded-md price_main_div'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='dark:text-white text-blue-lightmd font-bold text-3xl'>Pay-As-You-Go pricing</h1>
                    <p className='dark:text-white text-blue-lightmd font-light md:px-32 px-4 text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim praesentium velit nam dicta ullam. Vitae dignissimos delectus illum sint laboriosam totam! Delectus, exercitationem assumenda voluptas culpa ut aperiam nobis?</p>
                </div>
                {/* desktop view manage  */}
 {/* #00b40efc green
 #ffd000fc orange */}

 {/* desktop view */}
                <div className='transition-all duration-300 ease-in-out sm:w-[100%]  gap-6 md:my-8 grid lg:grid-cols-4 md:grid-cols-2 price_div'>
                    <div className=' lg:block text-center  md:flex justify-center items-center md:flex-col '>
                        <PriceTag price='100' type="Top-Up Amount" unit="£" color="#00b40efc "  />
                        <ArrowDropDownIcon className='transition-none'></ArrowDropDownIcon>
                        <PriceTag price='20' type="Credits" unit=" " color=" #ffd000fc" />
                    </div>
                    <div className=' lg:block text-center  md:flex justify-center items-center md:flex-col '>
                        <PriceTag price='300' type="Top-Up Amount" unit="£" color="#00b40efc "  />
                        <ArrowDropDownIcon className='transition-none' ></ArrowDropDownIcon>
                        <PriceTag price='100' type="Credits" unit=" " color=" #ffd000fc" />
                    </div>
                    <div className=' lg:block text-center  md:flex justify-center items-center md:flex-col '>
                        <PriceTag price='500' type="Top-Up Amount" unit="£" color="#00b40efc "  />
                        <ArrowDropDownIcon className='transition-none'></ArrowDropDownIcon>
                        <PriceTag price='300' type="Credits" unit=" " color=" #ffd000fc" />
                    </div>
                    <div className=' lg:block text-center  md:flex justify-center items-center md:flex-col '>
                        <PriceTag price='1000' type="Top-Up Amount" unit="£" color="#00b40efc "  />
                        <ArrowDropDownIcon className='transition-none' ></ArrowDropDownIcon>
                        <PriceTag price='700' type="Credits" unit=" " color=" #ffd000fc" />
                    </div>

                </div>

{/* Mobile view  */}

<div className='sm:w-[100%]  gap-6 md:my-8 grid lg:hidden md:hidden price_div_mob transition-all duration-300 ease-in-out'>
                    <div className='  text-center  flex justify-center items-center md:flex-row '>
                        <PriceTag price='100' type="Top-Up Amount" unit="£" color="#00b40efc "  />
                        <KeyboardArrowRightIcon className='mt-[-6rem] ' ></KeyboardArrowRightIcon>
                        <PriceTag price='20' type="Credits" unit=" " color=" #ffd000fc" />
                    </div>
                 
                    
                    <div className='  text-center  flex justify-center items-center md:flex-row '>
                        <PriceTag price='300' type="Top-Up Amount" unit="£" color="#00b40efc "  />
                        <KeyboardArrowRightIcon className='mt-[-6rem] ' ></KeyboardArrowRightIcon>
                        <PriceTag price='100' type="Credits" unit=" " color=" #ffd000fc" />
                    </div>
                  
                   
                    <div className='  text-center  flex justify-center items-center md:flex-row '>
                        <PriceTag price='500' type="Top-Up Amount" unit="£" color="#00b40efc "  />
                        <KeyboardArrowRightIcon className='mt-[-6rem] ' ></KeyboardArrowRightIcon>
                        <PriceTag price='300' type="Credits" unit=" " color=" #ffd000fc" />
                    </div>
                  
                    <div className='  text-center flex justify-center items-center md:flex-row '>
                        <PriceTag price='1000' type="Top-Up Amount" unit="£" color="#00b40efc "  />
                        <KeyboardArrowRightIcon className='mt-[-6rem]'></KeyboardArrowRightIcon>
                        <PriceTag price='700' type="Credits" unit=" " color=" #ffd000fc" />
                    </div>
                  
                </div>







                <h1 className='dark:text-white text-blue-lightmd text-4xl font-bold  text-center'>Package Cost for Resellers</h1>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 sm:w-[100%] md:max-w-[900px]'>
                    <TimeTag month='1' credit='5' type="Month" />
                    <TimeTag month="3" credit='10' type="Month" />
                    <TimeTag month='6' credit ='15' type="Month" />
                    <TimeTag month='1' credit='20' type="Year"/>
                </div>
                <div className='transition-all duration-300 ease-in-out flex items-center sm:w-[100%] md:max-w-[500px] justify-center flex-col bg-green-400 p-4 rounded-md shadow-sm'>
                    <button type='button'>
                        <h1 className='text-white text-2xl font-normal subscribe_text'>Subscribe-to-pay as you go</h1>
                    </button>

                </div>
            </div>
            {/* FAQ */}
            <h1 className='text-white mt-12 text-5xl font-semibold mx-auto text-center'>FAQ</h1>
            <div className='my-8 w-[90vw] lg:max-w-[940px] mx-auto flex flex-col items-center justify-center gap-6'>
                {
                    FAQ && FAQ.map((faq, index) => {
                        const { id, question, answer } = faq
                        return (
                            darkMode ?
                                <ThemeProvider theme={darkTheme}>
                                    <CssBaseline />
                                    <Accordion expanded={expanded === id} onChange={handleChange(id)}>
                                        <AccordionSummary
                                              expandIcon={!darkMode?<ExpandMoreIcon />:<ExpandMoreIcon style={{color:"white"}}></ExpandMoreIcon>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography> {question}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </ThemeProvider>
                                :
                                <ThemeProvider theme={lightTheme}>
                                    <CssBaseline />
                                    <Accordion expanded={expanded === id} onChange={handleChange(id)}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography> {question}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </ThemeProvider>
                        )
                    })
                }
            </div>
            <div className='justify-center items-center flex'>
            <div className='flex items-center justify-center flex-col bg-green-400 p-4 rounded-md shadow-sm w-[250px] h-[50px]'>
                        <button type='button' className=''>
                            <h1 className='text-white text-lg relative top-2 font-bold'>BBECOME A RESELLER</h1>
                            <span style={{fontSize:"10px",color:"grey"}}>instant access</span>
                        </button>

                    </div>
          

            </div>
          
        </div >

    )
}

export default Reseller