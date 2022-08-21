import React, { useState, useEffect } from 'react'
import MainPic from '../assets/main-pic.webp'
import player from '../assets/player.svg'
import multiUserIcon from '../assets/multiUserIcon.svg'
import hdQulityIcon from '../assets/hdQualityIcon.svg'
import Thunder from '../assets/thunderIcon.svg'
import CustomHeading from '../Components/CustomHeading'
import ProgressBar from '../Components/ProgressBar'
import CustomCard1 from '../Components/CustomCard1'
import CustomCard2 from '../Components/CustomCard2'
import mainimage4 from '../assets/main-pic4.webp'
import mainimage3 from '../assets/main-pic3.webp'
import mainimage2 from '../assets/main-pic2.webp'
import Yellostar from '../assets/yellowStar.svg'
import CustomSmallCard from '../Components/CustomSmallCard'
import greenStar from '../assets/greenStar.svg'
import sponsorLogo from '../assets/sponsorLogo.svg'
import Guarantee from '../Components/Guarantee'
import { questions } from '../Components/FaqData'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Carousel from 'react-material-ui-carousel'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { display, style } from '@mui/system'
import ListAltIcon from '@mui/icons-material/ListAlt';
import CustomCard3 from '../Components/CustomCard3'


const HomeBody = ({ darkMode, setDarkMode }) => {


    const [expanded, setExpanded] = React.useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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



    const [FAQ, setFAQ] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0)



    const CustomHeadingRawData = [

        {
            heading: '200k+',
            subHeading: 'Active Users'
        },
        {
            heading: '16+',
            subHeading: 'Total Streams'
        },
        {
            heading: '11 Years',
            subHeading: 'Experience'
        },
        {
            heading: '94',
            subHeading: 'Streaming servers'
        },
        {
            heading: '9',
            subHeading: 'Servers Locations'

        },
        {
            heading: '99.98%',
            subHeading: 'UpTime'

        },

        {
            heading: '4.7',
            subHeading: 'Trusplilot Score'

        },
        {
            heading: '2 Hours',
            subHeading: 'Average Support'

        }

    ]
    const progrssBarData = [
        {
            mainHeading: 'IPTV Panel',
            perHeading: '100.00%',
            instruction: 'Up'
        },
        {
            mainHeading: 'Load Balancer',
            perHeading: '99.99%',
            instruction: 'Up'
        }
        , {
            mainHeading: 'Members Area',
            perHeading: '99.95%',
            instruction: 'Up'
        }
    ]
    const customSmallCaardData = [
        { heading: "Good Quality", time: '3 Days Ago', subHeading: 'Its amazing working in react', name: 'umair asad' },
        { heading: "The Best Of The Best", time: '1 months Ago', subHeading: 'Hello to all using console', name: 'Arsalan Bashit' },
        { heading: "Very Nice", time: '1 Day Ago', subHeading: 'Hey let there be carnage', name: 'Ahmad Zafar' }

    ]

   
    useEffect(() => {
        setFAQ(questions);
        console.log(currentSlide);
    }, [currentSlide])


    return (
        <>
            {/* Hero headings */}
            <div className='transition-all duration-300 ease-in-out mt-20 p-2' >
            <h1 className='text-center font-semibold md:text-6xl text-5xl text-white'>DISCOVER THE #1 IPTV PROVIDER</h1>
                {/* <h1 className='text-white  font-extrabold md:text-6xl text-5xl md:text-center main-text '>DISCOVER THE #1 IPTV PROVIDER</h1> */}
                <h2 className='md:text-center  my-8 text-white  text-lg md:w-3/5 lg:w-[900px] mx-auto'>Today, we are revolutionizing the way you access IPTV. With +8000 channels and thousands of VOD, you'll be watching IPTV in a radically new, intelligent, and intuitive way</h2>
            </div >
            {/* Button */}
            <div className='transition-all duration-300 ease-in-out flex items-center justify-center flex-col' >
                <button type='button' className=' py-2 px-16 rounded-md shadow-sm  bg-green-200 text-white'>JOIN US NOW</button>
                <p className='text-white mt-2'>7 Days Money Back Guarantee</p>
            </div >
            {/* Main image */}
            <div className='transition-all duration-300 ease-in-out md:flex hidden items-center justify-center my-12' >
                <img className='w-[900px] h-[450px]' src={MainPic} alt="" />
            </div >
            {/* ICONS section */}
            <div className='transition-all duration-300 ease-in-out my-7 h-auto md:my-8 dark:bg-blue-darkmd bg-white w-[90vw] lg:max-w-[940px] mx-auto grid md:grid-cols-4 shadow-md rounded-md p-8 gap-10' >
                <div className='flex  gap-2 items-center justify-center'>
                    <img src={player} alt="" />
                    <h1 className='w-32 font-bold md:text-xl dark:text-white text-blue-darkmd'>8000+ TV Channels</h1>
                </div>
                <div className='transition-all duration-300 ease-in-out flex gap-2 items-center justify-center '>
                    <img src={multiUserIcon} alt="" />
                    <h1 className='w-32 font-bold md:text-xl dark:text-white text-blue-darkmd'>Multi User Access</h1>
                </div>
                <div className='transition-all duration-300 ease-in-out flex gap-2 items-center justify-center '>
                    <img src={hdQulityIcon} alt="" />
                    <h1 className='w-32 font-bold md:text-xl dark:text-white text-blue-darkmd'>FHD & HD Quality</h1>
                </div>
                <div className='flex gap-2 items-center justify-center '>
                    <img src={Thunder} alt="" />
                    <h1 className='w-32 font-bold md:text-xl dark:text-white text-blue-darkmd'>Anti Buffer 3.0</h1>
                </div>

            </div >
            {/* Flex section */}

            <div className='my-16 h-auto md:my-28 dark:bg-blue-darkmd bg-white w-[90vw] lg:max-w-[940px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  shadow-md  rounded-md py-6 px-4 gap-10'>

                {
                    CustomHeadingRawData.map((item) => {

                        return (<CustomHeading Heading={item.heading} subHeading={item.subHeading} />)
                    })
                }
            </div>
            <div className=' transition-all duration-300 ease-in-out gap-8 flex flex-col mx-auto  items-start justify-center flex-wrap  w-[90vw] lg:w-[940px]'>
                <div className='flex'>
                    <h1 className='text-white font-bold text-4xl'>Uptime</h1>
                    <h2 className='text-gray-300 font-semibold text-2xl mt-2 ml-4 light-text'>Last 90 Days</h2>
                </div>



                <div className='w-full p-6 flex flex-col gap-8 dark:bg-blue-darkmd bg-white rounded-md shadow-sm'>
                    {
                        progrssBarData.map((item, index) => {
                            console.log(index)
                            return <div className={`${index != 2 ? 'border-gray-50 border-b-2' : ''}`}><ProgressBar key={index} mainHeading={item.mainHeading} perHeading={item.perHeading} instruction={item.instruction} /></div>
                        })
                    }
                </div>
            </div>
            {/* Three cards on a column with image with flex */}
            <div className=' transition-all duration-300 ease-in-out my-20 w-[90vw]  lg:w-[940px] mx-auto h-auto flex flex-col items-center justify-center gap-8'>
                <CustomCard1 mainHeading={"8000+"} subHeading="Live Tv Channels" subPara={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus eligendi hic dicta soluta veniam maxime asperiores inventore, veritatis voluptatem consequatur iste fugit ullam facilis, quibusdam odio eius nisi corrupti?"} buttonHeading="Discover the Channel List" image={mainimage4} icon={ <ListAltIcon></ListAltIcon>} />
                <CustomCard2 mainHeading={"EPG"} subHeading="In Most Channels" subPara={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus eligendi hic dicta soluta veniam maxime asperiores inventore, veritatis voluptatem consequatur iste fugit ullam facilis, quibusdam odio eius nisi corrupti?"} buttonHeading="Discover the Channel List" image={mainimage3} />
                <CustomCard3 mainHeading={"Thousands"} subHeading="of Movies & Series" subPara={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus eligendi hic dicta soluta veniam maxime asperiores inventore, veritatis voluptatem consequatur iste fugit ullam facilis, quibusdam odio eius nisi corrupti?"}  image={mainimage2}  />
            
            </div>
            {/* Five stars */}
            <div className='my-8 flex items-center justify-center gap-4'>
                <img src={Yellostar} alt="" />
                <img src={Yellostar} alt="" />
                <img src={Yellostar} alt="" />
                <img src={Yellostar} alt="" />
                <img src={Yellostar} alt="" />
            </div>
            {/* Heading and subheading beneath five stars on web page */}
            <div className=' flex items-center justify-center'>
                <div className='flex items-center flex-col justify-center'>
                    <h1 className='text-white font-bold text-4xl text-center'>A Five Star IPTV Experience</h1>
                    <p className='md:w-[600px] my-8 text-white font-bold text-normal text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, rerum ad? Eveniet, saepe doloremque incidunt totam corrupti neque rem possimus
                    </p>
                </div>
            </div>
            {/* Small Custom Cards Here
            <div className='md:flex hidden items-center mx-auto justify-center w-[90vw]'>
                <div className='flex flex-wrap overflow-x-auto items-center justify-center w-full gap-4 my-20 '>
                    {
                        customSmallCaardData.map((item, index) => {
                            return <CustomSmallCard key={index} {...item} />
                        })
                    }
                </div>
            </div> */}
            {/* Custom card slider */}
            <div className='z-10 lg:w-[95%]  lg:ml-10 '>

                {/* <div onClick={handlePrevious} className='absolute top-[50%] translate-y-[-50%] left-2 md:left-32'><AiOutlineArrowLeft color='white' fontSize={30} /></div> */}
                {/* <Carousel className='md:block  lg:hidden' animation="slide" navButtonsAlwaysVisible="true" autoPlay="false" navButtonsAlwaysInvisible="true"  >
                    {
                        customSmallCaardData.map((item, index) => {

                            return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', maxHeight: '60vh' }}>
                                <CustomSmallCard key={index} {...item} />
                            </div>
                        })
                    }
                </Carousel> */}
                <Carousel  animation="slide" navButtonsAlwaysVisible="true" autoPlay="true" interval={3500} navButtonsAlwaysInvisible="true"   >
                    {
                        customSmallCaardData.map((item, index) => {

                            return <div className='transition-all duration-300 ease-in-out' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', maxHeight: '60vh' }}>
                                <CustomSmallCard key={index} {...item} />
                            </div>
                        })
                    }
                </Carousel>
                {/* <div onClick={handleNext} className='absolute top-[50%] translate-y-[-50%] right-2 md:right-32'><AiOutlineArrowRight color='white' fontSize={30} /></div> */}
            </div>


            {/* text and headings below small custom cards on web page */}
            <div className='w-[70vw] mx-auto flex items-center justify-center mt-8'>
                <div className='w-full flex items-center justify-center gap-8 flex-wrap'>
                    <h1 className='text-white font-semibold text-3xl'>Excellent</h1>
                    <div className='flex items-center justify-center gap-2'>
                        <img className='w-6' src={greenStar} alt="" />
                        <img className='w-6' src={greenStar} alt="" />
                        <img className='w-6' src={greenStar} alt="" />
                        <img className='w-6' src={greenStar} alt="" />
                        <img className='w-6' src={greenStar} alt="" />
                    </div>
                    <h1 className='text-white font-semibold text-3xl'>
                        8.9 out of 10
                    </h1>
                    <div>
                        <img src={sponsorLogo} alt="" />
                    </div>
                </div>

            </div>
            <div className=' transition-all duration-300 ease-in-out w-[40vw] lg:w-[500px]  mt-8  p-4 rounded-lg shadow-md mx-auto bg-green-500 hidden md:flex items-center justify-center flex-col '>
                <div className='flex items-center justify-center flex-col'>
                    <button type='button' className='w-'>
                        <h1 className='text-white text-3xl font-bold'>Get My Instant Access Now</h1>
                    </button>
                </div>
            </div>
            <p className='transition-all duration-300 ease-in-out text-white font-medium text-center my-2'>30 Day Money Back Guarantee</p>
            <div className='mx-auto my-28 w-[80vw]  lg:w-[940px] flex items-center justify-center guranteeCard'>
                <Guarantee darkMode={darkMode} />
            </div>
            <h1 className='text-white my-30 text-5xl font-semibold mx-auto text-center'>FAQ</h1>
            <div className=' transition-all duration-300 ease-in-out my-8 w-[90vw] lg:max-w-[940px] mx-auto flex flex-col items-center justify-center gap-6'>
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
            <div className=' transition-all duration-300 ease-in-out w-[40vw] lg:w-[500px] mt-8 p-4 rounded-lg shadow-md mx-auto bg-green-500 hidden md:flex items-center justify-center flex-col '>
                <div className='flex items-center justify-center flex-col'>
                    <button type='button' className='w-'>
                        <h1 className='text-white text-3xl font-bold'>Get My Instant Access Now</h1>

                    </button>
                </div>
            </div>
            <p className='text-white  mx-auto w-max mt-2'>7 Days Money Back Guarantee</p>
        </>
    )
}
export default HomeBody