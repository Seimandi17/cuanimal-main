import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../../Backoffices/store/products/storeProducts';

const destinations = [
  { id: 1, name: 'Madrid' }, { id: 2, name: 'Barcelona' }, { id: 3, name: 'Valencia' },
  { id: 4, name: 'Sevilla' }, { id: 5, name: 'Málaga' }, { id: 6, name: 'Bilbao' },
  { id: 7, name: 'Almería' }, { id: 8, name: 'Vizcaya' }, { id: 9, name: 'Granada' },
  { id: 10, name: 'Albacete' }, { id: 11, name: 'Cádiz' }, { id: 12, name: 'Alicante' }
];

const PopularDestinations = () => {
  const [servicios, setServicios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      setServicios(data);
    };
    fetchData();
  }, []);

  const renderServicios = (provincia, tipo) => {
    const filtrados = servicios.filter(s => s.province === provincia && s.category === tipo);
    if (filtrados.length === 0) return <p className="text-muted">No hay servicios de {tipo.toLowerCase()} disponibles.</p>;

    return (
      <ul className="list-unstyled">
        {filtrados.map(serv => (
          <li key={serv.id} className="mb-2">
            <div className="d-flex justify-content-between align-items-center">
              <span>{serv.name} – <strong>{serv.price}€</strong></span>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => navigate(`/servicio/${serv.id}`)}
              >
                Ver más
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Destinos populares con mascotas</h2>

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
                    <div className="d-flex flex-column">
                      <span>{destination.name}</span>
                      <span className="text-muted sm">Transportes · Alojamiento · Cuidadores</span>
                    </div>
                  </button>
                </h2>

                <div
                  id={`collapse-${destination.id}`}
                  className="accordion-collapse collapse"
                  data-bs-parent={`#accordion-${destination.id}`}
                >
                  <div className="accordion-body">
                    <h6 className="fw-bold">Transporte</h6>
                    {renderServicios(destination.name, 'Transporte')}
                    <h6 className="fw-bold mt-3">Alojamiento</h6>
                    {renderServicios(destination.name, 'Alojamiento')}
                    <h6 className="fw-bold mt-3">Adiestramiento</h6>
                    {renderServicios(destination.name, 'Adiestramiento')}
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
