import { useEffect, useState } from "react";
import "../../../styles/admin/ListaServiciosAdmin.css";
import { changeStatus, deleteData } from "../../../store/products/storeProducts.js";
import ToastAlert from "../../../components/common/ToastAlert";
import { getData } from "../../../store/products/storeProducts";

const ListaServiciosAdmin = () => {
  const [servicios, setServicios] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const porPagina = 5;
  const [loading, setLoading] = useState(true);
  
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const [toast, setToast] = useState(null); // null o { type, message }

  const handlePaused = async (id) => {
    const nuevoEstado = servicioSeleccionado.status === "pausado" ? "activo" : "pausado";
  
    try {
      await changeStatus(id, nuevoEstado);
      setServicios((prev) =>
        prev.map((s) =>
          s.id === id ? { ...s, status: nuevoEstado } : s
        )
      );
      setServicioSeleccionado(null);
    } catch (err) {
      alert("Error al actualizar el estado del servicio.");
    }
  };
  
  const handleRestrict = async (id) => {
    if (!confirm("¿Estás seguro de restringir este servicio?")) return;
  
    try {
      const res = await changeStatus(id, "restringido");
      if (res.success) {
        setServicios((prev) =>
          prev.map((s) =>
            s.id === id ? { ...s, status: "restringido" } : s
          )
        );
        setServicioSeleccionado(null);
        setToast({
          type: "warning",
          message: "Servicio restringido correctamente.",
        });
      }
    } catch (err) {
      setToast({ type: "error", message: "Error al restringir el servicio." });
    }
  };
  
  
  const handleDelete = async (id) => {
    if (!confirm("¿Estás seguro de eliminar este servicio permanentemente?")) return;
  
    try {
      const res = await deleteData(id);
      if (res.success) {
        setServicios((prev) => prev.filter((s) => s.id !== id));
        setServicioSeleccionado(null);
        setToast({
          type: "success",
          message: "Servicio eliminado correctamente.",
        });
      }
    } catch (err) {
      setToast({ type: "error", message: "Error al eliminar el servicio." });
    }
  };

  const renderEstadoBadge = (estado) => {
    let clase = "badge-activo";
    let texto = "Activo";
  
    if (estado === "pausado") {
      clase = "badge-pausado";
      texto = "Pausado";
    } else if (estado === "restringido") {
      clase = "badge-restringido";
      texto = "Restringido";
    }
  
    return <span className={`badge-estado ${clase}`}>{texto}</span>;
  };
  

  useEffect(() => {
    const fetchServicios = async () => {
      setLoading(true);
      const data = await getData();
  
      if (Array.isArray(data)) {
        setServicios(data);
      } else {
        setToast({ type: "error", message: data.message || "Error al cargar servicios." });
      }
  
      setLoading(false);
    };
  
    fetchServicios();
  }, []);

  const serviciosFiltrados = servicios.filter((servicio) => {
    const texto = filtro.toLowerCase();
    return (
      servicio.name.toLowerCase().includes(texto) ||
      servicio.description.toLowerCase().includes(texto) ||
      servicio.provider.toLowerCase().includes(texto)
    );
  });

  const totalPaginas = Math.ceil(serviciosFiltrados.length / porPagina);
  const indiceInicial = (paginaActual - 1) * porPagina;
  const serviciosPaginados = serviciosFiltrados.slice(
    indiceInicial,
    indiceInicial + porPagina
  );

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="lista-servicios-admin">
      <h2>Todos los Servicios</h2>

      <input
        type="text"
        placeholder="Buscar por servicio, proveedor o descripción..."
        className="buscador-servicios"
        value={filtro}
        onChange={(e) => {
          setFiltro(e.target.value);
          setPaginaActual(1);
        }}
      />
      {loading ? (
        <p className="loading-msg">Cargando servicios...</p>
      ) : (
        <>
          {/* tabla y paginación van aquí */}
        </>
      )}
      <table className="tabla-servicios">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Proveedor</th>
            <th>Fecha de subida</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {serviciosPaginados.length > 0 ? (
            serviciosPaginados.map((servicio) => (
              <tr
                key={servicio.id}
                onClick={() => setServicioSeleccionado(servicio)}
                className="fila-clickable"
              >
                <td>{servicio.name}</td>
                <td>{servicio.description}</td>
                <td>{servicio.price}€</td>
                <td>{servicio.provider}</td>
                <td>{servicio.created_at}</td>
                <td>
                  {renderEstadoBadge(servicio.status || "activo")}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="sin-resultados">
                No se encontraron servicios que coincidan.
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

      {/* Modal de Detalles */}
      {servicioSeleccionado && (
        <div className="modal-servicio">
          <div className="modal-contenido">
            <h3>{servicioSeleccionado.name}</h3>
            <p><strong>Proveedor:</strong> {servicioSeleccionado.provider}</p>
            <p><strong>Descripción:</strong> {servicioSeleccionado.description}</p>
            <p><strong>Precio:</strong> {servicioSeleccionado.price}€</p>
            <p><strong>Estado:</strong> {renderEstadoBadge(servicioSeleccionado.status || "activo")}</p>
            <p><strong>Creado el:</strong> {servicioSeleccionado.created_at}</p>


            <div className="acciones-admin">
              <button
                className="btn-pausar"
                onClick={() => handlePaused(servicioSeleccionado.id)}
              >
                {servicioSeleccionado.status === "pausado" ? "Reactivar" : "Pausar"}
              </button>

              <button
                className="btn-restringir"
                onClick={() => handleRestrict(servicioSeleccionado.id)}
              >
                Restringir
              </button>

              <button
                className="btn-eliminar"
                onClick={() => handleDelete(servicioSeleccionado.id)}
              >
                Eliminar
              </button>
            </div>

            <button className="btn-cerrar" onClick={() => setServicioSeleccionado(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
      {toast && (
        <ToastAlert
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default ListaServiciosAdmin;
