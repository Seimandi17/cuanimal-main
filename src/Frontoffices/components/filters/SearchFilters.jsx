import { useState, useEffect } from 'react';
import { Search, X, Tag, MapPin, Calendar, Users, Truck } from 'lucide-react';

const SearchFilters = ({ queOptions, conQuienOptions, onSearch }) => {
  const [filterOptions, setFilterOptions] = useState({
    que: [],
    donde: '',
    cuando: '',
    conQuien: [],
    necesitaTransporte: null
  });

  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleSearch = () => {
    onSearch(filterOptions);
  };

  const resetFilters = () => {
    setFilterOptions({
      que: [],
      donde: '',
      cuando: '',
      conQuien: [],
      necesitaTransporte: null
    });
    setActiveSection(null);
  };

  const hasAnyFilter = () => {
    return (
      filterOptions.que.length > 0 ||
      filterOptions.donde !== '' ||
      filterOptions.cuando !== '' ||
      filterOptions.conQuien.length > 0 ||
      filterOptions.necesitaTransporte !== null
    );
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h3 className="fw-bold text-center mb-4">Filtrar resultados</h3>

        <div className="row g-3">
          {/* ¿Qué buscas? */}
          <div className="col-md-4">
            <label className="fw-semibold d-flex align-items-center">
              <Tag size={18} className="me-2 text-primary" />
              ¿Qué buscas?
            </label>
            <select
              className="form-select"
              multiple
              value={filterOptions.que}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  que: Array.from(e.target.selectedOptions, (option) => option.value)
                })
              }
            >
              {queOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* ¿Dónde? */}
          <div className="col-md-4">
            <label className="fw-semibold d-flex align-items-center">
              <MapPin size={18} className="me-2 text-primary" />
              ¿Dónde?
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ciudad o provincia"
              value={filterOptions.donde}
              onChange={(e) => setFilterOptions({ ...filterOptions, donde: e.target.value })}
            />
          </div>

          {/* ¿Cuándo? */}
          <div className="col-md-4">
            <label className="fw-semibold d-flex align-items-center">
              <Calendar size={18} className="me-2 text-primary" />
              ¿Cuándo?
            </label>
            <input
              type="date"
              className="form-control"
              value={filterOptions.cuando}
              onChange={(e) => setFilterOptions({ ...filterOptions, cuando: e.target.value })}
            />
          </div>

          {/* ¿Con quién? */}
          <div className="col-md-4">
            <label className="fw-semibold d-flex align-items-center">
              <Users size={18} className="me-2 text-primary" />
              ¿Con quién?
            </label>
            <select
              className="form-select"
              multiple
              value={filterOptions.conQuien}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  conQuien: Array.from(e.target.selectedOptions, (option) => option.value)
                })
              }
            >
              {conQuienOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* ¿Transporte? */}
          <div className="col-md-4">
            <label className="fw-semibold d-flex align-items-center">
              <Truck size={18} className="me-2 text-primary" />
              ¿Transporte?
            </label>
            <div className="d-flex gap-2">
              <button
                className={`btn ${filterOptions.necesitaTransporte === true ? 'btn-primary' : 'btn-outline-primary'} w-50`}
                onClick={() => setFilterOptions({ ...filterOptions, necesitaTransporte: true })}
              >
                Sí
              </button>
              <button
                className={`btn ${filterOptions.necesitaTransporte === false ? 'btn-primary' : 'btn-outline-primary'} w-50`}
                onClick={() => setFilterOptions({ ...filterOptions, necesitaTransporte: false })}
              >
                No
              </button>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-primary d-flex align-items-center" onClick={handleSearch}>
            <Search size={18} className="me-2" /> Buscar
          </button>

          {hasAnyFilter() && (
            <button className="btn btn-outline-secondary d-flex align-items-center" onClick={resetFilters}>
              <X size={18} className="me-2" /> Limpiar filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
