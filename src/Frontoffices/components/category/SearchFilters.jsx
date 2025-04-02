import { useState, useEffect } from "react";
import "../../styles/category/SearchFilters.css";
import { Search } from "lucide-react";

const SearchFilters = ({ onFiltrosChange }) => {
  const [busqueda, setBusqueda] = useState("");
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(200);
  const [orden, setOrden] = useState("recientes");

  useEffect(() => {
    onFiltrosChange({
      busqueda,
      precioMin,
      precioMax,
      orden,
    });
  }, [busqueda, precioMin, precioMax, orden]);

  return (
    <div className="filtros-laterales shadow-sm p-4 rounded bg-white">
      <h5 className="fw-bold mb-3">Filtros</h5>

      {/* Búsqueda */}
      <div className="mb-4">
        <label className="form-label">Buscar</label>
        <div className="input-group">
          <span className="input-group-text bg-light">
            <Search size={16} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre o descripción"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {/* Precio mínimo */}
      <div className="mb-4">
        <label className="form-label">
          Precio mínimo: <strong>{precioMin}€</strong>
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max={precioMax}
          step="5"
          value={precioMin}
          onChange={(e) => setPrecioMin(Number(e.target.value))}
        />
      </div>

      {/* Precio máximo */}
      <div className="mb-4">
        <label className="form-label">
          Precio máximo: <strong>{precioMax}€</strong>
        </label>
        <input
          type="range"
          className="form-range"
          min={precioMin}
          max="500"
          step="5"
          value={precioMax}
          onChange={(e) => setPrecioMax(Number(e.target.value))}
        />
      </div>

      {/* Ordenar por */}
      <div className="mb-3">
        <label className="form-label">Ordenar por</label>
        <select
          className="form-select"
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
        >
          <option value="recientes">Más recientes</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilters;
