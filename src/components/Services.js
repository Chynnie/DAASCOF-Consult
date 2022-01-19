import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilRuler,
  faHome,
  faRoad,
  faTruckPickup,
  faTools,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div className="services py-5">
      <h1>Our Services</h1>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faPencilRuler}
                  size="2x"
                />
              </div>
              <h3>Engineering Designs</h3>
              <p>
                Development of architectural, structural, mechanical and
                electrical designs for building constructions, and highway
                designs for road constructions
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faHome} size="2x" />
              </div>
              <h3>Building Construction</h3>
              <p>
                Construction of high quality building structures, from
                foundation to roofing, as well as post-construction (interior,
                installing fixtures & finishing)
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faRoad} size="2x" />
              </div>
              <h3>Highway Construction</h3>
              <p>Construction of roads, drainages and culverts</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faTruckPickup}
                  size="2x"
                />
              </div>
              <h3>Procurement</h3>
              <p>Procurement of construction materials</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faTools} size="2x" />
              </div>
              <h3>Construction Maintenance</h3>
              <p>Maintenace of building and road constructions</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCogs} size="2x" />
              </div>
              <h3>Building Renovation</h3>
              <p>Renovation of deteriorated and dilapidated buildings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
