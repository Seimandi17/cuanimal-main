import { useEffect, useState } from "react";
import HeroSection from '../../components/category/HeroSection';
import SearchFilters from '../../components/category/SearchFilters';
import ServiceList from '../../components/category/ServiceList';
import { getData } from '../../../Backoffices/store/products/storeProducts';

export default function Paseadores() {
  const [servicios, setServicios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtros, setFiltros] = useState({});

  useEffect(() => {
    getData().then((data) => {
      if (Array.isArray(data)) setServicios(data);
    });
  }, []);

  const filtrarServicios = () => {
    return servicios
      .filter((s) => s.category === "Paseadores")
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
        return 0;
      });
  };

  return (
    <div>
      <HeroSection
        titulo= "Paseadores profesionales para tu mascota"
        descripcio= "Encontrá paseadores de confianza en tu zona, con horarios flexibles y dedicación total."
        placeholder= "Buscar paseador..."
        imagenPrincipal="/img/mascota-hotel.jpg"
        imagenesSecundarias={["/img/mascota-hotel.jpg", "/img/mascota-hotel.jpg"]}
        onBuscar={setBusqueda}
      />
      <SearchFilters onFiltrosChange={setFiltros} />
      <ServiceList
        servicios={filtrarServicios()}
        categoria="Paseadores"
        busqueda={busqueda}
      />
    </div>
  );
}
export const PageInfo = {
    path: "paseo",
    title: "Paseo",
    homeStats: "Paseamos con tu mascota",
    logo: "/logos/paseo.svg",
    count: 10 // Número opcional
};