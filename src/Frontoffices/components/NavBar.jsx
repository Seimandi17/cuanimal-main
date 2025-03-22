import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../assets/logos/Cuanimal.png'; // ajusta el path relativo según tu estructura


export default function NavBar() {
  return (
    <nav className="header-navbar navbar bg-white fixed-top shadow-sm">
      <div className="header-navbar-container container-fluid d-flex justify-content-between align-items-center">
        
        {/* Sección del menú y logo */}
        <section className="menu-brand d-flex align-items-center">
          {/* Botón de menú hamburguesa */}
          <button 
            className="navbar-toggler border-0 bg-transparent" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasSideBar" 
            aria-controls="offcanvasSideBar"
          >
            <RxHamburgerMenu size={24} />
          </button>
          
          {/* Logo */}
          <a className="navbar-brand ms-2" href="/">
            <img src={logo} alt="Cuanimal" width="100" height="auto" />
          </a>
        </section>

        {/* Botón de inicio de sesión */}
        <form className="d-flex" role="search">
          <a className="btn btn-light border-dark fw-medium" href="/Login" role="button">Iniciar Sesión</a>
        </form>
      </div>
    </nav>
  
);
}
