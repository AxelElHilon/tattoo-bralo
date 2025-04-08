// src/components/Gallery.jsx
import { useState, useEffect } from 'react';
import '../styles/Gallery.css';

const images = [
  { src: "./img/cuadro1.png", title: "Guerrero mitológico japónes y pez koi" },
  { src: "./img/cuadro2.png", title: "Geisha tradicional con flores" },
  { src: "./img/cuadro3.png", title: "Máscara Oni con flores" },
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImg ? "hidden" : "auto";
  }, [selectedImg]);

  return (
    <section className="bg-fondo text-crema py-20 px-4 sm:px-6 lg:px-12">
      <h3 className="text-4xl font-bold text-center mb-12 text-dorado animate-fade-in-up">
        Tattoos
      </h3>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up delay-200">
        {images.map((img, i) => (
          <div
            key={i}
            className="bg-tinta rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => setSelectedImg(img)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h4 className="text-xl font-bold">{img.title}</h4>
              <p className="text-sm text-crema/70">Consultá por WhatsApp</p>
              <a
                href={`https://wa.me/5491123456789?text=${encodeURIComponent(
                  `Hola! Me interesa el diseño de tatuaje: "${img.title}"`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-dorado text-fondo font-semibold text-center px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-105"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4 sm:mx-auto animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg.src}
              alt={selectedImg.title}
              className="rounded-lg max-h-[80vh] object-contain w-full"
            />
            <button
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full px-4 py-2 font-bold backdrop-blur hover:bg-red-800"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
