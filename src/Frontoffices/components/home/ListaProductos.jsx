import { useEffect, useState } from "react";
import '../../styles/ListaProductos.css';

const ListaProductos = ({ categoriaFiltrada = null, titulo = "Nuestros Servicios" }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Productos de prueba (mock data)
    const productosDemo = [
      {
        id: 1,
        name: "Paseo de Mascotas",
        description: "Servicio de paseo diario para tu perro con mucho amor.",
        price: 15,
        city: "Madrid",
        province: "Madrid",
        coverImg: "/img/mascota-playa.jpeg"
      },
      {
        id: 2,
        name: "Alojamiento para Mascotas",
        description: "Hospedaje seguro y cómodo mientras estás de viaje.",
        price: 35,
        city: "Barcelona",
        province: "Cataluña",
        coverImg: "/img/mascota-hotel.jpg"
      },
      {
        id: 3,
        name: "Veterinario a Domicilio",
        description: "Consulta veterinaria en tu hogar, sin estrés para tu mascota.",
        price: 50,
        city: "Valencia",
        province: "Comunidad Valenciana",
        coverImg: "/img/mascota-transporte.jpg"
      }
    ];

    const filtrados = categoriaFiltrada
      ? productosDemo.filter(prod => prod.category_id == categoriaFiltrada)
      : productosDemo;

    setProductos(filtrados);
  }, [categoriaFiltrada]);

  return (
    <div className="lista-productos-container container mt-5">
      <h2 className="mb-4 text-center">{titulo}</h2>
      <div className="row">
        {productos.length > 0 ? (
          productos.map((prod, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={prod.coverImg || "/placeholder.jpg"}
                  className="card-img-top"
                  alt={prod.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{prod.name}</h5>
                  <p className="card-text">{prod.description}</p>
                  <p><strong>Precio:</strong> €{prod.price}</p>
                  <p><strong>Ubicación:</strong> {prod.city}, {prod.province}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No hay servicios disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ListaProductos;
