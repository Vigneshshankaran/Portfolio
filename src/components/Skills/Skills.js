import React from 'react'
import './skills.css';
import { TiTick } from "react-icons/ti";


export default function Skills() {
  return (
    <>
      <div className="skills-details" id='skills'>
        <h1 className='underline-box'>Skills</h1>
      </div>
      <div className='skill-cover'>
        <div className="card">

          <h1>Frontend</h1>
          <p><TiTick className="img" />Html</p>
          <p><TiTick className="img" />Css</p>
          <p><TiTick className="img" />Bootstrap</p>
          <p><TiTick className="img" />Javascript</p>
          <p><TiTick className="img" />React Js</p>
        </div>
        <div className="card">

          <h1>Backend</h1>
          <p><TiTick className="img" />Node Js</p>
          <p><TiTick className="img" />Express Js</p>
          <p><TiTick className="img" />Mongodb</p>
          <p><TiTick className="img" />Mysql</p>
        </div>
        <div className="card">
          <h1>Others</h1>
          <p><TiTick className="img" />Postman</p>
          <p><TiTick className="img" />Netlify</p>
          <p><TiTick className="img" />Heroku</p>
          <p><TiTick className="img" />Git</p>
          <p><TiTick className="img" />Github</p>


        </div>

      </div>
    </>
  )
}
