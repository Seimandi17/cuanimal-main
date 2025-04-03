import React from "react";
import "../../styles/category/ServiceList.css";

const ServiceListExplora = ({ servicios = [] }) => {
  return (
    <div className="servicios-list container py-4">
      {servicios.length > 0 ? (
        <div className="row g-4">
          {servicios.map((servicio) => (
            <div className="col-md-4" key={servicio.id}>
              <div className="card h-100 shadow-sm">
                {servicio.coverImg && (
                  <img
                    src={`http://localhost:8000/storage/${servicio.coverImg}`}
                    alt={servicio.name}
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title fw-bold">{servicio.name}</h5>
                  <p className="card-text">
                    {servicio.description.slice(0, 80)}...
                  </p>
                  <p className="fw-semibold mb-1">Desde {servicio.price}€</p>
                  <p className="small text-muted">
                    {servicio.city} – {servicio.provider_name || "Anónimo"}
                  </p>
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
          <p>No se encontraron servicios que coincidan con tus filtros.</p>
        </div>
      )}
    </div>
  );
};

export default ServiceListExplora;
