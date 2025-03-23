import React, { useState } from 'react';
import PerfilHeader from '../../components/provider/PerfilHeader';
import DatosPersonales from '../../components/provider/DatosPersonales';
import DatosNegocio from '../../components/provider/DatosNegocio';
import UbicacionNegocio from '../../components/provider/UbicacionNegocio';
import PortadaNegocio from '../../components/provider/PortadaNegocio';
import ImagenPerfil from '../../components/provider/ImagenPerfil';

import '../../styles/provider/MiPerfil.css';

export default function MiPerfil() {
  const [ubicacion, setUbicacion] = useState({
    provincia: '',
    ciudad: '',
    direccion: ''
  });

  const [datosNegocio, setDatosNegocio] = useState({
    nombre: '',
    categoria: '',
    descripcion: '',
    telefono: '',
    horario: '',
    sitioWeb: '',
    redes: {
      instagram: '',
      facebook: ''
    }
  });

  return (
    <div className="mi-perfil-page sectionModuls">
      <div className="perfil-container">
        <PerfilHeader />

        <section className="perfil-section">
          <DatosPersonales />
        </section>

        <section className="perfil-section">
          <DatosNegocio datos={datosNegocio} setDatos={setDatosNegocio} />
        </section>

        <section className="perfil-section">
          <UbicacionNegocio ubicacion={ubicacion} setUbicacion={setUbicacion} />
        </section>

        <section className="perfil-section">
          <ImagenPerfil />
        </section>

        <section className="perfil-section">
          <PortadaNegocio />
        </section>
      </div>
    </div>
  );
}

export const PageInfo = {
  path: "proveedor/mi-perfil",
  title: "Mi Perfil",
  homeStats: "Mi Perfil",
  logo: "",
  count: 1,
};
