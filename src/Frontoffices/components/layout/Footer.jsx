
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Apple, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-light text-dark mt-auto py-4">
      <div className="container">
        <div className="row g-4">

          {/* Secciones de enlaces */}
          <div className="col-md-3">
            <h5 className="fw-bold">Nosotros</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-dark text-decoration-none">Blog</Link></li>              
              <li><Link to="#" className="text-dark text-decoration-none">¿Quiénes somos?</Link></li>
              <li><Link to="#" className="text-dark text-decoration-none">¿Cómo funcionan nuestros servicios?</Link></li>
              <li><Link to="#" className="text-dark text-decoration-none">¿Somos o no 100% Pet-Friendly?</Link></li>
              <li><Link to="#" className="text-dark text-decoration-none">Compartí tus experiencias</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fw-bold">Información</h5>
            <ul className="list-unstyled">
              <li><Link to="/blog" className="text-dark text-decoration-none">Blog</Link></li>
              <li><Link to="/faqs" className="text-dark text-decoration-none">Preguntas frecuentes</Link></li>
              <li><Link to="/contacto" className="text-dark text-decoration-none">Contacto</Link></li>
              <li><Link to="/proveedores" className="text-dark text-decoration-none">Hazte proveedor</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fw-bold">Información legal</h5>
            <ul className="list-unstyled">
              <li><Link to="/privacidad" className="text-dark text-decoration-none">Política de privacidad</Link></li>
              <li><Link to="/cookies" className="text-dark text-decoration-none">Política de cookies</Link></li>
              <li><Link to="/terminos" className="text-dark text-decoration-none">Términos y condiciones</Link></li>
              <li><Link to="/aviso-legal" className="text-dark text-decoration-none">Aviso legal</Link></li>
            </ul>
          </div>

          <div className="col-md-2">
                <h5 className="fw-bold">Obtene nuestra app</h5>
                <div className="list-unstyled">
                  <Link to="#" className="btn btn-dark d-flex align-items-center">
                    <Apple size={24} className="me-2" />
                    <div className="text-start">
                      <div className="sm">Descargar en</div>
                      <div className="fw-semi-bold">App Store</div>
                    </div>
                  </Link>
                </div>
                <div className="list-unstyled">
                  <Link to="#" className="btn btn-dark d-flex align-items-center" style={{marginTop:"4px"}}>
                    <Play size={24} className="me-2" />
                    <div className="text-start">
                      <div className="sm">Disponible en</div>
                      <div className="fw-semi-bold">Google Play</div>
                    </div>
                  </Link>
                </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="text-center py-3 border-top mt-4 text-dark small">
          <p>&copy; {new Date().getFullYear()} Cuanimal. Todos los derechos reservados.</p>
           {/* Logo y redes sociales */}
          <div className="col-md-3">
            <div className="d-flex gap-3">
              <a href="#" className="text-dark"><Facebook size={20} /></a>
              <a href="#" className="text-dark"><Twitter size={20} /></a>
              <a href="#" className="text-dark"><Instagram size={20} /></a>
              <a href="#" className="text-dark"><Linkedin size={20} /></a>
            </div>
          </div>              
        </div>    
      </div>
    </footer>
  );
};

export default Footer;
