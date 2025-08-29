import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import "./Home.css"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="grid-container">
                <div className="grid-item">
                    <img 
                        src="https://quantumdev.cc/images/image.jpg" 
                        alt="Lakshin Hemachandran"
                        style={{ height: "690px", borderRadius: "50%" }} 
                        className="face-focused"
                    />
                </div>
                <div className="grid-item">
                    <h5>👋 Hey, I'm</h5>
                    <h1>Lakshin Hemachandran</h1>
                    <p>Aspiring Full Stack + ML Developer</p>
                </div>
            </div>
        </>
    )
}