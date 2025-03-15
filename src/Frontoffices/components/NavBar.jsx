import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {

  return (
    <nav className="header-navbar navbar" style={{backgroundColor:"white"}}>
      <div className="header-navbar-container container-fluid">
        <section className="menu-brand">
          <a className="navbar-brand"> <RxHamburgerMenu data-bs-toggle="offcanvas" href="#offcanvasSideBar" role="button" aria-controls="offcanvasSideBar" /> </a>
          <a className="navbar-brand" href="Inicio"> 
          <img src="src/assets/logos/Cuanimal.png" alt="cuanimal" width="100" height="auto"/>
          </a>
        </section>
        <form className="d-flex" role="search">
          <a className="btn btn-light" style={{borderColor:"black", fontWeight:"500"}} href="Login" role="button">Iniciar Sesión</a>
        </form>
      </div>
    </nav>

  );
}