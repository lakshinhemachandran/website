import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import "./Home.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hi there! I'm Lakshin Hemachandran. I was born in Chennai, India, and came to the United States when I was young. I love finding different ways to play with technology and loving solving problems and making projects. I am currently exploring Full Stack Web Development and hope to touch Machine Learning as well. Look down to see my skills so far!
        </p>
        <h2> Skills </h2>
        <p>
          I currently know HTML, CSS, and JavaScript. I am learning React.js right now(what this website is made with.)
        </p>
      </div>
    </>
  );
}
