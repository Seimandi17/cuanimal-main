import { useEffect, useState } from "react";
import "../../styles/provider/DatosPersonales.css";
import { updateData } from "../../../login/store/client/storeClient.js";

const DatosPersonales = ({ perfil, setPerfil }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    usuario: "",
    cambiarPassword: false,
    nuevaPassword: "",
    confirmarPassword: "",
  });

  useEffect(() => {
    if (perfil) {
      setFormData({
        nombre: perfil.name || "",
        apellido: perfil.lastname || "",
        email: perfil.email || "",
        usuario: perfil.username || "", // ajustá el campo si se llama distinto
        cambiarPassword: false,
        nuevaPassword: "",
        confirmarPassword: "",
      });
    }
  }, [perfil]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.cambiarPassword && formData.nuevaPassword !== formData.confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const userId = perfil.id;
    const dataToSend = {
      name: formData.nombre,
      lastname: formData.apellido,
      email: formData.email,
    };

    if (formData.cambiarPassword) {
      dataToSend.password = formData.nuevaPassword;
    }

    try {
      const updated = await updateData(dataToSend, userId);
      if (updated) {
        // Actualizamos localStorage también
        const userActualizado = {
          ...perfil,
          name: formData.nombre,
          lastname: formData.apellido,
          email: formData.email,
        };
        localStorage.setItem("user", JSON.stringify(userActualizado));
        setPerfil(userActualizado);
        alert("Datos personales actualizados correctamente");
      }
    } catch (err) {
      console.error(err);
      alert("Hubo un error al actualizar los datos");
    }
  };

  return (
    <form className="datos-personales-card" onSubmit={handleSubmit}>
      <h4 className="mb-3 fw-bold">Datos Personales</h4>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Juan"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Ramirez"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Usuario</label>
        <input
          type="text"
          className="form-control"
          name="usuario"
          value={formData.usuario}
          disabled
        />
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
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Nueva Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="nuevaPassword"
              value={formData.nuevaPassword}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="confirmarPassword"
              value={formData.confirmarPassword}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      <button type="submit" className="btn btn-primary w-100 mt-3">
        Guardar Cambios
      </button>
    </form>
  );
};

export default DatosPersonales;
