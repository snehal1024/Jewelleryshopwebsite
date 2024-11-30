import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo.png'
import Instagram_Icon from '../assets/instagram.png'
import Whatsapp_Icon from '../assets/whatsapp.png'
import Pinterest_Icon from '../assets/pinterest.png'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={Instagram_Icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Whatsapp_Icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Pinterest_Icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div> 
         )
}

export default Footer