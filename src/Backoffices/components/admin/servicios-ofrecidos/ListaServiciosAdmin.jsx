import { useEffect, useState } from "react";
import "../../../styles/admin/ListaServiciosAdmin.css";
import { changeStatus, deleteData } from "../../../store/products/storeProducts.js";
import ToastAlert from "../../../components/common/ToastAlert";

const ListaServiciosAdmin = () => {
  const [servicios, setServicios] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const porPagina = 5;

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
    const serviciosMock = [
      {
        id: 1,
        name: "Paseo Canino",
        description: "Paseo diario de 30 minutos por parques cercanos.",
        price: 15,
        provider: "Juan Pérez",
        created_at: "2025-03-25",
        status: "activo",
      },
      {
        id: 2,
        name: "Alojamiento Mascotas",
        description: "Hospedaje con atención personalizada las 24hs.",
        price: 25,
        provider: "Ana Torres",
        created_at: "2025-03-24",
        status: "activo",
      },
      {
        id: 3,
        name: "Transporte",
        description: "Trasladamos a tu mascota por todo el país.",
        price: 50,
        provider: "Carlos Gutiérrez",
        created_at: "2025-03-20",
        status: "activo",
      },
      {
        id: 4,
        name: "Adiestramiento",
        description: "Entrenamiento básico para perros y gatos.",
        price: 40,
        provider: "Paula Méndez",
        created_at: "2025-03-19",
        status: "activo",
      },
      {
        id: 5,
        name: "Peluquería",
        description: "Corte y baño profesional.",
        price: 30,
        provider: "Luis Romero",
        created_at: "2025-03-18",
        status: "activo",
      },
      {
        id: 6,
        name: "Veterinaria",
        description: "Consulta veterinaria básica.",
        price: 35,
        provider: "María Flores",
        created_at: "2025-03-17",
        status: "activo",
      },
    ];

    setServicios(serviciosMock);
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
