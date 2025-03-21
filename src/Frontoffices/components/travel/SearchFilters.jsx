import { useState } from "react";
import { Search, MapPin, Calendar, Users, Truck } from "lucide-react";

const SearchFilters = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    date: "",
    guests: 1,
    pets: 1,
    transport: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="bg-white shadow-sm rounded p-4">
      <div className="row g-3">
        <div className="col-md-3">
          <label className="form-label">¿Qué buscas?</label>
          <select className="form-select" name="category" value={filters.category} onChange={handleChange}>
            <option value="">Selecciona una opción</option>
            <option value="playa">Playa</option>
            <option value="montaña">Montaña</option>
            <option value="guarderia">Guardería</option>
            <option value="restaurantes">Restaurantes Pet-Friendly</option>
            <option value="veterinarios">Veterinarios</option>
            <option value="fotografos">Fotógrafos de Mascotas</option>
          </select>
        </div>

        <div className="col-md-3">
          <label className="form-label">¿Dónde?</label>
          <div className="input-group">
            <span className="input-group-text"><MapPin size={18} /></span>
            <input type="text" className="form-control" name="location" placeholder="Ciudad" value={filters.location} onChange={handleChange} />
          </div>
        </div>

        <div className="col-md-3">
          <label className="form-label">¿Cuándo?</label>
          <div className="input-group">
            <span className="input-group-text"><Calendar size={18} /></span>
            <input type="date" className="form-control" name="date" value={filters.date} onChange={handleChange} />
          </div>
        </div>

        <div className="col-md-3">
          <label className="form-label">¿Con quién?</label>
          <div className="input-group">
            <span className="input-group-text"><Users size={18} /></span>
            <input type="number" className="form-control" name="guests" min="1" value={filters.guests} onChange={handleChange} />
            <span className="input-group-text">Adultos/Niños</span>
            <input type="number" className="form-control" name="pets" min="0" value={filters.pets} onChange={handleChange} />
            <span className="input-group-text">Mascotas</span>
          </div>
        </div>

        <div className="col-md-3 d-flex align-items-end">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="transport" id="transport" checked={filters.transport} onChange={handleChange} />
            <label className="form-check-label ms-2" htmlFor="transport">
              <Truck size={18} className="me-1" /> Solicitar transporte
            </label>
          </div>
        </div>

        <div className="col-md-3 d-flex align-items-end">
          <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center" onClick={() => onSearch(filters)}>
            <Search size={18} className="me-2" /> Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
