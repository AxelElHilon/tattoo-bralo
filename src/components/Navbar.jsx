import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // Ya estás en el home
      const header = document.getElementById('home');
      if (header) {
        header.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Estás en otra ruta, redirigí y después hacé scroll
      navigate('/');
      setTimeout(() => {
        const header = document.getElementById('home');
        if (header) {
          header.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-fondo text-crema shadow-lg py-4 px-6">
      <div className="navbar-container flex justify-between items-center">
        <h1 className="logo text-2xl font-bold tracking-wide">Bralo Tattoo</h1>

        <ul className="nav-links flex gap-8 items-center">
          <li className="nav-item group">
            <button onClick={handleHomeClick} className="nav-link bg-transparent border-none cursor-pointer">
              Home
              <span className="underline-hover"></span>
            </button>
          </li>
          <li className="nav-item group">
            <Link to="/shop" className="nav-link">
              Shop
              <span className="underline-hover"></span>
            </Link>
          </li>
          <li className="nav-item group">
             <Link to="/contact" className="nav-link">
               Contacto
               <span className="underline-hover"></span>
             </Link>
</li>
          <li className="nav-item flex gap-3 ml-4">
            <a
              href="https://www.instagram.com/bralotatuajes/"
              target="_blank"
              rel="noreferrer"
              className="social-icon hover:text-dorado transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/5491123456789"
              target="_blank"
              rel="noreferrer"
              className="social-icon hover:text-dorado transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
