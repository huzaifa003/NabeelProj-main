import React from 'react'
import { FaHome } from 'react-icons/fa'
import Setup from './Setup'
import HomeBody from './Home.Body'
import CustomCard2 from '../Components/CustomCard2'
import mainimage3 from '../assets/main-pic3.webp'


const Tutorial = () => {
    const CustomCard1Para = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus eligendi hic dicta soluta veniam maxime asperiores inventore, veritatis voluptatem consequatur iste fugit ullam facilis, quibusdam odio eius nisi corrupti?";
    return (
        <div className='w-screen'>
              <CustomCard2 mainHeading={"EPG"} subHeading="In Most Channels" subPara={CustomCard1Para} buttonHeading="Discover Channel List" image={mainimage3} />
        </div>
    )
}

export default Tutorial