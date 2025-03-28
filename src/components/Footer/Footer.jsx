import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore ullam magnam quis minus ab fugiat maxime? Ipsam doloribus explicabo deleniti ipsum, amet non! Dicta nemo dolorem dolore error ut, quos earum officia alias accusantium et iusto suscipit cumque magnam.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>Abouts</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91 9784731489</li>
              <li>rajeshmali334@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 @ FoodDel.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer
