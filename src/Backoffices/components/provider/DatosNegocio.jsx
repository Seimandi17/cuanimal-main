import "../../styles/provider/DatosNegocio.css";

const DatosNegocio = ({ datos, setDatos }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("redes.")) {
      const red = name.split(".")[1];
      setDatos((prev) => ({
        ...prev,
        redes: {
          ...prev.redes,
          [red]: value,
        },
      }));
    } else {
      setDatos({ ...datos, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Información de negocio actualizada");
    // guardar los cambios en backend
  };

  return (
    <form className="datos-negocio-card" onSubmit={handleSubmit}>
      <h4 className="fw-bold mb-3">Datos del Negocio</h4>

      <div className="mb-3">
        <label className="form-label">Nombre del Negocio</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
          placeholder="PetCare Express"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Categoría</label>
        <select
          name="categoria"
          className="form-select"
          value={datos.categoria}
          onChange={handleChange}
        >
          <option value="Transporte de Mascotas">Transporte de Mascotas</option>
          <option value="Alojamiento">Alojamiento</option>
          <option value="Paseo de Mascotas">Paseo de Mascotas</option>
          <option value="Adiestramiento">Adiestramiento</option>
          <option value="Servicio Veterinario">Servicio Veterinario</option>
          <option value="Tienda de Productos">Tienda de Productos</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          name="descripcion"
          className="form-control"
          value={datos.descripcion}
          onChange={handleChange}
          rows="3"
          placeholder="Somos especialistas en el traslado seguro de mascotas."
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            name="telefono"
            className="form-control"
            value={datos.telefono}
            onChange={handleChange}
            placeholder="+34 600 123 456"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Horario de Atención</label>
          <input
            type="text"
            name="horario"
            className="form-control"
            value={datos.horario}
            onChange={handleChange}
            placeholder="Lunes a Viernes - 9:00 a 18:00"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Sitio Web</label>
        <input
          type="text"
          name="sitioWeb"
          className="form-control"
          value={datos.sitioWeb}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Redes Sociales</label>
        <input
          type="text"
          name="redes.instagram"
          className="form-control mb-2"
          placeholder="Instagram"
          value={datos.redes.instagram}
          onChange={handleChange}
        />
        <input
          type="text"
          name="redes.facebook"
          className="form-control"
          placeholder="Facebook"
          value={datos.redes.facebook}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Guardar Cambios</button>
    </form>
  );
};

export default DatosNegocio;
