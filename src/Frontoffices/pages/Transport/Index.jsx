import { useEffect, useState } from "react";
import HeroSection from '../../components/category/HeroSection';
import SearchFilters from '../../components/category/SearchFilters';
import ServiceList from '../../components/category/ServiceList';
import { getAllProducts } from '../../../Backoffices/store/products/storeProducts';

export default function Transport() {
  const [servicios, setServicios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtros, setFiltros] = useState({});

  useEffect(() => {
    const cargarServicios = async () => {
      const data = await getAllProducts();
      console.log("Servicios recibidos:", data); // 👈 esto es importante
      if (Array.isArray(data)) {
        setServicios(data);
      }
    };

    cargarServicios();
  }, []);

  const filtrarServicios = () => {
    return servicios
      .filter((s) => s.category === "Transporte de Mascotas")
      .filter((s) =>
        s.name.toLowerCase().includes((filtros.busqueda || "").toLowerCase()) ||
        s.description.toLowerCase().includes((filtros.busqueda || "").toLowerCase())
      )
      .filter((s) => {
        const min = filtros.precioMin ? parseFloat(filtros.precioMin) : 0;
        const max = filtros.precioMax ? parseFloat(filtros.precioMax) : Infinity;
        return s.price >= min && s.price <= max;
      })
      .filter((s) => {
        if (filtros.provincias?.length > 0) {
          return filtros.provincias.includes(s.province);
        }
        return true;
      })
      .filter((s) => {
        if (filtros.mascotas?.length > 0) {
          return filtros.mascotas.includes(s.pet);
        }
        return true;
      })
      .sort((a, b) => {
        if (filtros.orden === "precio-asc") return a.price - b.price;
        if (filtros.orden === "precio-desc") return b.price - a.price;
        return 0;
      });
  };

  return (
    <div>
    {/* Hero limpio */}
      <HeroSection
        titulo="Servicio de Transporte para tu mascota"
        descripcion="Conectá con transportistas especializados en mascotas en todo el país."
        imagenPrincipal="/img/mascota-parque.jpg"
        imagenesSecundarias={[
          "/img/mascota-parque.jpg",
          "/img/mascota-parque.jpg"
        ]}
      />

      {/* Layout con filtros a la izquierda y servicios a la derecha */}
      <div className="container-fluid my-4">
        <div className="row">
          {/* Sidebar de filtros */}
          <div className="col-lg-3 col-md-4">
            <SearchFilters
              onFiltrosChange={(f) => setFiltros(f)}
              onBuscar={(b) => setBusqueda(b)}
            />
          </div>

          {/* Lista de servicios */}
          <div className="col-lg-9 col-md-8">
            <ServiceList
              servicios={filtrarServicios()}
              categoria="Transporte de Mascotas"
              busqueda={busqueda}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const PageInfo = {
  path: "transporte-de-mascotas",
  title: "Transporte de Mascotas",
  logo: "/logos/transport.svg",
  count: 20,
};