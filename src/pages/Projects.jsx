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
    <ProjectCard
      title="Pokemon Finder"
      description="A very simple No-CSS project where you can input the name of a Pokemon and get an image of it as a result"
      url="https://pokemon-finder.quantumdev.cc"
      github="https://github.com/lakshinhemachandran/Pokemon-Finder"
    />
    <ProjectCard
      title="Weather App"
      description="A weather app built with JavaScript that uses the VisualCrossing Weather API. There is no live demo yet due to API key limitations."
      github="https://github.com/lakshinhemachandran/WeatherApp"
    />  
  </div>
</>
    )
}
