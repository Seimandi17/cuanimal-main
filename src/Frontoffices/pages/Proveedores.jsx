import React, { useState } from 'react';
import HeroSection from '../proveedores/components/HeroSection';
import FormAgregarServicio from '../proveedores/components/FormAdd';
import ListaServicios from '../proveedores/components/ListaServicios';
import '../proveedores/styles/Proveedores.css';

export default function Proveedores() {
  const [servicios, setServicios] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Función para alternar la visibilidad del formulario
  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  // Agregar servicio a la lista
  const agregarServicio = (nuevoServicio) => {
    setServicios([...servicios, nuevoServicio]);
    setMostrarFormulario(false); // Ocultar el formulario después de agregar el servicio
  };

  // Eliminar servicio
  const eliminarServicio = (index) => {
    setServicios(servicios.filter((_, i) => i !== index));
  };

  return (
    <div className='proveedores-page'>
      <div className="proveedores-container">
        {/* Sección Hero */}
        <HeroSection onShowForm={toggleFormulario} />

        {/* Mostrar el formulario solo cuando el estado es verdadero */}
        {mostrarFormulario && <FormAgregarServicio onAgregar={agregarServicio} />}

        {/* Lista de servicios cargados */}
        <ListaServicios servicios={servicios} onEliminar={eliminarServicio} />
      </div>
    </div>
  );
}



export const PageInfo = {
  path: "proveedores",
  title: "Proveedores",
  homeStats: "Ofrece tus servicios",
  logo: "/logos/supplier.svg",
  count: 10 // Número opcional
};