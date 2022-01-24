import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();
  const serviceID = 'service_ID';
  const templateID = 'template_ID';
  const userID = 'user_g8Fjx4Px5uMYAmwzQQ9XN';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact py-5">
      <h1>Contact Us</h1>
      <p>
        For business consultations, to engage our services, and for more
        inquiries; kindly fill the form below or send us an email, and we'll get
        back to you.
      </p>
      <div className="container py-5">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <div className="line"></div>
              {/* PHONE INPUT */}
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />
              <div className="line"></div>
              {/* EMAIL INPUT */}
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
              <div className="line"></div>
              {/* SUBJECT INPUT */}
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
              <div className="line"></div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* MESSAGE */}
              <textarea
                type="text"
                className="form-control"
                placeholder="Your Message....."
                name="message"
              ></textarea>
              <div className="line"></div>
              <button
                className="btn-main-offer contact-btn"
                type="submit"
                value="send"
              >
                Contact Us
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
