import React, { useState } from "react";
import "../../styles/provider/FormAgregarServicios.css";
import FormValues from "../../../shared/services/FormValues";
import { setData } from "../../store/products/storeProducts";

const provinciasEspaña = [
  "Coruña",
  "Álava",
  "Albacete",
  "Alicante",
  "Almería",
  "Asturias",
  "Ávila",
  "Badajoz",
  "Barcelona",
  "Burgos",
  "Cáceres",
  "Cádiz",
  "Cantabria",
  "Castellón",
  "Ceuta",
  "Ciudad Real",
  "Córdoba",
  "Cuenca",
  "Girona",
  "Granada",
  "Guadalajara",
  "Guipúzcoa",
  "Huelva",
  "Huesca",
  "Illes Balears",
  "Jaén",
  "La Rioja",
  "Las Palmas",
  "León",
  "Lleida",
  "Lugo",
  "Madrid",
  "Málaga",
  "Melilla",
  "Murcia",
  "Navarra",
  "Ourense",
  "Palencia",
  "Pontevedra",
  "Salamanca",
  "Santa Cruz de Tenerife",
  "Segovia",
  "Sevilla",
  "Soria",
  "Tarragona",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Vizcaya",
  "Zamora",
  "Zaragoza",
];
const tiposServicios = [
  "Transporte de Mascotas",
  "Alojamiento",
  "Paseo de Mascotas",
  "Adiestramiento",
  "Servicio Veterinario",
  "Tienda de Productos",
  "Otro",
];

const FormAgregarServicio = () => {
  const [previewPortada, setPreviewPortada] = useState(null);
  const [mensajeExito, setMensajeExito] = useState("");

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "coverImg" && files[0]) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        setPreviewPortada(URL.createObjectURL(file));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Debug opcional
    // for (let [key, value] of data.entries()) {
    //   console.log(`${key}:`, value);
    // }

    const result = await setData(data);

    if (result?.success) {
      setMensajeExito("¡Servicio agregado con éxito!");
      form.reset();
      setPreviewPortada(null);
      setTimeout(() => setMensajeExito(""), 4000);
    } else {
      alert("Error: " + result.message);
    }
  };

  return (
    <div className="form-container-1">
      <form
        onSubmit={handleSubmit}
        className="form-agregar-servicio card p-4 shadow-sm"
        encType="multipart/form-data"
      >
        <h2 className="fw-bold text-center mb-4">Agregar Servicio</h2>

        {mensajeExito && (
          <div className="alert alert-success text-center col-span-2">
            {mensajeExito}
          </div>
        )}

        {/* Nombre y tipo */}
        <div>
          <label className="form-label">Nombre del Servicio</label>
          <input type="text" name="name" className="form-control" required />
        </div>

        <div>
          <label className="form-label">Tipo de Servicio</label>
          <select name="category_id" defaultValue="" className="form-select" required>
          <option value="" disabled>Selecciona un tipo</option>
          {tiposServicios.map((tipo, index) => (
            <option key={index} value={index + 1}>
              {tipo}
            </option>
          ))}
        </select>
        </div>

        {/* Descripción */}
        <div className="col-span-2">
          <label className="form-label">Descripción</label>
          <textarea name="description" className="form-control" required />
        </div>

        {/* Precio y contacto */}
        <div>
          <label className="form-label">Precio (€)</label>
          <input type="number" name="price" className="form-control" required />
        </div>

        <div>
          <label className="form-label">Contacto (opcional)</label>
          <input
            type="text"
            name="contact"
            className="form-control"
            placeholder="Teléfono, email o red social"
          />
        </div>

        {/* Ubicación */}
        <h4 className="col-span-2 fw-bold mt-4">Ubicación</h4>

        <div>
          <label className="form-label">Provincia</label>
          <select name="province" className="form-select" required>
            <option value="">Selecciona una provincia</option>
            {provinciasEspaña.map((provincia, index) => (
              <option key={index} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Ciudad</label>
          <input type="text" name="city" className="form-control" required />
        </div>

        <div className="col-span-2">
          <label className="form-label">Dirección Exacta</label>
          <input type="text" name="address" className="form-control" required />
        </div>

        {/* Imágenes */}
        <h4 className="col-span-2 fw-bold mt-4">Imágenes</h4>

        {previewPortada && (
          <div className="col-span-2 text-center">
            <img
              src={previewPortada}
              alt="Vista previa"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "200px" }}
            />
          </div>
        )}

        <div>
          <label className="form-label">Portada</label>
          <input
            type="file"
            name="coverImg"
            onChange={handleFileChange}
            className="form-control"
            accept="image/*"
            required
          />
        </div>

        <div>
          <label className="form-label">Imagen adicional</label>
          <input
            type="file"
            name="extraImg"
            onChange={handleFileChange}
            className="form-control"
            accept="image/*"
          />
        </div>

        {/* Botón */}
        <div className="col-span-2">
          <button type="submit" className="btn btn-primary w-100">
            Agregar Servicio
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAgregarServicio;
