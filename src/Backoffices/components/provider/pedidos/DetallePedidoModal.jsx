import { Modal, Button } from "react-bootstrap";
import "../../../styles/provider/DetallePedidoModal.css";

const DetallePedidoModal = ({ show, handleClose, pedido }) => {
  if (!pedido) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Detalle del Pedido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detalle-pedido">
          <h5 className="fw-bold mb-3">Información del Cliente</h5>
          <p><strong>Nombre:</strong> {pedido.cliente}</p>
          <p><strong>Email:</strong> {pedido.email}</p>
          <p><strong>Teléfono:</strong> {pedido.telefono}</p>

          <hr />

          <h5 className="fw-bold mb-3">Información del Pedido</h5>
          <p><strong>Servicio:</strong> {pedido.servicio}</p>
          <p><strong>Fecha:</strong> {pedido.fecha}</p>
          <p><strong>Ubicación:</strong> {pedido.ubicacion}</p>
          <p><strong>Estado:</strong> <span className={`estado ${pedido.estado.toLowerCase()}`}>{pedido.estado}</span></p>

          <hr />

          <h5 className="fw-bold mb-3">Mensaje del Cliente</h5>
          <p className="mensaje">{pedido.mensaje || "Sin mensaje adicional."}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
        <Button variant="primary">Contactar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetallePedidoModal;
