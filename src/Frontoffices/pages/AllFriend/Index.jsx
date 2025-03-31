import { useEffect, useState } from "react";
import HeroSection from '../../components/category/HeroSection';
import SearchFilters from '../../components/category/SearchFilters';
import ServiceList from '../../components/category/ServiceList';
import { getData } from '../../../Backoffices/store/products/storeProducts';

export default function AllFriend() {
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
      .filter((s) => s.category === "Todo para tu amigo")
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
        titulo= "Todo lo que tu mascota necesita"
        descripcio= "Accesorios, juguetes, snacks, ropa y más. Comprá todo en un solo lugar."
        placeholder= "Buscar productos..."
        imagenPrincipal="/img/mascota-hotel.jpg"
        imagenesSecundarias={["/img/mascota-hotel.jpg", "/img/mascota-hotel.jpg"]}
        onBuscar={setBusqueda}
      />
      <SearchFilters onFiltrosChange={setFiltros} />
      <ServiceList
        servicios={filtrarServicios()}
        categoria="Todo para tu amigo"
        busqueda={busqueda}
      />
    </div>
  );
}
  

export const PageInfo = {
    path: "todo-para-tu-amigo",
    title: "Todo para tu amigo",
    homeStats: "Ofrece tus productos",
    logo: "/logos/friend.svg",
    count: 10 // Número opcional
};