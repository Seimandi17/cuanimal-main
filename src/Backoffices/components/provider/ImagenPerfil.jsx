import { useEffect, useState } from "react";
import "../../styles/provider/ImagenPerfil.css";

const ImagenPerfil = ({ perfil, setPerfil }) => {
  const [imagenActual, setImagenActual] = useState("/img/perfil-default.webp");
  const [imagenNueva, setImagenNueva] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (perfil?.profile_image) {
      setImagenActual(`${import.meta.env.VITE_BASE_URL}/storage/${perfil.profile_image}`);
    }
  }, [perfil]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImagenNueva(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleGuardar = () => {
    if (imagenNueva) {
      // Simulación de actualización local (sin backend aún)
      const perfilActualizado = {
        ...perfil,
        profile_image: preview, // Esto en real sería el nombre de archivo desde el backend
      };

      setPerfil(perfilActualizado);
      localStorage.setItem("user", JSON.stringify(perfilActualizado));

      setImagenActual(preview);
      setImagenNueva(null);
      setPreview(null);
      alert("Foto de perfil actualizada");

      // 👉 Más adelante: subir la imagenNueva al backend con FormData
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
