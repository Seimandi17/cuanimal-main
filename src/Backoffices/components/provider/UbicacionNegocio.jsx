import React from "react";
import "../../styles/provider/UbicacionNegocio.css";

const UbicacionNegocio = ({ ubicacion, setUbicacion }) => {
  if (!ubicacion) return null; 

  const handleChange = (e) => {
    setUbicacion({
      ...ubicacion,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="ubicacion-negocio card p-4 mb-4">
      <h4 className="fw-bold mb-3">Ubicación del Negocio</h4>

      <div className="mb-3">
        <label className="form-label">Provincia</label>
        <input
          type="text"
          className="form-control"
          name="provincia"
          value={ubicacion.provincia || ""}
          onChange={handleChange}
          placeholder="Ej: Madrid"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Ciudad</label>
        <input
          type="text"
          className="form-control"
          name="ciudad"
          value={ubicacion.ciudad || ""}
          onChange={handleChange}
          placeholder="Ej: Alcalá de Henares"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Dirección Exacta</label>
        <input
          type="text"
          className="form-control"
          name="direccion"
          value={ubicacion.direccion || ""}
          onChange={handleChange}
          placeholder="Ej: Calle Mayor 123"
        />
      </div>
    </div>
  );
};

export default UbicacionNegocio;
