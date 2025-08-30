import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import "../pages/Home.css"
import ProjectCard from '../components/ProjectCard/ProjectCard';

export default function Projects () {
    return (
        <>
  <Navbar />
  <div className="projects-container">
    <ProjectCard
      title="Portfolio Website"
      description="A simple portfolio website made to showcase my skills in a sleek and modern format created with React.js"
      url="https://quantumdev.cc"
      github="https://github.com/lakshinhemachandran/website"
    />
  </div>
</>
    )
}