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
  // const [servicio, setServicio] = useState({
  //   nombre: "",
  //   tipo: "",
  //   descripcion: "",
  //   precio: "",
  //   provincia: "",
  //   ciudad: "",
  //   direccion: "",
  //   contacto: "",
  //   portada: null,
  //   imagenes: [],
  // });

  const [previewPortada, setPreviewPortada] = useState(null);
  const [mensajeExito, setMensajeExito] = useState("");

  // const handleChange = (e) => {
  //   setServicio({ ...servicio, [e.target.name]: e.target.value });
  // };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    if (name === "coverImg") {
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
        setPreviewPortada(URL.createObjectURL(file));
      }
    }
    // } else {
    //   const validFiles = Array.from(files).filter((file) =>
    //     file.type.startsWith("image/")
    //   );
    //   setServicio({ ...servicio, imagenes: validFiles });
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    e.preventDefault();

    const form = e.target;

    const data = new FormData(form);

    const result = await setData(data);
  if(result){
    setMensajeExito("¡Servicio agregado con éxito!");
    setTimeout(() => setMensajeExito(""), 4000);
  }
    // const camposRequeridos = [
    //   servicio.nombre, servicio.tipo, servicio.descripcion,
    //   servicio.precio, servicio.provincia, servicio.ciudad,
    //   servicio.direccion, servicio.portada, servicio.imagenes.length
    // ];

    // if (camposRequeridos.every(Boolean)) {
    //   setServicio({
    //     nombre: '', tipo: '', descripcion: '', precio: '',
    //     provincia: '', ciudad: '', direccion: '', contacto: '',
    //     portada: null, imagenes: []
    //   });
    //   setPreviewPortada(null);
    
    // }
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
          <input
            type="text"
            name="name"
            className="form-control"
            required
          />
        </div>

        <div>
          <label className="form-label">Tipo de Servicio</label>
          <select name="category_id" defaultValue={1} className="form-select" required>
            <option value="1">Selecciona un tipo</option>
            {tiposServicios.map((tipo, index) => (
              <option key={index} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>

        {/* Descripción (ocupa 2 columnas) */}
        <div className="col-span-2">
          <label className="form-label">Descripción</label>
          <textarea
            name="description"
            className="form-control"
            required
          />
        </div>

        {/* Precio y contacto */}
        <div>
          <label className="form-label">Precio (€)</label>
          <input
            type="number"
            name="price"
            className="form-control"
            required
          />
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

        {/* Subtítulo ubicación */}
        <h4 className="col-span-2 fw-bold mt-4">Ubicación</h4>

        <div>
          <label className="form-label">Provincia</label>
          <select
            name="province"
            className="form-select"
            required
          >
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
          <input
            type="text"
            name="city"
            className="form-control"
            required
          />
        </div>

        {/* Dirección exacta (ocupa 2 columnas) */}
        <div className="col-span-2">
          <label className="form-label">Dirección Exacta</label>
          <input
            type="text"
            name="address"
            className="form-control"
            required
          />
        </div>

        {/* Subtítulo imágenes */}
        <h4 className="col-span-2 fw-bold mt-4">Imágenes</h4>

        {/* Vista previa portada */}
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
          <label className="form-label">Imágenes adicionales</label>
          <input
            type="file"
            name="extraImg"
            onChange={handleFileChange}
            className="form-control"
            accept="image/*"
            multiple
            required
          />
        </div>

        {/* Botón (ocupa todo el ancho) */}
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
