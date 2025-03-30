import { useEffect, useState } from "react";
import ValidacionHeader from "../../../components/admin/valid/ValidacionesHeader";
import ListaValidaciones from "../../../components/admin/valid/ListaValidaciones";
import "./ValidarCuentas.css";
import { getData, updateData } from "./store/storeValidate";

export default function ValidarCuentas () {
  const [cuentas, setCuentas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarCuentasPendientes = async () => {
      try {
        const todos = await getData();
        setCuentas(todos);
      } catch (error) {
        console.error("Error al cargar cuentas pendientes:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarCuentasPendientes();
  }, []);

  const aceptarCuenta = async (id) => {

    const actualizado = { 'id': id, status: "active" };

    const res = await updateData(actualizado, id);
    if (res?.success) {
      const todos = await getData();
      setCuentas(todos);
    }
  };

  const rechazarCuenta = async (id) => {
    const confirmar = confirm("¿Estás seguro de eliminar esta cuenta?");
    if (!confirmar) return;
    const deleting = { 'id': id, status: "rejected" };
    const res = await updateData(deleting);
    if (res?.success) {
      const todos = await getData();
      setCuentas(todos);
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
