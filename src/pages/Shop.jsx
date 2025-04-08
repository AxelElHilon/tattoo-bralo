import "../styles/Shop.css";



function Shop() {
  const cuadros = [
    {
      id: 1,
      titulo: "Dragón Japonés",
      precio: "$20.000",
      imagen: "/img/dragon.jpg",
    },
    {
      id: 2,
      titulo: "Tigre Tradicional",
      precio: "$18.000",
      imagen: "/img/tigre.jpg",
    },
    {
      id: 3,
      titulo: "Geisha",
      precio: "$22.000",
      imagen: "/img/geisha.jpg",
    },
  ];

  return (
    <section id="shop" className="shop-section">
  <h2 className="shop-title">Cuadros a la venta</h2>

  <div className="shop-grid">
    {cuadros.map((cuadro) => (
      <div key={cuadro.id} className="shop-card">
        <img src={cuadro.imagen} alt={cuadro.titulo} className="shop-img" />
        <div className="shop-info">
          <h3 className="text-2xl font-semibold">{cuadro.titulo}</h3>
          <p className="shop-price">{cuadro.precio}</p>
          <a
            href={`https://wa.me/5491123456789?text=Hola! Me interesa el cuadro "${cuadro.titulo}"`}
            target="_blank"
            className="shop-btn"
          >
            Consultar
          </a>
        </div>
      </div>
    ))}
  </div>
  <footer id="contact"  className="bg-tinta text-crema py-6 px-4 text-center">
      <p>&copy; {new Date().getFullYear()} Bralo Tattoo - Todos los derechos reservados</p>
      <p className="text-sm mt-2">San Martín, Buenos Aires</p>
  </footer>
</section>


  );
}

export default Shop;
