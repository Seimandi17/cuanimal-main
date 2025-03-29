import { useEffect, useState } from "react";
import "../../../styles/admin/ListaProveedores.css";
import { getAllProviders } from "../../../store/admin/storeProviders";

const ListaProveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const porPagina = 5;

  useEffect(() => {
    const fetchProveedores = async () => {
      setLoading(true);
      const data = await getAllProviders();
      if (Array.isArray(data)) {
        setProveedores(data);
      }
      setLoading(false);
    };

    fetchProveedores();
  }, []);

  const proveedoresFiltrados = proveedores.filter((p) => {
    const texto = filtro.toLowerCase();
    return (
      `${p.name} ${p.lastname}`.toLowerCase().includes(texto) ||
      p.email.toLowerCase().includes(texto) ||
      (p.phone && p.phone.toLowerCase().includes(texto))
    );
  });

  const totalPaginas = Math.ceil(proveedoresFiltrados.length / porPagina);
  const indiceInicial = (paginaActual - 1) * porPagina;
  const proveedoresPaginados = proveedoresFiltrados.slice(
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
      <h2>Lista de Proveedores</h2>

      <input
        type="text"
        placeholder="Buscar por nombre, email o teléfono..."
        className="buscador-proveedores"
        value={filtro}
        onChange={(e) => {
          setFiltro(e.target.value);
          setPaginaActual(1);
        }}
      />

      {loading ? (
        <p className="loading-msg">Cargando proveedores...</p>
      ) : (
        <>
          <table className="tabla-proveedores">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Fecha de registro</th>
              </tr>
            </thead>
            <tbody>
              {proveedoresPaginados.length > 0 ? (
                proveedoresPaginados.map((prov) => (
                  <tr key={prov.id}>
                    <td>{prov.name} {prov.lastname}</td>
                    <td>{prov.email}</td>
                    <td>{prov.phone || "Sin teléfono"}</td>
                    <td>{prov.created_at?.split("T")[0]}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="sin-resultados">
                    No se encontraron proveedores que coincidan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="paginacion">
            <button
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1}
            >
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
        </>
      )}
    </div>
  );
};

export default ListaProveedores;


  export const PageInfo = {
    path: "proveedores/lista-proveedores",
    title: "Lista de Proveedores",
    homeStats: "Lista de Proveedores",
    logo: "/icons-backoffice/provider.svg",
    count: 20,
  };