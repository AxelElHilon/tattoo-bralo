// src/components/Header.jsx
import '../styles/Header.css';

function Header() {
  return (
    <header id="home" className="header fade-up py-20 px-4 sm:px-6 lg:px-12 text-center bg-fondo text-crema">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
        Arte que marca
      </h2>
      <p className="text-xl mb-8 text-crema/80 animate-fade-in-up delay-200">
        Tatuajes tradicionales y cuadros únicos desde el corazón de San Martín
      </p>
      <a
        href="https://wa.me/5491123456789?text=Hola!%20Quiero%20pedir%20un%20turno%20para%20tatuarme."
        target="_blank"
        rel="noreferrer"
        className="cta-button bg-dorado text-fondo font-bold px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105 hover:animate-vibrate inline-block"
      >
        Pedí tu turno
      </a>
    </header>
  );
}

export default Header;
