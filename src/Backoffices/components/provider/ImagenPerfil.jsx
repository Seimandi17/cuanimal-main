import { useState } from "react";
import "../../styles/provider/ImagenPerfil.css";

const ImagenPerfil = () => {
  const [imagenActual, setImagenActual] = useState("/img/perfil-default.webp");
  const [imagenNueva, setImagenNueva] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImagenNueva(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleGuardar = () => {
    if (imagenNueva) {
      setImagenActual(preview);
      setImagenNueva(null);
      setPreview(null);
      alert("Foto de perfil actualizada");
      //enviar la imagen al backend
    }
  };

  return (
    <div className="imagen-perfil-container">
      <h4 className="fw-bold mb-3">Foto de Perfil</h4>

      <div className="imagen-actual-preview mb-3">
        <img
          src={preview || imagenActual}
          alt="Foto de perfil"
          className="rounded-circle shadow"
        />
      </div>

      <input
        type="file"
        accept="image/*"
        className="form-control mb-3"
        onChange={handleFileChange}
      />

      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={handleGuardar}
        disabled={!imagenNueva}
      >
        Guardar Imagen
      </button>
    </div>
  );
};

export default ImagenPerfil;
