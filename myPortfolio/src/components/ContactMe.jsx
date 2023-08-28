import React from 'react';
import './mediaqueries.css';

const ContactMe = () => {
  return (
    <div className='contact-me'>
      <div className='contact-title'><h2>Contact Me</h2></div>
      <div className='contact-colums'>
    <div className="contact-left">
      
      <p>If you have any questions or inquiries, feel free to get in touch!</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>

    <div className='contact-right'>
    <div>
      <article>
                <img
                  src="./assets/"
                  alt="cell-number icon"
                  className="icon"
                />
                <div>
                  <h3>+2778 140 7749</h3>
                </div>
              </article>
              <article>
                <img
                  src="./assets/"
                  alt="whatsapp icon"
                  className="icon"
                />
                <div>
                  <h3>+2778 140 7749</h3>
                </div>
              </article>

              </div>
    </div>
    </div>
    </div>
  );
};

export default ContactMe;
