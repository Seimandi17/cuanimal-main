const TravelResults = ({ results = [] }) => {
    return (
      <div className="mt-5">
        <h3 className="fw-bold">Resultados</h3>
        <p className="text-muted">Aquí aparecerán las experiencias de viaje adaptadas para mascotas.</p>
        {results.length === 0 ? (
          <div className="alert alert-info">No hay resultados disponibles por el momento.</div>
        ) : (
          <ul className="list-group">
            {results.map((item, index) => (
              <li key={index} className="list-group-item">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default TravelResults;
  
  