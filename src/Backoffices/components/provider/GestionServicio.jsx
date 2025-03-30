import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import '../../styles/provider/GestionServicio.css'
import { deleteData, updateData } from "../../store/products/storeProducts";
import { BASE_UPLOAD } from "../../../config/config";

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

const GestionServicio = ({ servicio }) => {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nombre, setNombre] = useState(servicio.name);
  const [descripcion, setDescripcion] = useState(servicio.description);
  const [precio, setPrecio] = useState(servicio.price);

  const handleGuardar = () => {
    if (!nombre.trim() || !descripcion.trim() || precio <= 0) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    const servicioActualizado = { ...servicio, nombre, descripcion, precio };

    const data = {
      name: servicioActualizado.nombre,
      description:  servicioActualizado.descripcion,
      price: servicioActualizado.precio,
    };

    updateData(data, servicio.id);
    setModoEdicion(false);
  };

  return (
    <div className="card servicio-card border rounded shadow-sm">
      {/* Imagen de portada */}
      {servicio.coverImg && (
        <img
          src={`${BASE_UPLOAD}${servicio.coverImg}`}
          alt={servicio.name}
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
              <Dropdown.Item onClick={() => deleteData(servicio.id)}>Eliminar</Dropdown.Item>
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
