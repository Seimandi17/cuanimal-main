import React from "react";
import "../../styles/provider/PerfilHeader.css";

const PerfilHeader = () => {
  return (
    <div className="perfil-header">
      <h2 className="text-primary">Mi Perfil</h2>
      <p className="perfil-subtitulo">
        Aquí puedes ver y editar los datos de tu perfil de proveedor.
      </p>
    </div>
  );
};

export default PerfilHeader;
