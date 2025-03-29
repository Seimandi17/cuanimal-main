import { useState } from "react";
import "../../../styles/admin//ListaProveedores.css";

const ListaClientes = ({ clientes }) => {
  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const porPagina = 5;

  const clientesFiltrados = clientes.filter((cliente) => {
    const texto = filtro.toLowerCase();
    return (
      cliente.name?.toLowerCase().includes(texto) ||
      cliente.lastname?.toLowerCase().includes(texto) ||
      cliente.email?.toLowerCase().includes(texto) ||
      cliente.username?.toLowerCase().includes(texto)
    );
  });

  const totalPaginas = Math.ceil(clientesFiltrados.length / porPagina);
  const indiceInicial = (paginaActual - 1) * porPagina;
  const clientesPaginados = clientesFiltrados.slice(
    indiceInicial,
    indiceInicial + porPagina
  );

  const cambiarPagina = (nueva) => {
    if (nueva >= 1 && nueva <= totalPaginas) {
      setPaginaActual(nueva);
    }
  };

  return (
    <div className="lista-proveedores-admin">
      <input
        type="text"
        placeholder="Buscar por nombre, email o usuario..."
        className="buscador-proveedores"
        value={filtro}
        onChange={(e) => {
          setFiltro(e.target.value);
          setPaginaActual(1);
        }}
      />

      <table className="tabla-proveedores">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Fecha de Registro</th>
          </tr>
        </thead>
        <tbody>
          {clientesPaginados.length > 0 ? (
            clientesPaginados.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.name} {cliente.lastname}</td>
                <td>{cliente.email}</td>
                <td>{cliente.phone || "—"}</td>
                <td>{new Date(cliente.created_at).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="sin-resultados">
                No se encontraron clientes.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="paginacion">
        <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
          Anterior
        </button>
        <span>
          Página {paginaActual} de {totalPaginas}
        </span>
        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ListaClientes;
