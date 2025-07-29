import React from 'react';
import ProjectBox from './ProjectBox';
import SimonGame from '../images/SimonGame.png';
// import RogfreeImage from '../images/RogfreeImage.png';
import EduBot from '../images/EduBot.png';
import EliteMart from '../images/EliteMart.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={EliteMart} projectName="Elitemart" />
        <ProjectBox projectPhoto={EduBot} projectName="EduBot" />
        <ProjectBox projectPhoto={SimonGame} projectName="SimonGame" />
        {/* <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </div>
  )
}

export default Projects