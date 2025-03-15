import { modules } from "../services/ModulsExport";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ModalBar() {

  const path = useLocation().pathname;
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(path);
  }, [path]);

  return (
    <div className="offcanvas offcanvas-start sidebarFront d-flex flex-column" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasSideBar" aria-controls="offcanvasScrolling">
      <div className="offcanvas-body">
        <section className="sidebarFront-nav flex-grow-1">
          <Link
            className={currentPath == "/" ? "sideBarFront-active" : ""}
            to="/"
          >
            <img
              className="sidebarFront-logoIcon"
              src="/src/assets/logos/Cuanimal_logo.png"
            />
            Inicio
          </Link>
          {modules.map((mod, index) => (
            <Link
              className={currentPath == mod.name ? "sideBarFront-active" : ""}
              key={index}
              to={mod.name}
            >
              <img className="sidebarFront-logoIcon" src={mod.logo} /> {mod.title}
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}