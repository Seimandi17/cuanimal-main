import GestionServicio from "./GestionServicio";

const ListaServicios = ({ servicios, actualizarServicio, eliminarServicio }) => {
  return (
    <div className="lista-servicios container mt-4">
      <h3 className="text-center fw-bold mb-4">Servicios Agregados</h3>
      {servicios.length > 0 ? (
        <div className="row">
          {servicios.map((servicio, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <GestionServicio
                servicio={servicio}
                onActualizar={actualizarServicio}
                onEliminar={eliminarServicio}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted text-center">Aún no has agregado servicios.</p>
      )}
    </div>
  );
};

export default ListaServicios;