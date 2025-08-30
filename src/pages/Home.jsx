import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="grid-container">
                <div className="grid-item">
                    <img 
                        src="https://quantumdev.cc/images/image.jpg" 
                        alt="Lakshin Hemachandran"
                        className="face-focused"
                    />
                </div>
                <div className="grid-item">
                    <h5>👋 Hey, I'm</h5>
                    <h1>Lakshin Hemachandran</h1>
                    <h3>Aspiring Full Stack + ML Developer</h3>
                    <p> I'm a passionate middle school developer from India, living in the US. I'm currently learning React.js and love turning ideas into impactful products. </p>
                    <div className="button-group">
                            <Link className="button btn-1" to="/projects">Projects</Link>
                            <Link className="button btn-2" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}