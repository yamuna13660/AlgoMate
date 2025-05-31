import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
      <div className="container-fluid">
        {/* Brand */}
        <span className="navbar-brand mx-5">
          <b><span className="text-danger">Y</span>amini</b>
        </span>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-white" style={{ marginLeft: '200px' }}>
            <li className="nav-item mx-1">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item mx-1">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item mx-1">
              <a className="nav-link text-white" href="#services">Services</a>
            </li>
            <li className="nav-item mx-1">
              <a className="nav-link text-white" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item mx-1">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
