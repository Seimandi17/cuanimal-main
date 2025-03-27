import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./store/client/storeClient";
import FormValues from "../shared/services/FormValues";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = new FormValues(event);
    const result = await loginUser(values);

    if (result.success) {
      navigate("/"); // Redirige al Home
    } else {
      setError(result.message); // Muestra el mensaje de error
    }
  };

  return (
    <>
      <header className="header-login">
        <Link to="/" className="brand-link">
          <img src="/Cuanimal.png" alt="Logo" className="brand-logo" />
          <span className="brand-text">Cuanimal</span>
        </Link>
      </header>

      <form onSubmit={handleSubmit} className="form-login">
        <div className="mb-3">
          <h1 className="text-center fw-bold">Acceso</h1>

          {/* Mensaje de error */}
          {error && <div className="alert alert-danger text-center">{error}</div>}

          <label htmlFor="exampleInputEmail1" className="form-label text-muted">
            Dirección de correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label text-muted">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="keepSesion"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Mantener Sesión
          </label>
        </div>

        <div className="accesoRegistro">
          <button type="submit" className="button-login">Acceso</button>
          <a href="#" className="recuperar text-center">¿Has olvidado tu contraseña?</a>
          <hr className="divider" />
          <Link to="/Registrar">
            <button type="button" className="button-login">
              Crear una cuenta nueva
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
