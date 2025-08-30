import React from 'react'

export default function ProjectCard({ title, description, url, github }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-desc">{description}</p>
      <div className="project-links">
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
        )}
      </div>
    </div>
  );
}