import { useState } from "react";
import "../styles/ListaHistorial.css";

const ListaHistorial = ({ historial }) => {
  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const porPagina = 5;

  const filtrar = (item) => {
    const texto = filtro.toLowerCase();
    return (
      item.servicio.toLowerCase().includes(texto) ||
      item.cliente.toLowerCase().includes(texto) ||
      item.estado.toLowerCase().includes(texto)
    );
  };

  const historialFiltrado = historial.filter(filtrar);
  const totalPaginas = Math.ceil(historialFiltrado.length / porPagina);
  const indiceInicial = (paginaActual - 1) * porPagina;
  const historialPaginado = historialFiltrado.slice(
    indiceInicial,
    indiceInicial + porPagina
  );

  const cambiarPagina = (nueva) => {
    if (nueva >= 1 && nueva <= totalPaginas) {
      setPaginaActual(nueva);
    }
  };

  return (
    <div className="tabla-historial-container">
      <input
        type="text"
        className="buscador-historial"
        placeholder="Buscar por servicio, cliente o estado..."
        value={filtro}
        onChange={(e) => {
          setFiltro(e.target.value);
          setPaginaActual(1);
        }}
      />

      {historialPaginado.length === 0 ? (
        <p className="mensaje-vacio">No se encontraron resultados.</p>
      ) : (
        <table className="tabla-historial">
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {historialPaginado.map((item) => (
              <tr key={item.id}>
                <td>{item.servicio}</td>
                <td>{item.cliente}</td>
                <td>{new Date(item.fecha).toLocaleDateString()}</td>
                <td>
                  <span className={`estado estado-${item.estado.toLowerCase()}`}>
                    {item.estado}
                  </span>
                </td>
                <td>{item.total}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {totalPaginas > 1 && (
        <div className="paginacion">
          <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
            Anterior
          </button>
          <span>
            Página {paginaActual} de {totalPaginas}
          </span>
          <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default ListaHistorial;
