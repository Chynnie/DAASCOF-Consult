import React from 'react';
import Type from 'react-typed';

const Home = () => {
  return (
    <div className="header-wraper">
      {/* <div className="bgColor"></div> */}
      <div className="main-info">
        <h1>Civil Engineering Designs and Constructions</h1>
        <Type
          className="type-text"
          strings={[
            'Engineering Designs',
            'Building Construction',
            'Highway Construction',
            'Procurement',
            'Construction Maintenance',
            'Building Renovation',
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
        <a href="#contact-us" className="btn-main-offer">
          <h6 id="contact-us">Contact Us</h6>
        </a>
      </div>
    </div>
  );
};

export default Home;
