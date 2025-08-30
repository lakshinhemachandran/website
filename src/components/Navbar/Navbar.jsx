import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'; 


const Navbar = () => {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ];
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/"><img src={logo} style={{ height: "40px" }} /></Link>
      </div>

      <div style={styles.links}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="navbar-link"
            style={styles.link}
          >
            {link.label}
          </Link>
        ))}
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
      fontSize: "16px",
      position: "relative",
    }
  };
  

export default Navbar;
