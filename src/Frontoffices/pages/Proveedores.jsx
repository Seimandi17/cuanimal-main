import React, { useState } from 'react';
import HeroSection from '../proveedores/components/HeroSection';
import FormAgregarServicio from '../proveedores/components/FormAdd';
import ListaServicios from '../proveedores/components/ListaServicios';
import '../proveedores/styles/Proveedores.css';

export default function Proveedores() {
  const [servicios, setServicios] = useState([]);

  // Agregar servicio a la lista
  const agregarServicio = (nuevoServicio) => {
    setServicios([...servicios, nuevoServicio]);
  };

  // Eliminar servicio
  const eliminarServicio = (index) => {
    setServicios(servicios.filter((_, i) => i !== index));
  };

  // Actualizar un servicio existente
  const actualizarServicio = (id, servicioActualizado) => {
    setServicios(
      servicios.map((servicio, index) =>
        index === id ? servicioActualizado : servicio
      )
    );
  };

  return (
    <>
    <div className="proveedores-container">
      {/* Sección Hero */}
      <HeroSection />

      {/* Contenido de Gestión de Servicios */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Gestión de Servicios</h2>

        {/* Formulario para agregar servicios */}
        <FormAgregarServicio onAgregar={agregarServicio} />

        {/* Lista de servicios cargados */}
        <ListaServicios servicios={servicios} onActualizar={actualizarServicio} onEliminar={eliminarServicio} />

      </div>
    </div>
    </>
  );
};



export const PageInfo = {
  path: "proveedores",
  title: "Proveedores",
  homeStats: "Ofrece tus servicios",
  logo: "/public/logos/travel.svg",
  count: 10 // Número opcional
};