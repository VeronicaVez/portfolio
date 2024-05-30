import { Nav } from "react-bootstrap"
import { useState } from "react"
import "./NavBar.css"

function NavBar() {
  return (
    <div className="Navbar">
      <Nav className="fixed">
        <a href="#home" className="text">
          Home
        </a>
        <a href="#about-me" className="text">
          About me
        </a>
        <a href="#projects" className="text">
          Projects
        </a>
        <a href="#contact-me" className="text">
          Contact me
        </a>
      </Nav>
    </div>
  )
}

export default NavBar
