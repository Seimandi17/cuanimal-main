import "../../../styles/admin/ValidacionesHeader.css";

const ValidacionesHeader = () => {
  return (
    <div className="validaciones-header">
      <div>
        <h2 className="titulo-header">Validación de Cuentas</h2>
        <p className="descripcion-header">
          Revisa y aprueba las cuentas de usuarios recién registrados para habilitar su acceso.
        </p>
      </div>
    </div>
  );
};

export default ValidacionesHeader;
