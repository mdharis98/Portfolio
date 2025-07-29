import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Mohammad Haris</h4>
      <h4>Copyright &copy; MH</h4>
      <div className='footerLinks'>
        <a href="https://github.com/mdharis98" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mohammad-haris-5aa198281/" target='_blank'><FaLinkedin/></a>
        <a href='mailto:mohammadharis7704@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leestcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer