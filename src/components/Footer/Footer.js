import React from 'react'
import "./footer.css"
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";


export default function Footer() {

  const github = "https://github.com/Vigneshshankaran";
  const linkedIn =
    "https://www.linkedin.com/in/vignesh-shankaran-75695941/";

  return (
    <>
      <div className="footer">
        <div className="link-style">
          <a href={github} target="_blank" rel="noreferrer"><GrGithub className="footer-icons" /></a>
          <a href={linkedIn} target="_blank" rel="noreferrer"><GrLinkedin className="footer-icons" /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vigneshganesha@gmail.com"><GrMail className="footer-icons" /></a>

        </div>
        <p>  <small>&copy; Copyright 2022, Vigneshshankaran</small> </p>
      </div>

    </>
  )
}
