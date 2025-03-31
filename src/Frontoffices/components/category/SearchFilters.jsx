import { useState } from "react";
import "../../styles/category/SearchFilters.css";

const SearchFilters = ({ onFiltrosChange }) => {
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [orden, setOrden] = useState("recientes");

  const handleAplicar = () => {
    const filtros = {
      precioMin,
      precioMax,
      orden,
    };

    onFiltrosChange(filtros);
  };

  return (
    <div className="search-filters container my-4">
      <div className="row g-3 align-items-end bg-white shadow-sm rounded p-4">
        <div className="col-md-3">
          <label className="form-label">Precio mínimo</label>
          <input
            type="number"
            className="form-control"
            value={precioMin}
            onChange={(e) => setPrecioMin(e.target.value)}
            placeholder="Ej: 10"
            min={0}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Precio máximo</label>
          <input
            type="number"
            className="form-control"
            value={precioMax}
            onChange={(e) => setPrecioMax(e.target.value)}
            placeholder="Ej: 100"
            min={0}
          />
        </div>

        <div className="col-md-4">
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

        <div className="col-md-2 d-grid">
          <button className="btn btn-primary" onClick={handleAplicar}>
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
