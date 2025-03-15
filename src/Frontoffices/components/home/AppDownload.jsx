import { Link } from 'react-router-dom';
import { Apple, Play } from 'lucide-react';

const AppDownload = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Texto y botones */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold mb-3">Descarga nuestra app</h2>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
            <Link to="#" className="btn btn-dark d-flex align-items-center px-4 py-2">
              <Apple size={24} className="me-2" />
              <div className="text-start">
                <div className="small">Descargar en</div>
                <div className="fw-semibold">App Store</div>
              </div>
            </Link>
            <Link to="#" className="btn btn-dark d-flex align-items-center px-4 py-2">
              <Play size={24} className="me-2" />
              <div className="text-start">
                <div className="small">Disponible en</div>
                <div className="fw-semibold">Google Play</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
