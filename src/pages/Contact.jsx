// src/pages/Contact.jsx
import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    idea: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hola! Soy ${formData.name} y tengo una idea para un tatuaje: ${formData.idea}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Mostrar mensaje de confirmación
    setSubmitted(true);

    // Resetear campos después de unos segundos (opcional)
    setTimeout(() => {
      setFormData({ name: "", idea: "" });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact-page py-20 px-6 bg-fondo text-crema">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contanos tu idea</h2>
        <p className="mb-8 text-lg">
          Mandanos tu inspiración y hablamos por WhatsApp
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="p-3 rounded bg-tinta text-crema border border-crema/30"
            required
          />
          <textarea
            name="idea"
            value={formData.idea}
            onChange={handleChange}
            placeholder="Contanos tu idea para el tatuaje"
            rows="5"
            className="p-3 rounded bg-tinta text-crema border border-crema/30"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-dorado text-fondo font-semibold py-3 rounded-full hover:bg-red-600 transition duration-300"
          >
            Enviar a WhatsApp
          </button>
        </form>
        {submitted && (
          <div className="mt-6 bg-green-600/20 border border-green-400 text-green-200 p-4 rounded-lg flex items-center justify-center gap-2 animate-fade-in-up shadow-md">
            <span className="text-2xl">💬</span>
            <p className="font-semibold text-lg">
              ¡Gracias por tu mensaje! Te esperamos en WhatsApp.
            </p>
          </div>
)}
      </div>
    </section>
  );
}

export default Contact;
