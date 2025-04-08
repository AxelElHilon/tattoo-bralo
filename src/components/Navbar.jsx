import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = () => {
    setMenuOpen(false); // cerrar menú si se abre desde mobile
    if (location.pathname === '/') {
      const header = document.getElementById('home');
      if (header) header.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const header = document.getElementById('home');
        if (header) header.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50">
      <div className="navbar-container">
        <h1 className="logo text-2xl font-bold">Bralo Tattoo</h1>

        {/* Botón hamburguesa */}
        <button className="menu-toggle md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menú de navegación */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item group">
            <button onClick={handleHomeClick} className="nav-link">
              Home <span className="underline-hover"></span>
            </button>
          </li>
          <li className="nav-item group">
            <Link to="/shop" className="nav-link" onClick={() => setMenuOpen(false)}>
              Shop <span className="underline-hover"></span>
            </Link>
          </li>
          <li className="nav-item group">
            <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contacto <span className="underline-hover"></span>
            </Link>
          </li>
          <li className="nav-item flex gap-3 mt-4 md:mt-0 ml-0 md:ml-4">
            <a href="https://www.instagram.com/bralotatuajes/" target="_blank" rel="noreferrer" className="social-icon hover:text-dorado">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/5491123456789" target="_blank" rel="noreferrer" className="social-icon hover:text-dorado">
              <FaWhatsapp size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
