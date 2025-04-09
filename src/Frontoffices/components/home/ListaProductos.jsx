import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/ListaProductos.css';
import { getAllProducts } from '../../../Backoffices/store/products/storeProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";

const provinciasConImagen = [
  { nombre: "Coruña", imagen: "/img/provincias/coruna.jpg" },
  { nombre: "Álava", imagen: "/img/provincias/alava.jpg" },
  { nombre: "Albacete", imagen: "/img/provincias/albacete.jpg" },
  { nombre: "Alicante", imagen: "/img/provincias/alicante.jpg" },
  { nombre: "Almería", imagen: "/img/provincias/almeria.jpg" },
  { nombre: "Asturias", imagen: "/img/provincias/asturias.jpg" },
  { nombre: "Ávila", imagen: "/img/provincias/avila.jpg" },
  { nombre: "Badajoz", imagen: "/img/provincias/badajoz.webp" },
  { nombre: "Barcelona", imagen: "/img/provincias/barcelona.jpg" },
  { nombre: "Burgos", imagen: "/img/provincias/burgos.jpg" },
  { nombre: "Cáceres", imagen: "/img/provincias/caceres.jpg" },
  { nombre: "Cádiz", imagen: "/img/provincias/cadiz.jpg" },
  { nombre: "Cantabria", imagen: "/img/provincias/cantabria.jpg" },
  { nombre: "Castellón", imagen: "/img/provincias/castellon.webp" },
  { nombre: "Ceuta", imagen: "/img/provincias/ceuta.jpeg" },
  { nombre: "Ciudad Real", imagen: "/img/provincias/ciudad-real.jpg" },
  { nombre: "Córdoba", imagen: "/img/provincias/cordoba.avif" },
  { nombre: "Cuenca", imagen: "/img/provincias/cuenca.jpeg" },
  { nombre: "Girona", imagen: "/img/provincias/girona.jpg" },
  { nombre: "Granada", imagen: "/img/provincias/granada.jpeg" },
  { nombre: "Guadalajara", imagen: "/img/provincias/guadalajara.jpg" },
  { nombre: "Guipúzcoa", imagen: "/img/provincias/guipuzcoa.jpg" },
  { nombre: "Huelva", imagen: "/img/provincias/huelva.jpeg" },
  { nombre: "Huesca", imagen: "/img/provincias/huesca.avif" },
  { nombre: "Illes Balears", imagen: "/img/provincias/illes-balears.jpg" },
  { nombre: "Jaén", imagen: "/img/provincias/jaen.jpg" },
  { nombre: "La Rioja", imagen: "/img/provincias/la-rioja.jpg" },
  { nombre: "Las Palmas", imagen: "/img/provincias/las-palmas.jpg" },
  { nombre: "León", imagen: "/img/provincias/leon.avif" },
  { nombre: "Lleida", imagen: "/img/provincias/lleida.avif" },
  { nombre: "Lugo", imagen: "/img/provincias/lugo.jpg" },
  { nombre: "Madrid", imagen: "/img/provincias/madrid.webp" },
  { nombre: "Málaga", imagen: "/img/provincias/malaga.jpg" },
  { nombre: "Melilla", imagen: "/img/provincias/melilla.jpg" },
  { nombre: "Murcia", imagen: "/img/provincias/murcia.jpg" },
  { nombre: "Navarra", imagen: "/img/provincias/navarra.avif" },
  { nombre: "Ourense", imagen: "/img/provincias/ourense.jpeg" },
  { nombre: "Palencia", imagen: "/img/provincias/palencia.avif" },
  { nombre: "Pontevedra", imagen: "/img/provincias/pontevedra.jpeg" },
  { nombre: "Salamanca", imagen: "/img/provincias/salamanca.jpg" },
  { nombre: "Santa Cruz de Tenerife", imagen: "/img/provincias/santa-cruz-de-tenerife.jpg" },
  { nombre: "Segovia", imagen: "/img/provincias/segovia.jpg" },
  { nombre: "Sevilla", imagen: "/img/provincias/sevilla.jpg" },
  { nombre: "Soria", imagen: "/img/provincias/soria.webp" },
  { nombre: "Tarragona", imagen: "/img/provincias/tarragona.jpg" },
  { nombre: "Teruel", imagen: "/img/provincias/teruel.jpeg" },
  { nombre: "Toledo", imagen: "/img/provincias/toledo.avif" },
  { nombre: "Valencia", imagen: "/img/provincias/valencia.jpg" },
  { nombre: "Valladolid", imagen: "/img/provincias/valladolid.webp" },
  { nombre: "Vizcaya", imagen: "/img/provincias/vizcaya.jpg" },
  { nombre: "Zamora", imagen: "/img/provincias/zamora.avif" },
  { nombre: "Zaragoza", imagen: "/img/provincias/zaragoza.avif" },
];


const ListaProductos = ({ categoriaFiltrada = null, titulo = "Nuestros Servicios" }) => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getAllProducts();
      const filtrados = categoriaFiltrada
        ? data.filter(prod => prod.category === categoriaFiltrada)
        : data;
      setProductos(filtrados.slice(0, 3)); 
    };

    fetchProductos();
  }, [categoriaFiltrada]);

  const redirigirProvincia = (provincia) => {
    navigate(`/explorer?provincia=${encodeURIComponent(provincia)}`);
  };

  return (
    <div className="lista-productos-container container mt-5">
      <h2 className="mb-4 text-center">{titulo}</h2>

      <div className="row">
        {productos.length > 0 ? (
          productos.map((prod, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={prod.coverImg || "/placeholder.jpg"}
                  className="card-img-top"
                  alt={prod.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{prod.name}</h5>
                  <p className="card-text">{prod.description}</p>
                  <p><strong>Precio:</strong> €{prod.price}</p>
                  <p><strong>Ubicación:</strong> {prod.city}, {prod.province}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No hay servicios disponibles.</p>
        )}
      </div>

      <div className="carousel-wrapper position-relative mt-5">

        <h5 className="mb-3 text-center">Explora por provincia</h5>

        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev"
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="swiper-prov"
          breakpoints={{
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 }
          }}
        >
        {provinciasConImagen.map((prov) => (
          <SwiperSlide key={prov.nombre}>
            <div
              className="prov-card text-center p-2 rounded shadow-sm"
              onClick={() => redirigirProvincia(prov.nombre)}
              style={{ cursor: "pointer", backgroundColor: "#f8f9fa" }}
            >
              <img
                src={prov.imagen}
                alt={prov.nombre}
                className="img-fluid mb-1"
                style={{ width: "100%", height: "60px", objectFit: "cover", borderRadius: "8px" }}
              />
              <small className="text-muted">{prov.nombre}</small>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>

        {/* Botones de navegación con íconos */}
        <div className="custom-swiper-prev">
          <ChevronLeft size={20} />
        </div>
        <div className="custom-swiper-next">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default ListaProductos;
