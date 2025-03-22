import { useState } from "react";
import "../../styles/provider/DatosPersonales.css";

const DatosPersonales = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    usuario: "",
    cambiarPassword: false,
    nuevaPassword: "",
    confirmarPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.cambiarPassword && formData.nuevaPassword !== formData.confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // enviar los datos al backend
    alert("Datos actualizados correctamente");
  };

  return (
    <form className="datos-personales-card" onSubmit={handleSubmit}>
      <h4 className="mb-3 fw-bold" >Datos Personales</h4>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label" >Nombre</label>
          <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Juan" />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Apellido</label>
          <input type="text" className="form-control" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Ramirez" />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="juanramirez@email.com" />
      </div>

      <div className="mb-3">
        <label className="form-label">Usuario</label>
        <input type="text" className="form-control" name="usuario" value={formData.usuario} disabled placeholder="JuanRa" />
      </div>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="togglePassword"
          name="cambiarPassword"
          checked={formData.cambiarPassword}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="togglePassword">
          ¿Deseas cambiar tu contraseña?
        </label>
      </div>

      {formData.cambiarPassword && (
        <>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Nueva Contraseña</label>
              <input type="password" className="form-control" name="nuevaPassword" value={formData.nuevaPassword} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Confirmar Contraseña</label>
              <input type="password" className="form-control" name="confirmarPassword" value={formData.confirmarPassword} onChange={handleChange} />
            </div>
          </div>
        </>
      )}

      <button type="submit" className="btn btn-primary w-100 mt-3">Guardar Cambios</button>
    </form>
  );
};

export default DatosPersonales;
