import React, { useState } from "react";
import ListaConversaciones from "../../components/provider/message/ListaConversaciones";
import ChatSoporte from "../../components/provider/message/ChatSoporte";
import "../../styles/provider/MensajesSoporte.css";

const MensajesSoporte = () => {
  const [conversaciones] = useState([
    { id: 1, asunto: "Problema con la reserva", fecha: "21/03/2025" },
    { id: 2, asunto: "Consulta sobre pago", fecha: "20/03/2025" },
  ]);

  const [conversacionActiva, setConversacionActiva] = useState(null);

  const manejarSeleccion = (id) => {
    const conversacion = conversaciones.find((c) => c.id === id);
    setConversacionActiva(conversacion);
  };

  return (
    <div className="mensajes-soporte sectionModuls">
      <h2 className="titulo-mensajes mb-4">Centro de Mensajes y Soporte</h2>

      <div className="soporte-layout">
        {/* Lista de conversaciones */}
        <ListaConversaciones
          conversaciones={conversaciones}
          onSeleccionar={manejarSeleccion}
          activaId={conversacionActiva?.id}
        />

        {/* Chat de conversación activa */}
        <div className="chat-area">
          {conversacionActiva ? (
            <ChatSoporte conversacion={conversacionActiva} />
          ) : (
            <div className="placeholder-chat text-muted text-center">
              <p>Selecciona una conversación para comenzar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MensajesSoporte;

export const PageInfo = {
  path: "proveedor/soporte",
  title: "Mensajes / Soporte",
  homeStats: "Mensajes de Soporte",
  logo: "/icons-backoffice/chat.svg",
  count: 0,
};
