import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Mohammad Haris</b> and I am from Mau, UP, India. <br></br>
            I am currently based in Hyderabad, Telangana, India. <br></br>
            I'm a <b>MERN stack web developer</b> with a <b>BTech in CSE</b> from Maulana Azad National Urdu University, Hyderabad.<br/><br/>
            I have done an internship as a <b>Trainee Software Engineer</b> at PCS Global Pvt. Ltd. which is a startup.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='DiHtml5'/>
        <Skills skill='DiCss3'/>
        <Skills skill='Javascript' />
        <Skills skill='Bootstrap'/>
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Java'/>
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        {/* <Skills skill='Sqllite'/> */}
        <Skills skill='DiMysql'/>
        <Skills skill='Vercel' />
      </div>
    </>
  )
}

export default About