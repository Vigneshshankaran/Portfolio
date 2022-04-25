import React from 'react'
import './about.css';

export default function About() {
  return (
    <div className="about-details" id="about">
      <h1> <span className='underline-box'>About</span></h1>
      <div className="about-container">
        <div className="about-card">
          <img src="https://scontent.fmaa3-2.fna.fbcdn.net/v/t1.6435-9/43087785_1552613688172453_3994087841729609728_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=X39Q0AQ7Si0AX9vx6d4&_nc_ht=scontent.fmaa3-2.fna&oh=00_AT8XK0eSLFhHFIRpRq6dKntcisTi0qy4JIdjFhVIYsWxpw&oe=62887D8C" alt="Avatar" className="img-style" />
          <div className="ab-container">
            <h4><b>Vignesh Shankaran</b></h4>
            <p>FullStack Developer</p>
          </div>
        </div>
        <p>Hi, I'm a Fullstack Developer specialized in developing web applications.
In terms of web i have good knowledge in frontend and backend,also have capability in developing maintainable and reusable code using Reactjs, Nodejs, Expressjs and MongoDB. I can adapt to any technology rapidly making myself flexible upon any tech stack. A passionate diligent person who wants to learn continuously.</p>
      </div>
    </div>
  )
}
