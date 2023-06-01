import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './scss/contactme.css';
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mgayqvh', 'template_dv7zq88', form.current, 'user_cDIN25o7SwXk9eHP6H7wz')
      .then((result) => {
          console.log(result.text);
          alert("message successfully sent");
      }, (error) => {
          console.log(error.text);
          alert("message could not be  sent");
      })
  };

  
  return (
      <div className="container">
        <h1>Contact Me</h1>
      
        <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
                <label htmlFor="user_name" className="form-label">Name</label>
                <input type="text" name="user_name" id="user_name" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="user_email" className="form-label">Email</label>
                <input type="email" name="user_email" id="user_email" className="form-control" />
            </div>
            
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-control" name="message" rows="5" cols="10" />
            </div>
            
            <div className="mb-3">
                <input className="btn btn-primary" type="submit" value="Send" />
            </div>
            
        </form>
      </div>
  );
};
export default ContactUs;