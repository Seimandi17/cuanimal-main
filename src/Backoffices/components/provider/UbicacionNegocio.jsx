import React from "react";
import "../../styles/provider/UbicacionNegocio.css";

const UbicacionNegocio = ({ perfil, setPerfil }) => {
  if (!perfil) return null;

  // Extraemos los campos de ubicación del perfil
  // (podrías usarlos directamente en value, pero aquí queda explícito)
  const { provincia = "", ciudad = "", direccion = "" } = perfil;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualizamos el perfil con el cambio en la ubicación
    setPerfil((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGuardar = () => {
    // Obtenemos el usuario actual del localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const actualizado = {
      ...user,
      provincia: perfil.provincia,
      ciudad: perfil.ciudad,
      direccion: perfil.direccion,
    };

    localStorage.setItem("user", JSON.stringify(actualizado));
    alert("Ubicación actualizada correctamente");
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
          value={provincia}
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
          value={ciudad}
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
          value={direccion}
          onChange={handleChange}
          placeholder="Ej: Calle Mayor 123"
        />
      </div>

      <button className="btn btn-primary w-100 mt-3" onClick={handleGuardar}>
        Guardar Ubicación
      </button>
    </div>
  );
};

export default UbicacionNegocio;
