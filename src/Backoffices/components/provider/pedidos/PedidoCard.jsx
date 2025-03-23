import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DetallePedidoModal from "./DetallePedidoModal";
import "../../../styles/provider/PedidoCard.css";

const PedidoCard = ({ pedido, onAceptar, onRechazar, onCompletar }) => {
  const [estado, setEstado] = useState(pedido.estado);
  const [mostrarModal, setMostrarModal] = useState(false);

  const manejarAccion = (nuevaAccion) => {
    setEstado(nuevaAccion);
    if (nuevaAccion === "aceptado") onAceptar(pedido.id);
    if (nuevaAccion === "rechazado") onRechazar(pedido.id);
    if (nuevaAccion === "completado") onCompletar(pedido.id);
  };

  return (
    <>
      <div className={`pedido-card card shadow-sm mb-3 ${estado}`}>
        <div className="card-body">
          <h5 className="card-title fw-bold">{pedido.servicio}</h5>
          <p className="mb-1"><strong>Cliente:</strong> {pedido.cliente}</p>
          <p className="mb-1"><strong>Fecha:</strong> {pedido.fecha}</p>
          <p className="mb-3"><strong>Personas:</strong> {pedido.numPersonas}</p>

          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-outline-secondary btn-sm" onClick={() => setMostrarModal(true)}>
              Ver Detalle
            </button>

            {estado === "pendiente" && (
              <>
                <button className="btn btn-success btn-sm" onClick={() => manejarAccion("aceptado")}>Aceptar</button>
                <button className="btn btn-danger btn-sm" onClick={() => manejarAccion("rechazado")}>Rechazar</button>
              </>
            )}

            {estado === "aceptado" && (
              <button className="btn btn-primary btn-sm" onClick={() => manejarAccion("completado")}>
                Marcar como Completado
              </button>
            )}

            <span className={`badge estado-${estado}`}>{estado.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Detalle del Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DetallePedidoModal pedido={pedido} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarModal(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PedidoCard;
