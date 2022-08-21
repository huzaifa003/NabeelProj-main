import React from 'react'
import "../Components/MainStyle.css"
import "../Components/style.css"
import Logo from '../assets/mainLogo.png'
import WebIcon from '@mui/icons-material/Web';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const Main = ({ darkMode, setDarkMode }) => {

  return (
    <div>
      <section className="main-section">
        <div className="container">

          <img className='h-[40%] w-[40%]' src={Logo} alt="" />

          <p>Welcome to the official cccambox proxy, if our website main url is not
            available in google you can then use one of the links below to access
            our services. Enjoy 🎉
          </p>



          <div className="boxes ">
            <a style={{ display: 'contents' }} href="http://google.com">
              <div className={`${darkMode ? 'box' : 'boxDark'}   `}>
                <WebIcon style={{ width: "50%" }} ></WebIcon>
                <h6 className={`${darkMode ? 'boxTextDark' : 'boxTextLight'}   `}> Website </h6>
              </div>
            </a>

            <a style={{ display: 'contents' }} href="http://google.com">
              <div className={`${darkMode ? 'box' : 'boxDark'}   `}>
                <PeopleAltIcon style={{ width: "50%" }}></PeopleAltIcon>
                <h6 className={`${darkMode ? 'boxTextDark' : 'boxTextLight'}   `}> Members Area </h6>
              </div>
            </a>

            <a style={{ display: 'contents' }} href="http://google.com">
              <div className={`${darkMode ? 'box' : 'boxDark'}   `}>
                <ShoppingCartCheckoutIcon style={{ width: "50%" }} ></ShoppingCartCheckoutIcon>

                <h6  className={`${darkMode ? 'boxTextDark' : 'boxTextLight'}   `}> Checkout </h6>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
