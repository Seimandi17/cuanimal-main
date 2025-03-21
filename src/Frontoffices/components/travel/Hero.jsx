import { useState } from 'react';
import { Search, MapPin, Car, Calendar, Users } from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('destinos');

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Sección de Texto y Buscador */}
          <div className="col-lg-7">  {/* Se amplía esta columna */}
            <h1 className="fw-bold display-4 mb-3 text-dark">  
              Explora destinos pet-friendly con tu mascota
            </h1>
            <p className="lead text-secondary" style={{ maxWidth: '600px' }}> 
              Encuentra experiencias de viaje adaptadas para mascotas: playas, montañas, guarderías, restaurantes pet-friendly y más.
            </p>

            {/* Tabs */}
            <div className="d-flex gap-3 mt-4">
              {[
                { id: 'destinos', label: 'Destinos', icon: <MapPin size={20} /> },
                { id: 'servicios', label: 'Servicios', icon: <Car size={20} /> },
                { id: 'alojamiento', label: 'Alojamiento', icon: <Users size={20} /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`btn d-flex align-items-center gap-2 px-4 py-3 rounded-3 fw-semibold ${
                    activeTab === tab.id ? 'btn-primary text-white shadow-sm' : 'btn-light text-dark'
                  }`}
                  style={{ transition: 'all 0.2s ease-in-out', fontSize: '1rem' }}  
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Caja de Búsqueda */}
            <div className="bg-white rounded-4 shadow-lg p-4 mt-4" style={{ width: '100%', maxWidth: '750px' }}>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label text-muted">¿Dónde?</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light"><MapPin size={18} /></span>
                    <input 
                      type="text" 
                      placeholder="Ciudad o destino" 
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
                      placeholder="dd/mm/aaaa" 
                      className="form-control border-0"
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <label className="form-label text-muted">¿Con quién?</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light"><Users size={18} /></span>
                    <input 
                      type="text" 
                      placeholder="Adultos, Mascotas" 
                      className="form-control border-0"
                    />
                  </div>
                </div>

                <div className="col-12 d-flex align-items-center">
                  <input type="checkbox" id="transporte" className="me-2" />
                  <label htmlFor="transporte" className="text-muted">Solicitar transporte</label>
                  <button 
                    className="btn btn-primary ms-auto px-4 py-2"
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
          <div className="col-lg-5 d-none d-lg-block">
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
            border-radius: 15px;
          }

          .large {
            grid-column: span 2;
            height: 160px;
          }

          .medium {
            height: 120px;
          }

          .small {
            height: 80px;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
