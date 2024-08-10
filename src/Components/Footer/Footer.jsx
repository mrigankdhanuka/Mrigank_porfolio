import React from 'react';
import './Footer.css';
import logo from '../../assets/mrigank.svg';
import userIcon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'> 
      <div className="footer-top">
        <div className="footer-top-left">
          <img className='logo' src={logo} alt="Logo" />
          <p>I am a software developer from the Indian Institute of Information Technology, Kota</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="User Icon" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">2024 Mrigank dhanuka. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Conect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
