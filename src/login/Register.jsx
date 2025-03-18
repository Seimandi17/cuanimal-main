import { Link } from "react-router-dom";
import { FormProveedor } from "../shared/proveedor/FormProveedor";
import { FormUsuario } from "./components/FormUsuario";

export function Register() {
  return (
    <>
      <header className="header-login">
        <Link to="/">Inicio </Link> 
        <Link to="/Login"> Login</Link>

        <main className="d-flex justify-content-center gap-2 mb-1">
          <h1>Registrarse como:</h1>
          <button
            className="btn btn-primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseUser"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapse"
            type="button"
          >
            Usuario
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsProveedor"
            aria-expanded="false"
            aria-controls="collapse"
          >
            Proveedor
          </button>
        </main>
      </header>
      <div className="d-flex flex-column aling-center w-100 gap-1">
        <section className="d-flex justify-content-center">
          <div className="collapse" id="collapseUser">
            <FormUsuario />
          </div>
          <div className="collapse" id="collapsProveedor">
            <FormProveedor />
          </div>
        </section>
      </div>
    </>
  );
}
