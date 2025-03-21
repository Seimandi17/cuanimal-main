import { Link } from "react-router-dom";
import { FormProveedor } from "../shared/proveedor/FormProveedor";
import { FormUsuario } from "./components/FormUsuario";
import { setData } from "./store/provider/storeProvider";
import FormValues from "../shared/services/FormValues";

const handleSubmit = (event) => {
 const values = new FormValues(event);
 setData(values);
}

export function Register() {
  return (
    <>
      <header className="header-login">
        <Link to="/" className="brand-link">
          <img src="public/Cuanimal.png" alt="Logo" className="brand-logo" />
          <span className="brand-text">Cuanimal</span>
        </Link>
      </header>
        <main className="main-register gap-2 mb-2">
          <h1 className="fw-bold">Registrarse como:</h1>
          <div className="r-user">
            <div className="card card-option" data-bs-toggle="collapse" data-bs-target="#collapseUser">
              <img src="public/avatar2.png" alt="Usuario" className="avatar-img" />
              <h5 className="mt-2">Usuario</h5>
            </div>

            <div className="card card-option" data-bs-toggle="collapse" data-bs-target="#collapseProveedor">
              <img src="public/avatar2.png" alt="Proveedor" className="avatar-img" />
              <h5 className="mt-2">Proveedor</h5>
            </div>
          </div>
          <hr className="divider" />
          <Link to="/Login">
            <button to type="button" className="button-register">
              Acceder
            </button>
          </Link>
        </main>
      <div className="d-flex flex-column aling-center w-100 gap-2">
        <section className="d-flex justify-content-center">
          <div className="collapse" id="collapseUser">
            <FormUsuario />
          </div>
          <div className="collapse" id="collapseProveedor">
            <FormProveedor callback={handleSubmit} />
          </div>
        </section>
      </div>
    </>
  );
}
