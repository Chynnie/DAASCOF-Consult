import React from "react";
import logo from "./logo1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
    <div className="container">
        
      <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="DAASCOF CONSULT" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: "#0a0a0a"}}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="visually-hidden">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default NavBar
