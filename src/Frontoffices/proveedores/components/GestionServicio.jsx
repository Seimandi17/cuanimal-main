import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const GestionServicio = ({ servicio, onActualizar, onEliminar }) => {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nombre, setNombre] = useState(servicio.nombre);
  const [descripcion, setDescripcion] = useState(servicio.descripcion);
  const [precio, setPrecio] = useState(servicio.precio);

  const handleGuardar = () => {
    const servicioActualizado = { ...servicio, nombre, descripcion, precio };
    onActualizar(servicio.id, servicioActualizado);
    setModoEdicion(false); // Salir del modo edición
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
          <h5 className="fw-bold">{modoEdicion ? <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} /> : servicio.nombre}</h5>
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

        <p>{modoEdicion ? <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea> : servicio.descripcion}</p>
        <p className="fw-bold">Desde {modoEdicion ? <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} /> : `${servicio.precio}€`}</p>
        
        {modoEdicion ? (
          <div className="d-flex">
            <button className="btn btn-success me-2" onClick={handleGuardar}>Guardar</button>
            <button className="btn btn-secondary" onClick={() => setModoEdicion(false)}>Cancelar</button>
          </div>
        ) : (
          <button className="btn btn-primary w-100" onClick={() => setModoEdicion(true)}>Editar</button>
        )}
      </div>
    </div>
  );
};

export default GestionServicio;