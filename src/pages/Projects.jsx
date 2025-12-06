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
      url="https://lakshin.dev"
      github="https://github.com/lakshinhemachandran/website"
    />
    <ProjectCard
      title="Pokemon Finder"
      description="A simple project where you can input the name of a Pokemon and get a picture of it in return."
      url="https://pokemon-finder.lakshin.dev"
      github="https://github.com/lakshinhemachandran/Pokemon-Finder"
    />
    <ProjectCard
      title="Weather App"
      description="A weather app built with JavaScript that uses the VisualCrossing Weather API. There is no live demo yet due to API key limitations."
      github="https://github.com/lakshinhemachandran/WeatherApp"
    /> 
    <ProjectCard
      title="Todo List App"
      description="A simple todo list app built with React.js"
      url="https://todo-list.lakshin.dev"
      github="https://github.com/lakshinhemachandran/ReactTodoListApp"
    
    />  
      <ProjectCard
      title="Racelink"
      description="WORK IN PROGRESS - Racelink is a React web app for exploring real-time and historical F1 data via the OpenF1 API. It offers race results, driver/team profiles, lap-time charts, and session info. A smart search maps common names to API IDs, while a responsive UI and reusable components highlight API integration and data visualization."
      github="https://github.com/lakshinhemachandran/Racelink"
          
    
    />  
  </div>
</>
    )
}
