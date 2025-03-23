import { useState } from "react";
import "../../../styles/provider/FormMensaje.css";

const FormMensaje = ({ onEnviar }) => {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mensaje.trim() === "") return;

    onEnviar(mensaje);
    setMensaje("");
  };

  return (
    <form className="form-mensaje" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        className="form-control"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default FormMensaje;
