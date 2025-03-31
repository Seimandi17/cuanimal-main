import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const HeroCategoria = ({
  titulo,
  descripcion,
  placeholder = "Buscar servicios...",
  imagenPrincipal,
  imagenesSecundarias = [],
  onBuscar
}) => {
  const [busqueda, setBusqueda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onBuscar) onBuscar(busqueda);
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Texto y búsqueda */}
          <div className="col-lg-7">
            <h1 className="fw-bold display-5 mb-3 text-dark">{titulo}</h1>
            <p className="lead text-secondary" style={{ maxWidth: '600px' }}>
              {descripcion}
            </p>

            {/* Buscador simple */}
            <form onSubmit={handleSubmit} className="bg-white rounded-4 shadow-lg p-4 mt-4" style={{ maxWidth: '750px' }}>
              <label className="form-label text-muted">¿Qué estás buscando?</label>
              <div className="input-group">
                <span className="input-group-text bg-light"><MapPin size={18} /></span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder={placeholder}
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <button className="btn btn-primary px-4" type="submit">
                  <Search size={18} className="me-2" /> Buscar
                </button>
              </div>
            </form>
          </div>

          {/* Imágenes */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="image-grid">
              {imagenPrincipal && (
                <img src={imagenPrincipal} alt="Principal" className="grid-item large" />
              )}
              {imagenesSecundarias.map((img, index) => (
                <img key={index} src={img} alt={`extra-${index}`} className="grid-item medium" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Estilos inline para grid */}
      <style>
        {`
          .image-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            margin-left: 30px;
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
        `}
      </style>
    </div>
  );
};

export default HeroCategoria;
