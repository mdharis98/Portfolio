import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    // TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    // TindogGithub : "https://github.com/DevanshSahni/tindog",
    // TindogWebsite : "https://devanshsahni.github.io/tindog/",

    SimonGameDesc : "Built a responsive, cross-platform game using JavaScript with smooth UI, efficient event handling, and iterative improvements based on user feedback for enhanced gameplay.",
    SimonGameGithub : "https://github.com/mdharis98/Simon-game.git",
    SimonGameWebsite : "https://simon-games-by-haris.netlify.app/",

    EduBotDesc:"Developed EduBot using ReactJS, Python, and MongoDB with AI-driven features, under guidance from Prof. Geeta Pattun, resulting in two research paper submissions.",
    EduBotGithub:"https://github.com/mdharis98/EduBot.git",
    // EduBotWebsite:"",
    
    ElitemartDesc:"Built a full-stack eCommerce app with React, Node.js, Express, and MongoDB, featuring product listing, cart, user auth, COD orders, and an admin dashboard for order management.",
    ElitemartGithub:"https://github.com/mdharis98/EliteMart.git",
    ElitemartWebsite:"https://elitemart-frontend-w9v1.onrender.com/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox