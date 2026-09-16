import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* PROFILE PHOTO + MY PORTFOLIO */}
        <a href="#home" className="logo" onClick={closeMenu}>

          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Profile"
            className="navbar-profile-photo"
          />

          <span className="logo-text">
            My Portfolio
          </span>

        </a>

        {/* MOBILE MENU */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* NAVIGATION */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;