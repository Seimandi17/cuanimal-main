import { useEffect, useState } from "react";
import HeroSection from '../../components/category/HeroSection';
import ServiceList from '../../components/category/ServiceList';
import SearchFilters from '../../components/category/SearchFilters';
import { getData } from '../../../Backoffices/store/products/storeProducts';

export default function Adiestramiento() {
  const [servicios, setServicios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtros, setFiltros] = useState({});

  useEffect(() => {
    const cargarServicios = async () => {
      const data = await getData();
      if (Array.isArray(data)) {
        setServicios(data);
      }
    };

    cargarServicios();
  }, []);

  // Aplicar filtros en tiempo real
  const filtrarServicios = () => {
    return servicios
      .filter((s) => s.category === "Adiestramiento")
      .filter((s) =>
        s.name.toLowerCase().includes(busqueda.toLowerCase()) ||
        s.description.toLowerCase().includes(busqueda.toLowerCase())
      )
      .filter((s) => {
        const min = filtros.precioMin ? parseFloat(filtros.precioMin) : 0;
        const max = filtros.precioMax ? parseFloat(filtros.precioMax) : Infinity;
        return s.price >= min && s.price <= max;
      })
      .sort((a, b) => {
        if (filtros.orden === "precio-asc") return a.price - b.price;
        if (filtros.orden === "precio-desc") return b.price - a.price;
        return 0; // "recientes" o default (no cambia orden)
      });
  };
    return(
      <div>
        <HeroSection
          titulo="Adiestramiento para tu mascota"
          descripcion="Entrenadores certificados y personalizados para cada tipo de mascota."
          placeholder="Buscar entrenador, ciudad..."
          imagenPrincipal="/img/mascota-parque.jpg"
          imagenesSecundarias={[
            "/img/mascota-parque.jpg",
            "/img/mascota-parque.jpg"
          ]}
          onBuscar={(valor) => setBusqueda(valor)}
        />
        <SearchFilters onFiltrosChange={setFiltros} />
        <ServiceList
        servicios={filtrarServicios()}
        categoria="Adiestramiento"
        busqueda={busqueda}
      />
      </div>
    ) 

  }
  

export const PageInfo = {
    path: "adiestramiento",
    title: "Adiestramiento",
    homeStats: "Ofrece tus entrenamientos",
    logo: "/logos/training.svg",
    count: 10 // Número opcional
};