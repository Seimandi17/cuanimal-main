import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../Backoffices/store/products/storeProducts';
import '../../styles/ServicioDetalle.css';
import { Modal, Button, Form } from 'react-bootstrap';

const ServicioDetalle = () => {
  const { id } = useParams();
  const [servicio, setServicio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showReserva, setShowReserva] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    archivo: null
  });

  const [reservaData, setReservaData] = useState({
    fecha_inicio: '',
    fecha_fin: '',
    direccion: '',
    notas: '',
    num_mascotas: 1
  });

  useEffect(() => {
    const fetchServicio = async () => {
      const data = await getProductById(id);
      setServicio(data);
      setLoading(false);
    };
    fetchServicio();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleReservaChange = (e) => {
    const { name, value } = e.target;
    setReservaData({
      ...reservaData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append('name', formData.nombre);
      form.append('email', formData.email);
      form.append('phone', formData.telefono);
      form.append('subject', formData.asunto);
      form.append('message', formData.mensaje);
      if (formData.archivo) {
        form.append('file', formData.archivo);
      }
      form.append('to', servicio.provider?.email || 'proveedor@cuanimal.com');

      const response = await fetch('http://localhost:8000/api/send-message', {
        method: 'POST',
        body: form
      });

      const result = await response.json();
      if (result.status) {
        alert('Mensaje enviado correctamente al proveedor.');
      } else {
        alert('Error al enviar el mensaje: ' + result.message);
      }

      setShowModal(false);
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '', archivo: null });

    } catch (error) {
      console.error('Error en el envío:', error);
      alert('Hubo un problema al enviar el mensaje.');
    }
  };

  const handleReservaSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('user_id');

      const response = await fetch('http://localhost:8000/api/reservations', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          provider_id: servicio.provider?.id,
          product_id: servicio.id,
          ...reservaData
        })
      });

      const result = await response.json();
      if (result.status) {
        alert('Reserva realizada con éxito.');
        setShowReserva(false);
        setReservaData({ fecha_inicio: '', fecha_fin: '', direccion: '', notas: '', num_mascotas: 1 });
      } else {
        alert('Error al realizar la reserva: ' + result.message);
      }
    } catch (error) {
      console.error('Error al reservar:', error);
      alert('Hubo un error al enviar la reserva.');
    }
  };

  if (loading) return <div className="loading">Cargando servicio...</div>;
  if (!servicio) return <div className="error">Servicio no encontrado.</div>;

  return (
    <div className="servicio-detalle container py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={servicio.coverImg} alt={servicio.name} className="img-fluid rounded shadow-sm mb-3" />
          {servicio.extraImg && (
            <img src={servicio.extraImg} alt="Imagen extra" className="img-fluid rounded shadow-sm" />
          )}
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{servicio.name}</h2>
          <p className="text-muted mb-2">Categoría: <strong>{servicio.category || 'No disponible'}</strong></p>
          <p className="text-muted mb-2">Ubicación: {servicio.city}, {servicio.province}</p>
          <p className="text-muted mb-4">Proveedor: {servicio.provider_name || 'No especificado'}</p>
          <p>{servicio.description}</p>
          <h4 className="text-primary mt-4">Precio: €{servicio.price}</h4>
          <button className="btn btn-primary mt-3 me-2" onClick={() => setShowModal(true)}>Contactar</button>
          <button className="btn btn-outline-success mt-3" onClick={() => setShowReserva(true)}>Reservar</button>
        </div>
      </div>

      {/* Modal de contacto */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contactar al proveedor</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Asunto</Form.Label>
              <Form.Control type="text" name="asunto" value={formData.asunto} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} name="mensaje" value={formData.mensaje} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Adjuntar archivo</Form.Label>
              <Form.Control type="file" name="archivo" onChange={handleChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
            <Button variant="primary" type="submit">Enviar</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Modal de reserva */}
      <Modal show={showReserva} onHide={() => setShowReserva(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reservar servicio</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleReservaSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Fecha inicio</Form.Label>
              <Form.Control type="date" name="fecha_inicio" value={reservaData.fecha_inicio} onChange={handleReservaChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha fin</Form.Label>
              <Form.Control type="date" name="fecha_fin" value={reservaData.fecha_fin} onChange={handleReservaChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" name="direccion" value={reservaData.direccion} onChange={handleReservaChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Notas adicionales</Form.Label>
              <Form.Control as="textarea" rows={3} name="notas" value={reservaData.notas} onChange={handleReservaChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Número de mascotas</Form.Label>
              <Form.Control type="number" name="num_mascotas" value={reservaData.num_mascotas} onChange={handleReservaChange} min={1} required />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowReserva(false)}>Cancelar</Button>
            <Button variant="success" type="submit">Confirmar Reserva</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ServicioDetalle;
