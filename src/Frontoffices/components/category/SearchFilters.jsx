import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/category/SearchFilters.css";
import { Search } from "lucide-react";
const provinciasEspaña = [
  "Coruña", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila",
  "Badajoz", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria",
  "Castellón", "Ceuta", "Ciudad Real", "Córdoba", "Cuenca", "Girona",
  "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Illes Balears",
  "Jaén", "La Rioja", "Las Palmas", "León", "Lleida", "Lugo", "Madrid",
  "Málaga", "Melilla", "Murcia", "Navarra", "Ourense", "Palencia",
  "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla",
  "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid",
  "Vizcaya", "Zamora", "Zaragoza"
];

const tiposMascotas = ["perro", "gato", "ambos"];
const categorias = [
  "Adiestramiento", "Adopta", "Alojamiento", "Todo para tu amigo",
  "Paseo", "Transporte de Mascotas", "Viajar con ellos"
];

const SearchFilters = ({ onFiltrosChange }) => {
  const location = useLocation();

  const [busqueda, setBusqueda] = useState("");
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(200);
  const [orden, setOrden] = useState("recientes");
  const [mascotas, setMascotas] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

  const handleCheckboxChange = (valor, grupo, setGrupo) => {
    if (grupo.includes(valor)) {
      setGrupo(grupo.filter((v) => v !== valor));
    } else {
      setGrupo([...grupo, valor]);
    }
  };

  useEffect(() => {
    onFiltrosChange({
      busqueda,
      precioMin,
      precioMax,
      orden,
      mascotas,
      provincias,
      categorias: categoriasSeleccionadas
    });
  }, [busqueda, precioMin, precioMax, orden, mascotas, provincias, categoriasSeleccionadas]);

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

      {/* Tipo de mascota */}
      <div className="mb-4">
        <label className="form-label">Tipo de mascota</label>
        {tiposMascotas.map((tipo) => (
          <div className="form-check" key={tipo}>
            <input
              className="form-check-input"
              type="checkbox"
              value={tipo}
              checked={mascotas.includes(tipo)}
              onChange={() => handleCheckboxChange(tipo, mascotas, setMascotas)}
            />
            <label className="form-check-label text-capitalize">{tipo}</label>
          </div>
        ))}
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

      {/* Solo mostrar categorías si estamos en la ruta de Explorer */}
      {location.pathname === "/explorer" && (
        <div className="mb-4">
          <label className="form-label">Categoría</label>
          {categorias.map((cat) => (
            <div className="form-check" key={cat}>
              <input
                className="form-check-input"
                type="checkbox"
                value={cat}
                checked={categoriasSeleccionadas.includes(cat)}
                onChange={() => handleCheckboxChange(cat, categoriasSeleccionadas, setCategoriasSeleccionadas)}
              />
              <label className="form-check-label">{cat}</label>
            </div>
          ))}
        </div>
      )}

      {/* Provincias */}
      <div className="mb-4">
        <label className="form-label">Provincia</label>
        <div className="provincias-scroll" style={{ maxHeight: "400px", overflowY: "auto" }}>
          {provinciasEspaña.map((prov) => (
            <div className="form-check" key={prov}>
              <input
                className="form-check-input"
                type="checkbox"
                value={prov}
                checked={provincias.includes(prov)}
                onChange={() => handleCheckboxChange(prov, provincias, setProvincias)}
              />
              <label className="form-check-label">{prov}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

 export default SearchFilters;