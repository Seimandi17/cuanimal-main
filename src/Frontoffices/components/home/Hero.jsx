import { useState } from 'react';
import { Search, Hotel, MapPin, Car, Calendar } from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('alojamiento');

  return (
    <div className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Sección de Texto y Buscador */}
          <div className="col-lg-7 text-section">
            <h1 className="fw-bold display-4 mb-3 text-dark">
              Encuentra todo lo que tu mascota necesita
            </h1>
            <p className="lead text-secondary" style={{ maxWidth: '550px' }}>
              Alojamiento, transporte, cuidadores y más servicios pet-friendly en un solo lugar.
            </p>

            {/* Tabs */}
            <div className="d-flex gap-2 mt-4">
              {[{ id: 'alojamiento', label: 'Alojamiento', icon: <Hotel size={20} /> },
                { id: 'cuidadores', label: 'Cuidadores', icon: <MapPin size={20} /> },
                { id: 'transporte', label: 'Transporte', icon: <Car size={20} /> }].map(tab => (
                <button
                  key={tab.id}
                  className={`btn d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-semibold ${
                    activeTab === tab.id ? 'btn-primary text-white shadow-sm' : 'btn-light text-dark'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Caja de Búsqueda */}
            <div className="search-box p-3 mt-4">
              <div className="row g-3 align-items-center">
                <div className="col-md-4">
                  <label className="form-label text-muted">¿Dónde?</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light"><MapPin size={18} /></span>
                    <input 
                      type="text" 
                      placeholder="¿A dónde viajas con tu mascota?" 
                      className="form-control border-0"
                      style={{ height: '45px' }}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <label className="form-label text-muted">¿Cuándo?</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light"><Calendar size={18} /></span>
                    <input 
                      type="text" 
                      placeholder="Fechas de viaje" 
                      className="form-control border-0"
                      style={{ height: '45px' }}
                    />
                  </div>
                </div>

                <div className="col-md-4 d-flex align-items-end">
                  <button 
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-center rounded-3 fw-semibold"
                    style={{ height: '45px' }}
                  >
                    <Search size={18} className="me-2" /> Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Imágenes */}
          <div className="col-lg-5 d-none d-lg-block image-section">
            <div className="image-grid">
              <img src="/img/mascota-viaja.jpg" alt="Mascota viajando" className="grid-item large" />
              <img src="/img/mascota-parque.jpg" alt="Mascota en un parque" className="grid-item medium" />
              <img src="/img/mascota-hotel.jpg" alt="Hotel pet-friendly" className="grid-item medium" />
              <img src="/img/mascota-transporte.jpg" alt="Transporte para mascotas" className="grid-item medium" />
              <img src="/img/mascota-playa.jpeg" alt="Playa pet-friendly" className="grid-item medium" />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style>
        {`
          .hero-section {
            background-color: #f8f9fa;
          }

          .text-section {
            padding-right: 50px;
          }

          .search-box {
            background: white;
            border-radius: 15px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }

          .input-group {
            display: flex;
            align-items: center;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #ddd;
          }

          .input-group-text {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f8f9fa;
            border: none;
            padding: 10px;
          }

          .image-section {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .image-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 8px;
            margin-left: 30px; /* Mueve las imágenes más hacia la derecha */
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
        `}
      </style>
    </div>
  );
};

export default Hero;
