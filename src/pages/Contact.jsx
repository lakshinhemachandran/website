import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import "./Home.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-page-wrapper">
        <main className="contact-container">
          <h1>Contact Me</h1>
          <form 
            action="https://formsubmit.co/hlakshin@gmail.com" 
            method="POST" 
            className="contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://quantumdev.cc" />

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required rows={5} />
            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    </>
  );
}
