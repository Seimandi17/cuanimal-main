import React, { useState } from 'react';
import SectionHeaderServicios from '../../components/provider/SectionHeaderServicios'; // Nueva versión
import FormAgregarServicio from '../../components/provider/FormAdd';
import ListaServicios from '../../components/provider/ListaServicios';
import '../../styles/provider/MisServicios.css';

export default function MisServicios() {
  const [servicios, setServicios] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const agregarServicio = (nuevoServicio) => {
    setServicios([...servicios, nuevoServicio]);
    setMostrarFormulario(false);
  };

  const eliminarServicio = (index) => {
    setServicios(servicios.filter((_, i) => i !== index));
  };

  return (
    <div className='proveedores-page'>
      <div className="proveedores-container">
        {/* Header adaptado para backoffice */}
        <SectionHeaderServicios onShowForm={toggleFormulario} />

        {mostrarFormulario && <FormAgregarServicio onAgregar={agregarServicio} />}

        <ListaServicios servicios={servicios} onEliminar={eliminarServicio} />
      </div>
    </div>
  );
}

export const PageInfo = {
  path: "proveedor/mis-servicios",
  title: "Mis Servicios",
  homeStats: "Mis Servicios",
  logo: "",
  count: 20,
};
