import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav>
      <button
        className="menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
        <li>
          <NavLink to="/" className="navlink" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" className="navlink" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="navlink" onClick={() => setIsOpen(false)}>
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="navlink" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;