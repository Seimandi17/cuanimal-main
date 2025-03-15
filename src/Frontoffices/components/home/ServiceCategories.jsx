import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, linkTo, color }) => {
  return (
    <div className="col-md-4">
      <Link to={linkTo} className="text-decoration-none">
        <div className="card text-center shadow-sm border-0 p-4">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{ width: '80px', height: '80px', backgroundColor: color }}
          >
            <img src={icon} alt={title} className="img-fluid" style={{ width: '40px', height: '40px' }} />
          </div>
          <h3 className="h5 fw-bold">{title}</h3>
          <p className="text-muted">{description}</p>
        </div>
      </Link>
    </div>
  );
};

const ServiceCategories = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Nuestros Servicios</h2>
        <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
          Todo lo que necesitas para ofrecer lo mejor a tu mascota, en un solo lugar.
        </p>

        <div className="row mt-4 g-4">
          <ServiceCard
            title="Viajar con Ellos"
            description="Descubre destinos pet-friendly para disfrutar con tu mascota."
            icon="/lovable-uploads/1ef040c5-c37a-4c99-b6c8-fb65982ce871.png"
            linkTo="/viajar-con-ellos"
            color="#007bff"
          />
          <ServiceCard
            title="Transporte de Mascotas"
            description="Soluciones de transporte seguras para tu mascota."
            icon="/lovable-uploads/1ef040c5-c37a-4c99-b6c8-fb65982ce871.png"
            linkTo="/transporte-mascotas"
            color="#20c997"
          />
          <ServiceCard
            title="Paseo/Adiestramiento"
            description="Profesionales cualificados para pasear y adiestrar a tu mascota."
            icon="/lovable-uploads/1ef040c5-c37a-4c99-b6c8-fb65982ce871.png"
            linkTo="/paseo-adiestramiento"
            color="#0056b3"
          />
          <ServiceCard
            title="Todo para tu Amigo"
            description="Productos de calidad para el cuidado y bienestar de tu mascota."
            icon="/lovable-uploads/1ef040c5-c37a-4c99-b6c8-fb65982ce871.png"
            linkTo="/todo-para-tu-amigo"
            color="#ffc107"
          />
          <ServiceCard
            title="¡Adopta!"
            description="Encuentra centros de adopción verificados en toda España."
            icon="/lovable-uploads/1ef040c5-c37a-4c99-b6c8-fb65982ce871.png"
            linkTo="/adopta"
            color="#17a2b8"
          />
          <ServiceCard
            title="Blog"
            description="Consejos y noticias sobre el mundo de las mascotas."
            icon="/lovable-uploads/1ef040c5-c37a-4c99-b6c8-fb65982ce871.png"
            linkTo="/blog"
            color="#007bff"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
