import { Link, useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header-login">
        <Link to="/" className="brand-link">
          <img src="/Cuanimal.png" alt="Logo" className="brand-logo" />
          <span className="brand-text">Cuanimal</span>
        </Link>
      </header>

      <main className="main-register gap-2 mb-2">
        <h1 className="fw-bold">Registrarse como:</h1>
        <div className="r-user">
          <div className="card card-option" onClick={() => navigate("/Registrar/usuario")}>
            <img src="/avatar2.png" alt="Usuario" className="avatar-img" />
            <h5 className="mt-2">Usuario</h5>
          </div>

          <div className="card card-option" onClick={() => navigate("/Registrar/proveedor")}>
            <img src="/avatar2.png" alt="Proveedor" className="avatar-img" />
            <h5 className="mt-2">Proveedor</h5>
          </div>
        </div>

        <hr className="divider" />
        <Link to="/Login">
          <button type="button" className="button-register">
            Acceder
          </button>
        </Link>
      </main>
    </>
  );
}
