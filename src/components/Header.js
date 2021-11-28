import React from "react";
import Type from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="bgColor">
      </div>
        <div className="main-info">
          <h1>Civil Engineering Designs and Constructions</h1>
          <Type 
            className="type-text"
            strings={["Construction Designs", "Building Constructions", "Highway Constructions", "Drainage Constructions"]}
            typeSpeed={50}
            backSpeed={50}
            loop
            />
          <a href="#" className="btn-main-offer">
            <h6>Contact Us</h6></a>
        </div>
    </div>
  )
}

export default Header
