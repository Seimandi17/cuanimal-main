import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <header className="header-login">
        <Link to="/">Inicio</Link>
        <h1>Iniciar sesion</h1>
      </header>
      <form className="form-login">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
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
          <label htmlFor="exampleInputPassword1" className="form-label">
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
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-outline-primary">
            Iniciar
          </button>
          <Link to="/Registrar">
            <button to type="button" className="btn btn-outline-primary">
              Registrarme
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
