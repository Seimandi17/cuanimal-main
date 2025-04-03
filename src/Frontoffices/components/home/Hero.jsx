import { useNavigate } from "react-router-dom";
import { Hotel, PawPrint, Car, MapPin, Heart, Globe, Dog } from "lucide-react";

const categorias = [
  { nombre: "Adiestramiento", icon: <Dog size={20} />, path: "/adiestramiento" },
  { nombre: "Adopta", icon: <Heart size={20} />, path: "/adopta" },
  { nombre: "Alojamiento", icon: <Hotel size={20} />, path: "/alojamiento" },
  { nombre: "Todo para tu amigo", icon: <PawPrint size={20} />, path: "/todo-para-tu-amigo" },
  { nombre: "Paseo", icon: <MapPin size={20} />, path: "/paseo" },
  { nombre: "Transporte de Mascotas", icon: <Car size={20} />, path: "/transporte-de-mascotas" },
  { nombre: "Viajar con ellos", icon: <Globe size={20} />, path: "/viajar-con-ellos" }
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Texto */}
          <div className="col-lg-7 text-section">
            <h1 className="fw-bold display-4 mb-3 text-dark">
              Encuentra todo lo que tu mascota necesita
            </h1>
            <p className="lead text-secondary" style={{ maxWidth: "550px" }}>
              Alojamiento, transporte, cuidadores y más servicios pet-friendly en un solo lugar.
            </p>

            {/* Carrusel de categorías */}
            <div className="carousel-wrapper mt-4"style={{ overflow: "hidden" }}>
              <div className="carousel-track">
                {categorias.map((cat, i) => (
                  <div
                    key={i}
                    className="categoria-card"
                    onClick={() => navigate(cat.path)}
                  >
                    <div className="icono">{cat.icon}</div>
                    <span>{cat.nombre}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imágenes */}
          <div className="col-lg-5 d-none d-lg-block image-section">
            <div className="image-grid">
              <img src="/img/mascota-viaja.jpg" className="grid-item large" alt="1" />
              <img src="/img/mascota-parque.jpg" className="grid-item medium" alt="2" />
              <img src="/img/mascota-hotel.jpg" className="grid-item medium" alt="3" />
              <img src="/img/mascota-transporte.jpg" className="grid-item medium" alt="4" />
              <img src="/img/mascota-playa.jpeg" className="grid-item medium" alt="5" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background-color: #f8f9fa;
        }
        .text-section {
          padding-right: 50px;
        }
        .carousel-track {
          display: flex;
          gap: 1rem;
          animation: scroll 20s linear infinite;
          width: max-content;
        }
        .categoria-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 50px;
          padding: 0.75rem 1.5rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          white-space: nowrap;
          transition: all 0.3s;
        }
        .categoria-card:hover {
          background-color: #0d6efd;
          color: white;
        }
        .categoria-card:hover .icono {
          color: white;
        }
        .icono {
          color: #0d6efd;
        }
        .image-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin-left: 30px;
        }
        .grid-item {
          width: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
        .large {
          grid-column: span 2;
          height: 160px;
        }
        .medium {
          height: 120px;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Hero;