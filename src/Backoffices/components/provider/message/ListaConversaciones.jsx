import "../../../styles/provider/ListaConversaciones.css";

const ListaConversaciones = ({ conversaciones, onSeleccionar }) => {
  return (
    <div className="lista-conversaciones">
      <h5 className="titulo-seccion">Tus Conversaciones</h5>
      <ul className="lista-items">
        {conversaciones.length > 0 ? (
          conversaciones.map((conversacion) => (
            <li
              key={conversacion.id}
              className="item-conversacion"
              onClick={() => onSeleccionar(conversacion.id)}
            >
              <div className="nombre">{conversacion.nombre}</div>
              <div className="ultimo-mensaje">
                {conversacion.ultimoMensaje || "Sin mensajes aún"}
              </div>
            </li>
          ))
        ) : (
          <p className="texto-vacio">No tienes conversaciones iniciadas.</p>
        )}
      </ul>
    </div>
  );
};

export default ListaConversaciones;
