import React from "react";
import PedidoCard from "./PedidoCard";
import "../../../styles/provider/ListaPedidos.css";

const ListaPedidos = ({ pedidos, onVerDetalle }) => {
  return (
    <div className="lista-pedidos">
      <h3 className="fw-bold text-center mb-4">Pedidos Recibidos</h3>

      {pedidos.length > 0 ? (
        <div className="row">
          {pedidos.map((pedido, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <PedidoCard pedido={pedido} onVerDetalle={onVerDetalle} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted text-center">No se han recibido pedidos aún.</p>
      )}
    </div>
  );
};

export default ListaPedidos;
