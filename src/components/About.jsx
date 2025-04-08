// src/components/About.jsx
import '../styles/About.css';

function About() {
  return (
    <section className="bg-tinta text-crema py-20 px-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="./img/bralo.png"
          alt="Bralo"
          className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover border-4 border-dorado shadow-xl hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-4xl font-bold mb-4 tracking-wide text-dorado drop-shadow">
          Bralo
        </h3>
        <p className="text-lg md:text-xl leading-relaxed text-crema/90 px-4">
          Tatuador con más de 5 años de experiencia en los estilos
          <strong> Tradicional Japonés</strong> y <strong>Old School</strong>.
          Cada trazo es arte con historia, hecho a mano, con alma y tradición desde el corazón de San Martín.
        </p>
      </div>
    </section>
  );
}

export default About;
