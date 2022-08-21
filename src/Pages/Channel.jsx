import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AiOutlineSearch } from 'react-icons/ai'
import MediaQuery from 'react-responsive'
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

const Channel = ({ darkMode, setDarkMode }) => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    const notActiveBtn = 'transition-all duration-300 ease-in-out dark:hover:bg-[#1e253b] hover:bg-[#cbcdd0]  dark:hover:text-white md:w-full w-full dark:text-white text-black  rounded-md dark:bg-[#262F4A] bg-[#E2E4E8] shadow-sm flex flex-col items-center justify-center gap-4'
    const Activebtn = 'transition-all duration-300 ease-in-out dark:hover:bg-white dark:hover:text-blue-lightmd md:w-full w-full  rounded-md dark:text-white text-blue-lightmd dark:bg-white dark:text-blue-darkmdbg bg-blue-darkmdbg text-slate-100 shadow-sm flex flex-col items-center justify-center gap-4'
    const [current, setCurrent] = useState('Category1');

    const [search, setSearch] = useState('')
    const [filteredArray, setfilteredArray] = useState(null)

    const [muiSelectValue, setMuiSelectValue] = React.useState('Category1');
    const handleChange = (e) => {
        setMuiSelectValue(e.target.value)
        setCurrent(e.target.value)
    }


    const Category1 = [
        "Aardvarksdfdsfdsfdsfs",
        "Albatross",
        "Alligatorsdfdsfdsfdsfds",
        "Alpaca",
        "Ant",
        "Anteatersdfdsfdsfdsfd",
        "Antelope",
        "Ape",
        "Armadillo",
        "Donkey",
        "Baboon",
        "Badger",
        "Barracuda",
        "Bat",
        "Bear",
        "Beaver",
        "Bee",
        "Bison",
        "Boar",
        "Buffalo",
        "Butterfly",
        "Camel",
        "Capybara",
        "Caribou",
        "Cassowary",
        "Cat",
        "Caterpillar",
        "Cattle",
        "Chamois",
        "Cheetah",
        "Chicken",
        "Chimpanzee",
        "Chinchilla",
        "Chough",
        "Clam",
        "Cobra",
        "Cockroach",
        "Cod",
        "Cormorant"]


    const Category2 = [
        "Tunisian Restaurant",
        "Hypnotherapy Service",
        "Armenian Restaurant",
        "Chamber of Commerce",
        "District Government Office",
        "Millwork Shop",
        "Time and Temperature Announcement Service",
        "Dock Builder",
        "Ammunition Supplier",
        "Youth Social Services Organization",
        "Wholesale Fish Merchant",
        "Satellite Communication Service",
        "Elementary School",
        "Soup Shop",
        "Family Restaurant",
        "Bus Tour Agency",
        "Motorcycle Insurance Agency",
        "Bankruptcy Service",
        "Towing Service",
        "Ecuadorian Restaurant",
        "Theaters",
        "South African Restaurant",
        "Trading Card Store",
        "Water Sports Equipment Rental Service",
        "Authentic Japanese  Restaurant",
        "Flag Store",
        "General Store",
        "Dental Clinic",
        "Mexican Grocery Store",
        "Church of Christ",
        "Dump Truck Dealer",
        "Camera Repair Shop",
        "Well",
        "Tribal Headquarters",
        "Runway",
        "Trade School",
        "Archaeological Museum",
        "Psychotherapist",
        "Bedroom Furniture Store",
        "Marriage Counselor",
        "Batting Cage Center",
        "Real Estate Developer",
        "Auditorium",
        "Paraguayan Restaurant",
        "Dry Ice Supplier",
        "Credit Union",
        "Flea Market",
        "Tax Consultant",
        "Cemetery",
        "Hose Supplier",
        "Mailing Service",
        "Mobile Home Supply Store",
        "Envelope Supplier",
        "Dried Flower Shop",
        "Lawn Irrigation Equipment Supplier"
    ]
    const Category3 = [
        "Albatross",
        "Alligatorsdfdsfdsfdsfds",
        "Alpaca",
        "Ant",
        "Anteatersdfdsfdsfdsfd",
        "Antelope",
        "Ape",
        "Armadillo",
        "Donkey",
        "Baboon",
        "Badger",
        "Barracuda",
        "Bat",
        "Bear",
        "Beaver",
        "Bee",
        "Bison",
        "Boar",
        "Buffalo",
        "Butterfly",
        "Camel",
        "Capybara",
        "Caribou",
        "Cassowary",
        "Cat",
        "Caterpillar",
        "Cattle",
        "Chamois",
        "Cheetah",
        "Chicken",
        "Chimpanzee",
        "Chinchilla",
        "Chough",
        "Clam",
        "Cobra",
        "Cockroach",
        "Cod",
        "Cormorant"]

        const Category4 = [
            "Ape",
            "Armadillo",
            "Donkey",
            "Baboon",
            "Badger",
            "Barracuda",
            "Bat",
            "Bear",
            "Beaver",
            "Bee",
            "Bison",
            "Boar",
            "Buffalo",
            "Butterfly",
            "Camel",
            "Capybara",
            "Caribou",
            "Cassowary",
            "Cat",
            "Caterpillar",
            "Cattle",
            "Chamois",
            "Cheetah",
            "Chicken",
            "Chimpanzee",
            "Chinchilla",
            "Chough",
            "Clam",
            "Cobra",
            "Cockroach",
            "Cod",
            "Cormorant"]







    //filtering feature
    useEffect(() => {

        console.log(darkMode)
        if (search == '') {
            if (current == 'Category1') {
                let temp = Category1.filter((category1) => (category1.toLowerCase().includes(search.toLowerCase())));
                setfilteredArray(Category1);

            }
            if (current == 'Category2') {
                setfilteredArray(null)
                let temp = Category2.filter((category2) => (category2.toLowerCase().includes(search.toLowerCase())));
                setfilteredArray(Category2);

            }
            if (current == 'Category3') {
                setfilteredArray(null)
                let temp = Category3.filter((category3) => (category3.toLowerCase().includes(search.toLowerCase())));
                setfilteredArray(Category3);

            }
            if (current == 'Category4') {
                setfilteredArray(null)
                let temp = Category4.filter((category4) => (category4.toLowerCase().includes(search.toLowerCase())));
                setfilteredArray(Category4);

            }
        }
        else {
            let temp1 = Category1.filter((category1) => (category1.toLowerCase().includes(search.toLowerCase())));
            let temp2 = Category2.filter((category2) => (category2.toLowerCase().includes(search.toLowerCase())));
            let temp3 = Category3.filter((category3) => (category3.toLowerCase().includes(search.toLowerCase())));
            let temp4 = Category4.filter((category4) => (category4.toLowerCase().includes(search.toLowerCase())));

            setfilteredArray(temp1.concat(temp2).concat(temp3).concat(temp4))
        }


    }, [search, current]);
    // for adding new categories
    let Category1Text = "UK | Entertainment";
    let Category2Text = "Nabeel";
    let Category3Text = "Ahmed Bhai";
    let Category4Text = "Category4";
    
    return (
        <div className='md:w-screen lg:w-auto  my-20 '>
            <h1 className='text-center font-semibold md:text-6xl text-5xl text-white'>Our Full IPTV Channels List</h1>
            <p className='text-white mt-6 text-center font-semibold text-lg'>An Easy Access And Super Simple IPTV Services For Your Devives</p>
            <div className='flex md:flex-row my-12  flex-col items-center justify-center gap-4 sm:w-auto  md:w-[90%] lg:max-w-[1400px] mx-auto'>
                {/* left menu */}
                <MediaQuery minWidth={770}>
                    <div className='chanelLeftdiv dark:bg-[#040E2E]  overflow-h p-2 px-2  md:h-[600px] md:w-[20%] w-[90%] flex flex-col items-center justify-start  gap-2 bg-[#FFFFFF] rounded-md shadow-md'>
                        {/* /button 1 */}

                        <div onClick={(e) => { setCurrent('Category1'); }}
                            className={` ${current == 'Category1' ? Activebtn : notActiveBtn} h-[7%]`}>
                            <button className='flex items-center justify-between w-full p-1 overflow-hidden' variant="contained">

                                <h1 className='font-bold text-md  '>{Category1Text.slice(0, 20)}</h1>

                                {current == 'Category1' ? <KeyboardArrowRightIcon /> : ""}

                            </button> 

                          
                        </div>


                        {/* /button 2 */}
                        <div onClick={(e) => {
                            setCurrent('Category2');

                        }}
                            className={` ${current == 'Category2' ? Activebtn : notActiveBtn} h-[7%]`}>
                            <button className='flex items-center justify-between w-full p-1 overflow-hidden'>
                                <h1 className='font-bold text-md'>{Category2Text.slice(0, 20)}</h1>
                                {current == 'Category2' ? <KeyboardArrowRightIcon /> : ""}
                            </button>
                        </div>

                        <div onClick={(e) => {
                            setCurrent('Category3');

                        }}
                            className={` ${current == 'Category3' ? Activebtn : notActiveBtn} h-[7%]`}>
                            <button className='flex items-center justify-between w-full p-1 overflow-hidden'>
                                <h1 className='font-bold text-md'>{Category3Text.slice(0, 20)}</h1>
                                {current == 'Category3' ? <KeyboardArrowRightIcon /> : ""}
                            </button>
                        </div>
                        {/* last button */}
                      
                        <div onClick={(e) => {
                            setCurrent('Category4');

                        }}
                            className={` ${current == 'Category4' ? Activebtn : notActiveBtn} h-[7%]`}>
                            <button className='flex items-center justify-between w-full p-1 overflow-hidden'>
                                <h1 className='font-bold text-md'>{Category4Text.slice(0, 20)}</h1>
                                {current == 'Category4' ? <KeyboardArrowRightIcon /> : ""}
                            </button>
                        </div>


                    </div>
                   
                </MediaQuery>

                {/* The combo box */}
                <MediaQuery minWidth={0} maxWidth={769}>

                    {darkMode ?

                        <div className='dark:bg-[#040E2E]  overflow-h p-2 px-2  md:h-[600px] md:w-[20%] w-[90%] flex flex-col items-center justify-start  gap-2 bg-[#FFFFFF] rounded-md shadow-md'>
                            <ThemeProvider theme={darkTheme}>
                                <CssBaseline />
                                <FormControl className='mt-24  w-full md:w-[90%]  lg:max-w-[1100px] '>
                                    <InputLabel id="demo-simple-select-label">Screen</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={muiSelectValue}
                                        label="Screen"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'Category1'}>{Category1Text.slice(0,20)}</MenuItem>
                                        <MenuItem value={'Category2'}>{Category2Text.slice(0,20)}</MenuItem>
                                        <MenuItem value={'Category3'}>{Category3Text.slice(0,20)}</MenuItem>
                                        <MenuItem value={'Category4'}>{Category4Text.slice(0,20)}</MenuItem>
                                       
                                    </Select>
                                </FormControl>
                            </ThemeProvider>
                        </div>
                        :

                        <div className='dark:bg-[#040E2E]  overflow-h p-2 px-2  md:h-[600px] md:w-[20%] w-[90%] flex flex-col items-center justify-start  gap-2 bg-[#FFFFFF] rounded-md shadow-md'>
                            <ThemeProvider theme={lightTheme}>
                                <CssBaseline />
                                <FormControl className='mt-24  w-full md:w-[90%]  lg:max-w-[1100px] '>
                                    <InputLabel id="demo-simple-select-label">Screen</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={muiSelectValue}
                                        label="Screen"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'Category1'}>{Category1Text.slice(0,20)}</MenuItem>
                                        <MenuItem value={'Category2'}>{Category2Text.slice(0,20)}</MenuItem>
                                        <MenuItem value={'Category3'}>{Category3Text.slice(0,20)}</MenuItem>
                                        <MenuItem value={'Category4'}>{Category4Text.slice(0,20)}</MenuItem>
                                      
                                    </Select>
                                </FormControl>
                            </ThemeProvider>
                        </div>
                    }
                </MediaQuery>

                <div className='md:w-[50%] lg:max-w-[800px] w-[90%] p-6  rounded-md shadow-md h-[600px] overflow-hidden flex flex-col gap-8 items-start justify-start  dark:bg-blue-darkmd bg-[#FFFFFF] '>
                    <div className='w-full  relative top-2'>
                        <AiOutlineSearch fontSize={30} color='white' className='absolute right-4 top-[50%] translate-y-[-50%]' />
                        <input placeholder='Search' type="search " className='w-full border-none outline-none dark:text-white text-black  bg-[#E2E4E8] dark:bg-[#262F4A] p-2 px-4 rounded-md shadow-md' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2 overflow-auto overflow-y-auto scroll'>

                        {

                            filteredArray && filteredArray.map((list, index) => {

                                return (<>
                                    <div className=' h-[2.5rem] rounded-md shadow-md  px-4 py-0.5 dark:bg-[#262F4A] dark:text-white  bg-[#E2E4E8] text-black text-lg overflow-hidden lg:font-semibold' >
                                        <h1 key={index} className="w-[100vw]" >{list.toUpperCase().slice(0,20)}</h1>
                                    </div>
                                </>)

                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Channel