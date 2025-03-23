import { Link } from "react-router-dom";
import { modules } from "../services/ModulsExport";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { logoutUser } from "../../login/store/client/storeClient";

export default function NavBar() {
  const path = useLocation().pathname;
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(path);
  }, [path]);

 const handleLogout = () => {
    logoutUser();
   }

  return (
    <div className="sidebar d-flex flex-column">
      <header className="sidebar-header ">
        <h4 className="text-light text-center">Menú</h4>
      </header>
      <section className="sidebar-nav flex-grow-1">
        <Link
          className={currentPath == "/backoffice" ? "sideBar-active" : ""}
          to="/backoffice"
        >
          <img
            className="sidebar-logoIcon"
            src="/src/assets/logos/logoNotFound.png"
          />
          Dashboard
        </Link>
        {modules.map((mod, index) => (
          <Link
            className={currentPath == mod.name ? "sideBar-active" : ""}
            key={index}
            to={mod.name}
          >
            <img className="sidebar-logoIcon" src={mod.logo} /> {mod.title}
          </Link>
        ))}
      </section>

      <footer className="sidebar-footer mb-3">
        <button className="btn btn-outline-warning" onClick={handleLogout}>Cerrar sesión</button>
      </footer>
    </div>
  );
}
