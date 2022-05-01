import React from 'react';
import './header.css';
import Typewriter from "typewriter-effect";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";




function Header() {

  const github = "https://github.com/Vigneshshankaran";
  const linkedIn =
    "https://www.linkedin.com/in/vignesh-shankaran-75695941/";
  const resume =
    "https://drive.google.com/file/d/11kdH0cq7UlYZ41GmXPvpsgV-3zCsXCKB/view?usp=sharing";

  return (
    <div className="header-wraper" id='home'>
      <div className="main-info">
        <h1>Hey There, </h1>
        <h1>I'm Vignesh</h1>
        <span className="animation-style"><Typewriter
          options={{
            strings: ["I'm a Full Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
        </span>
        <div className="link-style">
          <a href={github} target="_blank" rel="noreferrer"><GrGithub className="icon" /></a>
          <a href={linkedIn} target="_blank" rel="noreferrer"><GrLinkedin className="icon" /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vigneshganesha@gmail.com" target="_blank" rel="noreferrer"><GrMail className="icon" /></a>

        </div>
        <a href={resume} target="_blank" rel="noreferrer">
          <button className="btn">Download CV</button>
        </a>

      </div>
    </div>
  )
}
export default Header;
