import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import '../../styles/provider/GestionServicio.css'

const CampoEditable = ({ tipo = "text", valor, modoEdicion, onChange }) => {
  return modoEdicion ? (
    tipo === "textarea" ? (
      <textarea className="form-control" value={valor} onChange={onChange}></textarea>
    ) : (
      <input
        type={tipo}
        className="form-control"
        value={valor}
        onChange={onChange}
        min={tipo === "number" ? 0 : undefined}
      />
    )
  ) : (
    <>{tipo === "number" ? `${valor}€` : valor}</>
  );
};

const GestionServicio = ({ servicio, onActualizar, onEliminar }) => {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nombre, setNombre] = useState(servicio.nombre);
  const [descripcion, setDescripcion] = useState(servicio.descripcion);
  const [precio, setPrecio] = useState(servicio.precio);

  const handleGuardar = () => {
    if (!nombre.trim() || !descripcion.trim() || precio <= 0) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    const servicioActualizado = { ...servicio, nombre, descripcion, precio };
    onActualizar(servicio.id ?? Date.now(), servicioActualizado); 
    setModoEdicion(false);
  };

  return (
    <div className="card servicio-card border rounded shadow-sm">
      {/* Imagen de portada */}
      {servicio.portada && (
        <img
          src={URL.createObjectURL(servicio.portada)}
          alt={servicio.nombre}
          className="card-img-top"
        />
      )}

      <div className="card-body">
        {/* Menú de opciones */}
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="fw-bold">
            <CampoEditable
              valor={nombre}
              modoEdicion={modoEdicion}
              onChange={(e) => setNombre(e.target.value)}
            />
          </h5>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="p-0 border-0">
              <span className="fs-5">⋮</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setModoEdicion(true)}>Editar</Dropdown.Item>
              <Dropdown.Item onClick={() => onEliminar(servicio.id)}>Eliminar</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <p>
          <CampoEditable
            tipo="textarea"
            valor={descripcion}
            modoEdicion={modoEdicion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </p>

        <p className="fw-bold">
          Desde{" "}
          <CampoEditable
            tipo="number"
            valor={precio}
            modoEdicion={modoEdicion}
            onChange={(e) => setPrecio(Number(e.target.value))}
          />
        </p>

        {modoEdicion ? (
          <div className="d-flex">
            <button className="btn btn-success me-2" onClick={handleGuardar}>
              Guardar
            </button>
            <button className="btn btn-secondary" onClick={() => setModoEdicion(false)}>
              Cancelar
            </button>
          </div>
        ) : (
          <button className="btn btn-primary w-100" onClick={() => setModoEdicion(true)}>
            Editar
          </button>
        )}
      </div>
    </div>
  );
};

export default GestionServicio;
