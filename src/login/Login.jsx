import { Link } from "react-router-dom";
import { loginUser, logoutUser } from "./store/client/storeClient";
import FormValues from "../shared/services/FormValues";

export function Login() {

  const handleSubmit = (event) => {
   const values = new FormValues(event);
   loginUser(values);
  }
  // const handleLogout = () => {
  //   logoutUser();
  //  }
  return (
    <>
      <header className="header-login">
      <Link to="/" className="brand-link">
        <img src="public/Cuanimal.png" alt="Logo" className="brand-logo" />
        <span className="brand-text">Cuanimal</span>
      </Link>
      </header>
      <form onSubmit={handleSubmit} className="form-login">
        <div className="mb-3">
          <h1 className="text-center fw-bold">Acceso</h1>
          <label htmlFor="exampleInputEmail1" className="form-label text-muted">
            Dirección de correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
            </div> */}
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
          <button type="submit" className="button-login">
            Acceso
          </button>
          <a href="#" className="recuperar text-center">¿Has olvidado tu contraseña?</a>
          <hr className="divider" />
          <Link to="/Registrar">
            <button to type="button" className="button-login">
              Crear una cuenta nueva
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
