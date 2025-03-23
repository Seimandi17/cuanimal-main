import { useEffect, useRef } from "react";
import ConversacionCard from "./ConversacionCard";
import "../../../styles/provider/ChatSoporte.css";

const ChatSoporte = ({ mensajes = [], usuarioActual }) => {
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [mensajes]);

  return (
    <div className="chat-soporte" ref={chatRef}>
      {mensajes && mensajes.length > 0 ? (
        mensajes.map((mensaje, index) => (
          <ConversacionCard
            key={index}
            mensaje={mensaje}
            esPropio={mensaje.remitente === usuarioActual}
          />
        ))
      ) : (
        <p className="texto-vacio">No hay mensajes aún. Inicia la conversación.</p>
      )}
    </div>
  );
};

export default ChatSoporte;
