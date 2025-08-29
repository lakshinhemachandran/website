import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'; 


const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/"><img src={logo} style={{ height: "40px" }} /></Link>
      </div>

      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/projects">Projects</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 2rem",
      height: "60px",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer"
    },
    links: {
      display: "flex",
      gap: "2rem",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontWeight: "500",
      fontSize: "16px"
    }
  };
  

export default Navbar;
