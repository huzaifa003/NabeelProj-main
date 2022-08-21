import React from 'react'
import "../Components/MainStyle.css"

import Logo from '../assets/mainLogo.png'
import WebIcon from '@mui/icons-material/Web';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const Main = () => {

  return (
    <div>
       <section class="main-section">
        <div class="container">
        
            <img className='h-[40%] w-[40%]' src={Logo} alt=""/>
          
            <p>Welcome to the official cccambox proxy, if our website main url is not
                available in google you can then use one of the links below to access
                our services. Enjoy 🎉
            </p>
         

           
            <div  class="boxes">
          <a style={{display:'contents'}} href="http://google.com">
                <div  class="box ">
                    <WebIcon style={{width:"50%"}}></WebIcon>
               <h6 class="box-text ">Website</h6>
                </div>
                </a>
                
                <a style={{display:'contents'}} href="http://google.com">
                <div  class="box ">
                <PeopleAltIcon style={{width:"50%"}}></PeopleAltIcon>
                    <h6  class="box-text ">Members Area</h6>
                </div>
                </a>

                <a style={{display:'contents'}} href="http://google.com">
                <div  class="box ">
               <ShoppingCartCheckoutIcon style={{width:"50%"}} ></ShoppingCartCheckoutIcon>
                   
                    <h6 class="box-text ">Checkout</h6>
                </div>
                </a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Main
