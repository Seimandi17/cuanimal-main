import { useState } from "react";
import ValidacionHeader from "../../../components/admin/valid/ValidacionesHeader";
import ListaValidaciones from "../../../components/admin/valid/ListaValidaciones";
import "./ValidarCuentas.css";

export default function ValidarCuentas () {
  const [cuentas, setCuentas] = useState([
    {
      id: 1,
      nombre: "Lucía González",
      email: "lucia@email.com",
      rol: "proveedor",
      estado: "pendiente"
    },
    {
      id: 2,
      nombre: "Carlos Pérez",
      email: "carlos@email.com",
      rol: "cliente",
      estado: "pendiente"
    },
    {
      id: 3,
      nombre: "Andrea Ruiz",
      email: "andrea@email.com",
      rol: "proveedor",
      estado: "pendiente"
    }
  ]);

  const aceptarCuenta = (id) => {
    const actualizadas = cuentas.map(cuenta =>
      cuenta.id === id ? { ...cuenta, estado: "aceptada" } : cuenta
    );
    setCuentas(actualizadas);
  };

  const rechazarCuenta = (id) => {
    const actualizadas = cuentas.map(cuenta =>
      cuenta.id === id ? { ...cuenta, estado: "rechazada" } : cuenta
    );
    setCuentas(actualizadas);
  };

  return (
    <div className="validar-cuentas-page sectionModuls">
      <div className="validar-cuentas-container">
        <ValidacionHeader total={cuentas.length} />
        <ListaValidaciones
            usuariosPendientes={cuentas}
            onAceptar={aceptarCuenta}
            onRechazar={rechazarCuenta}
        />
      </div>
    </div>
  );
};

export const PageInfo = {
  path: "validaciones",
  title: "Validar Cuentas",
  homeStats: "Cuentas pendientes",
  logo: "/icons-backoffice/validar.svg",
  count: 3,
};
