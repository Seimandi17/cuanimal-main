import React, { useState } from 'react';
import SectionHeaderServicios from '../../components/provider/SectionHeaderServicios';
import FormAgregarServicio from '../../components/provider/FormAdd';
import ListaServicios from '../../components/provider/ListaServicios';
import '../../styles/provider/MisServicios.css';

export default function MisServicios() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div className='proveedores-page'>
      <div className="proveedores-container">
        <SectionHeaderServicios onShowForm={toggleFormulario} />

        {mostrarFormulario && <FormAgregarServicio />}

        <ListaServicios />
      </div>
    </div>
  );
}

export const PageInfo = {
  path: "proveedor/mis-servicios",
  title: "Mis Servicios",
  homeStats: "Mis Servicios",
  logo: "/icons-backoffice/mis-servicios.svg",
  count: 20,
};
