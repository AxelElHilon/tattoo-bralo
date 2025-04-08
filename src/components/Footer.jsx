import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer bg-tinta text-crema py-8 px-6">
      <div className="footer-container max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up">
        <p className="footer-text text-sm md:text-base text-crema/70">
          © 2025 Bralo Tattoo · San Martín
        </p>
        <div className="footer-icons flex gap-5 text-xl">
          <a
            href="https://www.instagram.com/bralotatuajes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dorado transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dorado transition duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
