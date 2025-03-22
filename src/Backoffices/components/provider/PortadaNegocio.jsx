import { useState } from "react";
import "../../styles/provider/PortadaNegocio.css";

const PortadaNegocio = () => {
  const [portada, setPortada] = useState(null);
  const [preview, setPreview] = useState(null);

  const handlePortadaChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setPortada(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="portada-negocio">
      <h4>Imagen de Portada del Negocio</h4>

      {preview && (
        <div className="portada-preview mb-3">
          <img src={preview} alt="Vista previa" className="img-fluid rounded shadow-sm" />
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        className="form-control"
        onChange={handlePortadaChange}
      />
    </div>
  );
};

export default PortadaNegocio;
