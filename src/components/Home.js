import React from 'react';
import logo from './logo.jpg';
import './App.css';
import About from './About'
import Contact from './Contact';
import Services from './Services';
import Projects from './Projects';
function Home() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="home-section bg-black text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h4><b>Hello,</b></h4>
              <h1><b>I'm <span className="text-danger">Yamini</span></b></h1>
              <h2><strong>Front-End Developer</strong></h2>
            </div>
            {/* Image Section */}
            <div className="col-md-6 text-center">
              <img src={logo} alt="Yamini" className="img-fluid rounded home-image"  />
            </div>
          </div>
        </div>
      </section>

       
      <section id="about" className="section-style">
        <About />
      </section>
      <section id="services" >
        <Services />
      </section>
       <section id="projects" >
        <Projects />
      </section>
       <section id="contact" >
        <Contact />
      </section>
      <div>
      <footer style={{textAlign:'center', padding: '20px', backgroundColor: 'black', color: 'white'}}>
    &copy; {new Date().getFullYear()} Yamuna. All rights reserved. | Built with ❤️ using React
</footer>
</div>
    </>
  );
}

export default Home;
