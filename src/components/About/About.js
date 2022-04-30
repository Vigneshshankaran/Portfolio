import React from 'react'
import './about.css';
import Aboutimg from '../../images/aboueme.jpg';


export default function About() {
  return (
    <div className="about-details" id="about">
      <h1> <span className='underline-box'>About</span></h1>
      <div className="about-container">
        <div className="about-card">
          <img src={Aboutimg} alt="Avatar" className="img-style" />
          {/* <div className="ab-container">
            <h4><b>Vignesh Shankaran</b></h4>
            <p>FullStack Developer</p>
          </div> */}
        </div>
        <p>Hi, I'm a Fullstack Developer specialized in developing web applications.
In terms of web i have good knowledge in frontend and backend,also have capability in developing maintainable and reusable code using Reactjs, Nodejs, Expressjs and MongoDB. I can adapt to any technology rapidly making myself flexible upon any tech stack. A passionate diligent person who wants to learn continuously.</p>
      </div>
    </div>
  )
}
