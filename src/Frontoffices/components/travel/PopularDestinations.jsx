import { Link } from "react-router-dom";

const destinations = [
  { id: 1, name: "Madrid" },
  { id: 2, name: "Barcelona" },
  { id: 3, name: "Valencia" },
  { id: 4, name: "Sevilla" },
  { id: 5, name: "Málaga" },
  { id: 6, name: "Bilbao" },
  { id: 7, name: "Almería" },
  { id: 8, name: "Vizcaya" },
  { id: 9, name: "Granada" },
  { id: 10, name: "Albacete" },
  { id: 11, name: "Cádiz" },
  { id: 12, name: "Alicante" }
];

const PopularDestinations = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Destinos populares para viajar con mascotas</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {destinations.map((destination) => (
          <div key={destination.id} className="col">
            <div className="accordion accordion-flush border-bottom" id={`accordion-${destination.id}`}>
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold d-flex justify-content-between align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${destination.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${destination.id}`}
                  >
                    {/* Título con "Viaja hacia ..." */}
                    <div className="d-flex flex-column">
                      <span>Viaja hacia {destination.name}</span>
                    </div>
                  </button>
                </h2>

                {/* Contenido vacío cuando se expande */}
                <div
                  id={`collapse-${destination.id}`}
                  className="accordion-collapse collapse"
                  data-bs-parent={`#accordion-${destination.id}`}
                >
                  <div className="accordion-body">
                    <p className="text-muted">
                      Explora opciones pet-friendly en {destination.name}. Encuentra alojamiento, transporte y cuidadores para tu mascota.
                    </p>
                    <Link to={`/viajar-con-ellos?donde=${destination.name}`} className="btn btn-primary btn-sm">
                      Ver más detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
