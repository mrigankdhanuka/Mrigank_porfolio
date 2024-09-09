import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/photo.png'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} className='photo' alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am pursuing a B.Tech in Computer Science and Engineering at the Indian Institute of Information Technology (IIIT), Kota. My hobbies include playing esports, cooking, and photography.</p>
                <p>My skill is web development using HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB.</p>
                <p>I have experience of Data structure and Algorithm, C++, C. I have solved more the 500+ DSA problems on Leetcode, GFG and Codechef.</p>
                <p>I have experience of stock market since 3+ years.</p>
            </div>
            <div className="about-skill">
                <p>HTML & CSS</p>
                <div>
                <hr style={{width:"70%"}}/>
                </div>
            </div>
            <div className="about-skill">
                <p>React JS</p>
                <div>
                <hr style={{width:"90%"}}/>
                </div>
            </div>
            <div className="about-skill">
                <p>JavaScript</p>
                <div><hr style={{width:"80%"}}/></div>
            </div>
            <div className="about-skill">
                <p>Node JS</p><div><hr style={{width:"70%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>projects</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>300+</h1>
            <p>Leetcode problem</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>1485</h1>
            <p>Rating in codechef</p>
        </div>
    
      </div>
    </div>
  )
}

export default About
