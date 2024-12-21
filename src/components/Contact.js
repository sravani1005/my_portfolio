import React from 'react';
import './Contact.css';
import mailLogo from './mail-logo.png';
import LinkedLogo from './linked-in logo.png'
import gitLogo from './github-logo.png'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-info">
        You can reach me at: 
        <a href="sravanivaranganti10@gmail.com" className="contact-link">
          <img src={mailLogo} alt="Mail Logo" className="mail-logo" />
        </a>
        <a href="https://www.linkedin.com/in/sravani-varanganti-4a4b8a261/" target="_blank" >
          <img src={LinkedLogo} alt="Mail Logo" className="lk-logo" />
        </a>
        {/*<a href="https://github.com/sravani1005" target="_blank">
        <img src={gitLogo} alt="Mail Logo" className="gt-logo" />
        </a>*/}
      </p>
    </section>
  );
}

export default Contact;
