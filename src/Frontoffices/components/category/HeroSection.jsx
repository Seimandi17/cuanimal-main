const HeroCategoria = ({
  titulo,
  descripcion,
  imagenPrincipal,
  imagenesSecundarias = []
}) => {
  return (
    <div className="bg-light py-5 border-bottom">
      <div className="container">
        <div className="row align-items-center">

          {/* Texto */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="fw-bold display-5 mb-3 text-dark">{titulo}</h1>
            <p className="lead text-secondary" style={{ maxWidth: '600px' }}>
              {descripcion}
            </p>
          </div>

          {/* Imágenes */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="image-grid">
              {imagenPrincipal && (
                <img src={imagenPrincipal} alt="Principal" className="grid-item large" />
              )}
              {imagenesSecundarias.map((img, index) => (
                <img key={index} src={img} alt={`extra-${index}`} className="grid-item medium" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Estilos grid para las imágenes */}
      <style>
        {`
          .image-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-left: 30px;
          }

          .grid-item {
            width: 100%;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }

          .large {
            grid-column: span 2;
            height: 180px;
          }

          .medium {
            height: 120px;
          }
        `}
      </style>
    </div>
  );
};

export default HeroCategoria;
