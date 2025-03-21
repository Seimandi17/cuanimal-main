import React, { useState } from 'react';

const provinciasEspaña = [
  "Coruña", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Barcelona", "Burgos",
  "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ceuta", "Ciudad Real", "Córdoba", "Cuenca", "Girona", "Granada",
  "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Illes Balears", "Jaén", "La Rioja", "Las Palmas", "León", "Lleida",
  "Lugo", "Madrid", "Málaga", "Melilla", "Murcia", "Navarra", "Ourense", "Palencia", "Pontevedra", "Salamanca",
  "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid",
  "Vizcaya", "Zamora", "Zaragoza"
];

const tiposServicios = [
  "Transporte de Mascotas", "Alojamiento", "Paseo de Mascotas", 
  "Adiestramiento", "Servicio Veterinario", "Tienda de Productos", "Otro"
];

const FormAgregarServicio = ({ onAgregar }) => {
  const [servicio, setServicio] = useState({ 
    nombre: '', 
    tipo: '',
    descripcion: '', 
    precio: '', 
    provincia: '', 
    ciudad: '', 
    direccion: '', 
    portada: null, 
    imagenes: [] 
  });

  const handleChange = (e) => {
    setServicio({ ...servicio, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "portada") {
      setServicio({ ...servicio, portada: files[0] });
    } else {
      setServicio({ ...servicio, imagenes: [...files] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      servicio.nombre && servicio.tipo && servicio.descripcion && servicio.precio && 
      servicio.provincia && servicio.ciudad && servicio.direccion && 
      servicio.portada && servicio.imagenes.length
    ) {
      onAgregar(servicio);
      setServicio({ nombre: '', tipo: '', descripcion: '', precio: '', provincia: '', ciudad: '', direccion: '', portada: null, imagenes: [] });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-agregar-servicio">
        <h2 className="fw-bold text-center">Agregar Servicio</h2>
        
        <div className="mb-3">
          <label className="form-label">Nombre del Servicio</label>
          <input type="text" name="nombre" value={servicio.nombre} onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo de Servicio</label>
          <select name="tipo" value={servicio.tipo} onChange={handleChange} className="form-select" required>
            <option value="">Selecciona un tipo</option>
            {tiposServicios.map((tipo, index) => (
              <option key={index} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea name="descripcion" value={servicio.descripcion} onChange={handleChange} className="form-control" required></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Precio (€)</label>
          <input type="number" name="precio" value={servicio.precio} onChange={handleChange} className="form-control" required />
        </div>

        <h4 className="fw-bold mt-4">Ubicación</h4>

        <div className="mb-3">
          <label className="form-label">Provincia</label>
          <select name="provincia" value={servicio.provincia} onChange={handleChange} className="form-select" required>
            <option value="">Selecciona una provincia</option>
            {provinciasEspaña.map((provincia, index) => (
              <option key={index} value={provincia}>{provincia}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Ciudad</label>
          <input type="text" name="ciudad" value={servicio.ciudad} onChange={handleChange} className="form-control" placeholder="Ej: Madrid" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Dirección Exacta</label>
          <input type="text" name="direccion" value={servicio.direccion} onChange={handleChange} className="form-control" placeholder="Ej: Calle Mayor 12" required />
        </div>

        <h4 className="fw-bold mt-4">Imágenes</h4>

        <div className="mb-3">
          <label className="form-label">Portada</label>
          <input type="file" name="portada" onChange={handleFileChange} className="form-control" accept="image/*" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Imágenes adicionales</label>
          <input type="file" name="imagenes" onChange={handleFileChange} className="form-control" accept="image/*" multiple required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Agregar Servicio</button>
      </form>
    </div>
  );
};

export default FormAgregarServicio;
