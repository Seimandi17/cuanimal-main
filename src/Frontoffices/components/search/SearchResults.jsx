import { useState } from 'react';
import { toast } from "sonner";

const SearchResults = ({ 
  title, 
  results, 
  isLoading = false, 
  onViewDetails,
  initialDisplayCount = 6
}) => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedResults = showAll ? results : results.slice(0, initialDisplayCount);

  const handleViewDetails = (item) => {
    if (onViewDetails) {
      onViewDetails(item);
    } else {
      toast.info(`Has seleccionado: ${item.title}`, {
        description: "Próximamente podrás ver todos los detalles"
      });
    }
  };

  const handleViewMore = () => {
    setShowAll(true);
    toast.success("Mostrando todos los resultados disponibles");
  };

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">
          {isLoading ? "Buscando..." : title}
        </h2>
        
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="row g-4">
              {displayedResults.map((item, index) => (
                <div key={item.id || index} className="col-md-4">
                  <div className="card shadow-sm border-0 h-100">
                    <div className="overflow-hidden" style={{ height: '180px' }}>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="card-img-top img-fluid"
                        style={{ objectFit: 'cover', height: '100%' }}
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title">{item.title}</h5>
                        <span className="badge bg-warning text-dark">
                          {item.category}
                        </span>
                      </div>
                      <p className="card-text text-muted">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        {item.price ? (
                          <span className="fw-semibold">{item.price}</span>
                        ) : (
                          <span className="text-muted">{item.location}</span>
                        )}
                        {item.rating && (
                          <span className="text-warning">
                            ★★★★★ <span className="text-muted">({item.reviews})</span>
                          </span>
                        )}
                        <button 
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => handleViewDetails(item)}
                        >
                          Ver detalles
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {!showAll && results.length > initialDisplayCount && (
              <div className="text-center mt-4">
                <button 
                  className="btn btn-warning btn-lg text-dark"
                  onClick={handleViewMore}
                >
                  Ver más resultados
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
