import { modules } from "../services/ModulsExport";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logos/Cuanimal_logo.png';
export default function ModalBar() {
  
  const path = useLocation().pathname;
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(path);
  }, [path]);

  return (
    <>
      {/* Fondo opaco */}
      <div className="sidebar-overlay"></div>

      {/* Sidebar */}
      <div 
        className="offcanvas offcanvas-start sidebarFront d-flex flex-column"
        data-bs-scroll="true" 
        data-bs-backdrop="true"
        tabIndex="-1" 
        id="offcanvasSideBar"
        aria-labelledby="sidebarLabel"
      >

        
        <div className="offcanvas-body">
          <section className="sidebarFront-nav flex-grow-1">
            <Link className={currentPath === "/" ? "sideBarFront-active" : ""} to="/">
              <img className="sidebarFront-logoIcon" src={logo} alt="Logo" />
              Inicio
            </Link>
            {modules.map((mod, index) => (
              <Link 
                key={index} 
                className={currentPath === mod.name ? "sideBarFront-active" : ""} 
                to={mod.name}
              >
                <img className="sidebarFront-logoIcon" src={mod.logo} alt="Icono" /> {mod.title}
              </Link>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
