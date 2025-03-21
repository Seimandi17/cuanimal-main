import { Link } from "react-router-dom";

const HeroProveedores = () => {
  return (
    <section className="hero-proveedores">
      <div className="container">
        <div className="hero-content">
          <h1 className="fw-bold">Gestiona y Publica tus Servicios</h1>
          <p className="lead">
            Sube tus servicios, edítalos y administra tus publicaciones desde un solo lugar.
          </p>
          <div className="hero-buttons">
            <Link to="/proveedores/agregar-servicio" className="btn btn-primary">
              Agregar Servicio
            </Link>
            <Link to="/proveedores/gestion" className="btn btn-outline-primary">
              Administrar Servicios
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/img/hero-proveedores.svg" alt="Gestión de Servicios" />
        </div>
      </div>
    </section>
  );
};

export default HeroProveedores;
