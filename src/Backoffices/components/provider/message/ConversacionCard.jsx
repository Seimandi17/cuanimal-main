import React from "react";
import "../../../styles/provider/ConversacionCard.css";

const ConversacionCard = ({ mensaje, esPropio }) => {
  return (
    <div className={`mensaje-card ${esPropio ? "propio" : "otro"}`}>
      <div className="contenido">
        <p>{mensaje.texto}</p>
        <span className="fecha">{mensaje.fecha}</span>
      </div>
    </div>
  );
};

export default ConversacionCard;
