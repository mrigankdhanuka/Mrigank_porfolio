import React from 'react'
import './Hero.css'
import profile_img from '../../assets/photo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from './Mrigank.pdf'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src= {profile_img} className='size' alt="" />
      <h1><span>I'm Mrigank dhanuka,</span> Software and web developer.</h1>
      <p>I am a Software Engineer. I have experience in data structure and algorithms</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div  className="hero-resume"><a href={resume} download="Mrigank">My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
