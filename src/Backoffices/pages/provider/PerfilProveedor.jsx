import React, { useState, useEffect } from 'react';
import PerfilHeader from '../../components/provider/PerfilHeader';
import DatosPersonales from '../../components/provider/DatosPersonales';
import DatosNegocio from '../../components/provider/DatosNegocio';
import UbicacionNegocio from '../../components/provider/UbicacionNegocio';
import PortadaNegocio from '../../components/provider/PortadaNegocio';
import ImagenPerfil from '../../components/provider/ImagenPerfil';

import '../../styles/provider/MiPerfil.css';

export default function MiPerfil() {
  const [perfil, setPerfil] = useState(null); // datos del proveedor

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setPerfil(JSON.parse(storedUser));
    }
  }, []);

  if (!perfil) {
    return <p className="loading-msg">Cargando perfil...</p>;
  }

  return (
    <div className="mi-perfil-page sectionModuls">
      <div className="perfil-container">
        <PerfilHeader perfil={perfil} />

        <section className="perfil-section">
          <DatosPersonales perfil={perfil} setPerfil={setPerfil} />
        </section>

        <section className="perfil-section">
          <DatosNegocio perfil={perfil} setPerfil={setPerfil} />
        </section>

        <section className="perfil-section">
          <UbicacionNegocio perfil={perfil} setPerfil={setPerfil} />
        </section>

        <section className="perfil-section">
          <ImagenPerfil perfil={perfil} setPerfil={setPerfil} />
        </section>

        <section className="perfil-section">
          <PortadaNegocio perfil={perfil} setPerfil={setPerfil} />
        </section>
      </div>
    </div>
  );
}

export const PageInfo = {
  path: "proveedor/mi-perfil",
  title: "Mi Perfil",
  homeStats: "Mi Perfil",
  logo: "/icons-backoffice/perfil.svg",
  count: 1,
};
