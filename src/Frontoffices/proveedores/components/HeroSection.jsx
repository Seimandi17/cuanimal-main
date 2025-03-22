import { Link } from "react-router-dom";

const HeroProveedores = ({ onShowForm }) => {
  return (
    <section className="hero-proveedores">
      <div className="container hero-content-wrapper">
        <div className="hero-content">
          <h1 className="fw-bold">Gestiona y Publica tus Servicios</h1>
          <p className="lead">
            Sube tus servicios, edítalos y administra tus publicaciones desde un solo lugar.
          </p>
          <div className="hero-buttons">
            {/* Botón que muestra el formulario */}
            <button onClick={onShowForm} className="btn btn-primary">
              Agregar Servicio
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/img/proveedores2.webp" alt="Gestión de Servicios" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroProveedores;
