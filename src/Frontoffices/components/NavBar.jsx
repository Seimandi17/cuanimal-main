import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../assets/logos/Cuanimal.png';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from '../../login/store/client/storeClient'; // Ajustá la ruta si es diferente

export default function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    setIsLoggedIn(!!token);

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="header-navbar navbar bg-white shadow-sm">
      <div className="header-navbar-container container-fluid d-flex justify-content-between align-items-center">
        
        {/* Sección del menú y logo */}
        <section className="menu-brand d-flex align-items-center">
          <button 
            className="navbar-toggler border-0 bg-transparent" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasSideBar" 
            aria-controls="offcanvasSideBar"
          >
            <RxHamburgerMenu size={24} />
          </button>

          <Link className="navbar-brand ms-2" to="/">
            <img src={logo} alt="Cuanimal" width="100" height="auto" />
          </Link>
        </section>

        {/* Botones de sesión */}
        <div className="d-flex align-items-center" role="search">
          {isLoggedIn && user ? (
            <>
              <span className="me-3 fw-semibold text-muted">Hola, {user.name}</span>
              <button
                className="btn btn-outline-danger fw-medium"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link to="/Login" className="btn btn-light border-dark fw-medium">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
