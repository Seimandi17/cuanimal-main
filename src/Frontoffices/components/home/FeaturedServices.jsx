import { Link } from 'react-router-dom';
import { Hotel, Car, MapPin, PawPrint } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Alojamiento para mascotas',
    description: 'Encuentra hoteles, apartamentos y casas rurales donde tu mascota es bienvenida.',
    icon: <Hotel size={40} className="text-primary" />,
    link: '/alojamiento'
  },
  {
    id: 2,
    title: 'Transporte de mascotas',
    description: 'Servicios de transporte especializado para que tu mascota viaje segura.',
    icon: <Car size={40} className="text-primary" />,
    link: '/transporte-de-mascotas'
  },
  {
    id: 3,
    title: 'Cuidadores a domicilio',
    description: 'Paseadores y cuidadores profesionales que se encargarán de tu mascota.',
    icon: <PawPrint size={40} className="text-primary" />,
    link: '/adiestramiento'
  },
  {
    id: 4,
    title: 'Lugares pet-friendly',
    description: 'Restaurantes, cafeterías, parques y playas donde tu mascota es bienvenida.',
    icon: <MapPin size={40} className="text-primary" />,
    link: '/viajar-con-ellos'
  }
];

const FeaturedServices = () => {
  return (
    <div className="container py-5">
      {/* Título */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Nuestros servicios principales</h2>
        <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
          Todo lo que necesitas para disfrutar con tu mascota, en un solo lugar.
        </p>
      </div>

      {/* Servicios en columnas */}
      <div className="row g-4">
        {services.map((service) => (
          <div key={service.id} className="col-12 col-md-6 col-lg-3 d-flex">
            <div 
              className="card border-0 shadow-sm p-4 text-center flex-grow-1 rounded-4"
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.05)';
              }}
            >
              <div className="mb-3">{service.icon}</div>
              <h3 className="h6 fw-bold">{service.title}</h3>
              <p className="text-secondary small">{service.description}</p>
              <Link to={service.link} className="text-primary fw-medium text-decoration-none">
                Ver más →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
