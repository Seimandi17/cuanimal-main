import { useEffect, useState } from "react";
import ValidacionHeader from "../../../components/admin/valid/ValidacionesHeader";
import ListaValidaciones from "../../../components/admin/valid/ListaValidaciones";
import { getData, updateData, deleteData } from "../../../store/provider/storeProvider";
import "./ValidarCuentas.css";

export default function ValidarCuentas () {
  const [cuentas, setCuentas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarCuentasPendientes = async () => {
      try {
        const todos = await getData();
        const pendientes = todos.filter((user) => user.status === "pending");
        setCuentas(pendientes);
      } catch (error) {
        console.error("Error al cargar cuentas pendientes:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarCuentasPendientes();
  }, []);

  const aceptarCuenta = async (id) => {
    const cuenta = cuentas.find((u) => u.id === id);
    if (!cuenta) return;

    const actualizado = { ...cuenta, status: "active" };

    const res = await updateData(actualizado, id);
    if (res?.success) {
      setCuentas((prev) => prev.filter((u) => u.id !== id));
    }
  };

  const rechazarCuenta = async (id) => {
    const confirmar = confirm("¿Estás seguro de eliminar esta cuenta?");
    if (!confirmar) return;

    const res = await deleteData(id);
    if (res?.success) {
      setCuentas((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="validar-cuentas-page sectionModuls">
      <div className="validar-cuentas-container">
        <ValidacionHeader total={cuentas.length} />
        
        {loading ? (
          <p className="mensaje-cargando">Cargando cuentas pendientes...</p>
        ) : (
          <ListaValidaciones
            usuariosPendientes={cuentas}
            onAceptar={aceptarCuenta}
            onRechazar={rechazarCuenta}
          />
        )}
      </div>
    </div>
  );
}

export const PageInfo = {
  path: "validaciones",
  title: "Validar Cuentas",
  homeStats: "Cuentas pendientes",
  logo: "/icons-backoffice/validar.svg",
  count: 3,
};
