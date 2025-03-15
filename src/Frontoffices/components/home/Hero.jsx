import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Hotel, MapPin, Car, Calendar } from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('alojamiento');

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Sección de Texto y Buscador */}
          <div className="col-lg-6">
            <h1 className="fw-bold display-5 mb-3 text-dark">
              Encuentra todo lo que tu mascota necesita
            </h1>
            <p className="lead text-secondary" style={{ maxWidth: '500px' }}>
              Alojamiento, transporte, cuidadores y más servicios pet-friendly en un solo lugar.
            </p>

            {/* Tabs */}
            <div className="d-flex gap-2 mt-4">
              {[
                { id: 'alojamiento', label: 'Alojamiento', icon: <Hotel size={20} /> },
                { id: 'cuidadores', label: 'Cuidadores', icon: <MapPin size={20} /> },
                { id: 'transporte', label: 'Transporte', icon: <Car size={20} /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`btn d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-semibold ${
                    activeTab === tab.id ? 'btn-primary text-white shadow-sm' : 'btn-light text-dark'
                  }`}
                  style={{ transition: 'all 0.2s ease-in-out' }}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Caja de Búsqueda */}
            <div className="bg-white rounded-4 shadow p-4 mt-4" style={{ width: '100%', maxWidth: '700px' }}>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label text-muted">¿Dónde?</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light"><MapPin size={18} /></span>
                    <input 
                      type="text" 
                      placeholder="¿A dónde viajas con tu mascota?" 
                      className="form-control border-0"
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
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <label className="form-label text-muted">¿Con quién?</label>
                  <button 
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-center rounded-3 fw-semibold"
                    style={{ transition: 'transform 0.2s ease-in-out' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Search size={18} className="me-2" /> Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Imágenes */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="image-grid">
              <img src="/mascota-viaja.jpg" alt="Mascota viajando" className="grid-item large" />
              <img src="/mascota-parque.jpg" alt="Mascota en un parque" className="grid-item small" />
              <img src="/mascota-hotel.jpg" alt="Hotel pet-friendly" className="grid-item medium" />
              <img src="/mascota-transporte.jpg" alt="Transporte para mascotas" className="grid-item small" />
              <img src="/mascota-playa.jpeg" alt="Playa pet-friendly" className="grid-item medium" />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style>
        {`
          .image-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 10px;
          }

          .grid-item {
            width: 100%;
            object-fit: cover;
            border-radius: 20px;
          }

          .large {
            grid-column: span 2;
            height: 180px;
          }

          .medium {
            height: 140px;
          }

          .small {
            height: 90px;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
