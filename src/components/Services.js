import React from 'react';

 function Services() {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">My <span className="text-danger">Services</span> </h2>
      <div className="services-container">
        <div className="service-card">
          <h4>Frontend Development</h4>
          <p>Responsive website design using HTML, CSS, JavaScript, and React.js.</p>
        </div>
        <div className="service-card">
          <h4>Java Programming</h4>
          <p>Building applications and solving problems using Java with strong OOP principles.</p>
        </div>
        <div className="service-card">
          <h4>DSA Tutoring</h4>
          <p>Helping others understand Data Structures and Algorithms for interview preparation.</p>
        </div>
        
      </div>
    </section>
  );
}

export default Services;
