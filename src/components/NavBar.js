import React from 'react';
import logo from './images/logo1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
      <div className="container">
        <img className="navbar-brand logo" src={logo} alt="DAASCOF CONSULT" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#0a0a0a' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active" id="home">
              <a className="nav-link" href="#home">
                Home <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item" id="about">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item" id="services">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            {/* <li className="nav-item">
            <a className="nav-link" href="#">Experience</a>
          </li> */}
            <li className="nav-item" id="projects">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item" id="contact-us">
              <a className="nav-link" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
