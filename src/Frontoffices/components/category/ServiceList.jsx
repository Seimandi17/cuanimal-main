import React from "react";
import "../../styles/category/ServiceList.css";

const ServiceList = ({ servicios = [], busqueda = "", categoria = "" }) => {
  const filtrados = servicios.filter((servicio) => {
    const coincideCategoria = servicio.category === categoria;
    const coincideBusqueda =
      servicio.name.toLowerCase().includes(busqueda.toLowerCase()) ||
      servicio.description.toLowerCase().includes(busqueda.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="servicios-list container py-4">
      {filtrados.length > 0 ? (
        <div className="row g-4">
          {filtrados.map((servicio) => (
            <div className="col-md-4" key={servicio.id}>
              <div className="card h-100 shadow-sm">
                {servicio.coverImg && (
                  <img
                    src={`https://api.cuanimal.com/storage/${servicio.coverImg}`}
                    alt={servicio.name}
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title fw-bold">{servicio.name}</h5>
                  <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                    {servicio.description.slice(0, 100)}...
                  </p>
                  <p className="fw-semibold mb-1">Precio: {servicio.price}€</p>
                  <p className="small text-muted">Proveedor: {servicio.provider_name || "Anónimo"}</p>
                  <button className="btn btn-outline-primary btn-sm w-100 mt-2">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted py-5">
          <p>No se encontraron servicios para esta categoría.</p>
        </div>
      )}
    </div>
  );
};

export default ServiceList;
