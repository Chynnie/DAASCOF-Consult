import React from 'react';

function ContactUs() {
  return (
    <div className="contact py-5">
      <h1>Contact Us</h1>
      <p>
        For business consultations, to engage our services, and for more
        enquiries; kindly fill the form below or send us an email, and we'll get
        back to you.
      </p>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* NAME INPUT */}
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
            {/* PHONE INPUT */}
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              phone="phone"
            />
            {/* EMAIL INPUT */}
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              email="email"
            />
            {/* SUBJECT INPUT */}
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              subject="subject"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            {/* DESCRIPTION */}
            <textarea
              type="text"
              className="form-control"
              placeholder="Please describe your interests....."
              description="description"
            ></textarea>
            <button className="btn-main-offer contact-btn" type="submit">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
