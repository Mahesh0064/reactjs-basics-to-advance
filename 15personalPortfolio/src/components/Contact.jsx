// src/components/Contact.js
import React from "react";
//import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Email: mahiadsvm.@gmail.com</p>
      <p>Phone: +91 6387367624</p>
      <p>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        |
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </section>
  );
};

export default Contact;
