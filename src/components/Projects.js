import React from 'react';
import './App.css';
import code from './code.jpeg';
import algo from './algomate.jpeg';
import text from './text.jpeg'

const projects = [
  {
    id: 1,
    title: "AlgoMate",
    image: algo,
    description: "An algorithm practice platform to improve problem-solving skills.",
    link: "https://yamuna13660.github.io/AlgoMate",
  },
  {
    id: 2,
    title: "TextUtils",
    image: text,
    description: "A text utility app that helps manipulate and analyze text.",
    link: "https://yamuna13660.github.io/TextUtils/",
  },
  {
    id: 3,
    title: "Code Crafters",
    image: code,
    description: "A portfolio website showcasing projects and skills.",
    link: "https://saihimavarshini-surisetti.github.io/CodeCrafters/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My <span className="text-danger">Projects</span></h2>
      <div className="projects-container">
        {projects.map(({ id, title, image, description, link }) => (
          <div key={id} className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="overlay">
              <h4>{title}</h4>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                Visit Project &#8594;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
