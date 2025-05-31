import React, { useState } from 'react';
import './App.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact <span className="text-danger">Me</span></h2>

      <div className="contact-container">
        <div className="contact-info">
          <h4>Get in Touch</h4>

          <p>
            <i className="fas fa-envelope"></i>{' '}
            <a href="mailto:your.email@example.com">yours.email@example.com</a>
          </p>

          <p>
            <i className="fas fa-phone"></i>{' '}
            <a href="tel:+1234567890">+1 234 567 890</a>
          </p>

          <div className="social-links">
            <a href="https://github.com/yamuna13660" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/yadla-yamuna-a8b071303/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <a href="/Resume2.pdf" download className="resume-btn">Download Resume</a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h4>Send Me a Message</h4>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
