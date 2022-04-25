import { Link } from "react-scroll";
import "./navbar.css";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="navbar">
      <Link to="home" smooth={true} duration={100}>
        <div className="logo-container">
          <h2>Vignesh Shankaran</h2>
        </div>
      </Link>
      <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option mobile-option">
          <Link
            onClick={closeMobileMenu}
            to="home"
            smooth={true}
            duration={400}
            spy={true}
          >
            <h4>Home</h4>
          </Link>
        </li>
        <li className="option mobile-option">
          <Link
            onClick={closeMobileMenu}
            to="about"
            smooth={true}
            duration={400}
          >
            <h4>About</h4>
          </Link>
        </li>
        <li className="option mobile-option">
          <Link
            onClick={closeMobileMenu}
            to="skills"
            smooth={true}
            duration={400}
          >
            <h4>Skills</h4>
          </Link>
        </li>
        <li className="option mobile-option">
          <Link
            onClick={closeMobileMenu}
            to="projects"
            smooth={true}
            duration={400}
          >
            <h4>Projects</h4>
          </Link>
        </li>
        <li className="option mobile-option">
          <Link
            onClick={closeMobileMenu}
            to="contact"
            smooth={true}
            duration={400}
          >
            <h4>Contact</h4>
          </Link>
        </li>
      </ul>
      <ul className="navbar_right">
        <li className="navbar_right_options" onClick={closeMobileMenu}>
          <Link to="home" smooth={true} duration={100} spy={true}>
            <h4>Home</h4>
          </Link>
        </li>
        <li className="navbar_right_options" onClick={closeMobileMenu}>
          <Link to="about" smooth={true} duration={100}>
            <h4>About</h4>
          </Link>
        </li>
        <li className="navbar_right_options" onClick={closeMobileMenu}>
          <Link to="skills" smooth={true} duration={100}>
            <h4>Skills</h4>
          </Link>
        </li>
        <li className="navbar_right_options" onClick={closeMobileMenu}>
          <Link
            to="projects"
            onClick={closeMobileMenu}
            smooth={true}
            duration={100}
          >
            <h4>Projects</h4>
          </Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link to="contact" smooth={true} duration={100}>
            <h4>Contact</h4>
          </Link>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <MenuOpenIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
}
export default Navbar;
