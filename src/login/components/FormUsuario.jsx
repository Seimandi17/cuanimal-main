import { useState } from "react";
import FormValues from "../../shared/services/FormValues";
import { setData } from "../store/client/storeClient";
import { useNavigate } from "react-router-dom";

export function FormUsuario() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = new FormValues(event);
    setData(values);

    // Mostrar mensaje de éxito
    setSuccessMessage("Tu solicitud ha sido enviada. En breve será revisada por el administrador.");

    // Limpiar el formulario después de un breve período
    setTimeout(() => {
      setSuccessMessage("");
      navigate("/"); // Redirigir después de mostrar el mensaje (opcional)
    }, 3000);
  };

  return (
    <>
      <div className="form-container">
        <h2 className="text-center mb-4 fw-bold">Registro de Usuario</h2>

        {successMessage && (
          <div className="alert alert-success text-center" role="alert">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="form-usuario">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nombre"
              name="name"
              required
            />
            <label htmlFor="name">Nombre</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Apellido"
              name="lastName"
              required
            />
            <label htmlFor="lastName">Apellido</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              required
            />
            <label htmlFor="password">Contraseña</label>
          </div>

          <button className="btn btn-primary w-100 fw-semibold" type="submit">
            Registrarse
          </button>
          <button type="button" className="btn btn-outline-primary w-100 mt-2" onClick={() => navigate(-1)}> 
            Volver Atrás
          </button>
        </form>
      </div>
    </>
  );
}
