import React from "react";
import "../../../styles/provider/PedidosHeader.css";

const PedidosHeader = () => {
  return (
    <div className="pedidos-header d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 className="fw-bold text-primary">Pedidos</h2>
        <p className="text-muted mb-0">Consulta y gestiona las reservas que han solicitado tus servicios.</p>
      </div>
    </div>
  );
};

export default PedidosHeader;
