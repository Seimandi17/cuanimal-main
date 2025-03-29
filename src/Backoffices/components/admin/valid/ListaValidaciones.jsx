import React from "react";
import "../../../styles/admin/ListaValidaciones.css";

const ListaValidaciones = ({ usuariosPendientes, onAceptar, onRechazar }) => {
  const pendientes = usuariosPendientes.filter(
    (usuario) => usuario.status === "pending"
  );

  return (
    <div className="tabla-validaciones card p-3">
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th>Nombre</th>
            <th>Tipo de Cuenta</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pendientes.length > 0 ? (
            pendientes.map((usuario) => (
              <tr key={usuario.id}>
                <td>{`${usuario.name} ${usuario.lastname}`}</td>
                <td>
                  {usuario.role_id === 2
                    ? "Proveedor"
                    : usuario.role_id === 1
                    ? "Administrador"
                    : "Cliente"}
                </td>
                <td>{usuario.email}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => onAceptar(usuario.id)}
                  >
                    Aprobar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onRechazar(usuario.id)}
                  >
                    Rechazar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                No hay cuentas pendientes de validación.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListaValidaciones;
