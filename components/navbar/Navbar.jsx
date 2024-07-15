import "../navbar/navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosReturnLeft } from "react-icons/io";1

export default function Navbar() {
   
  return (
    <div className="navbar">
      <nav className="navbar-nav">
        <NavLink to="/about-me" className="nav-link-text" activeclassname="active">
          Sobre mí
        </NavLink>
        <NavLink to="/certifications" className="nav-link-text" activeclassname="active">
          Certificaciones
        </NavLink>
        <NavLink to="/projects" className="nav-link-text" activeclassname="active">
          Proyectos
        </NavLink>
      </nav>
      <nav className="navbar-nav2">
        <NavLink to="/" className="nav-link-sh">
        <IoIosReturnLeft className="nav-link" size={30} />
        </NavLink>
      </nav>
      <nav className="navbar-nav3">
        <a
          href="https://github.com/SebastianHernandez0"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="nav-link" size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/sebasti%C3%A1n-hern%C3%A1ndez-b48115280/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="nav-link" size={30} />
        </a>
      </nav>
    </div>
  );
}
