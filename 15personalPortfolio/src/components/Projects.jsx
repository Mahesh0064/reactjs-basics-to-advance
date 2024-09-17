// src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Project One",
      description: "A cool project I built.",
      link: "https://project1.com",
    },
    {
      name: "Project Two",
      description: "Another awesome project.",
      link: "https://project2.com",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
