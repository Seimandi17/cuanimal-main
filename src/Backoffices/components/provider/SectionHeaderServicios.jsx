export default function SectionHeaderServicios({ onShowForm }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 className="fw-bold">Mis Servicios</h2>
        <p className="text-muted mb-0">Administra y publica tus servicios desde aquí.</p>
      </div>
      <button onClick={onShowForm} className="btn btn-primary">
        Agregar Servicio
      </button>
    </div>
  );
}
