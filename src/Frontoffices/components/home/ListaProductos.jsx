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

const provinciasEspaña = [
  "Coruña", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila",
  "Badajoz", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria",
  "Castellón", "Ceuta", "Ciudad Real", "Córdoba", "Cuenca", "Girona",
  "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Illes Balears",
  "Jaén", "La Rioja", "Las Palmas", "León", "Lleida", "Lugo", "Madrid",
  "Málaga", "Melilla", "Murcia", "Navarra", "Ourense", "Palencia",
  "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla",
  "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid",
  "Vizcaya", "Zamora", "Zaragoza"
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
          {provinciasEspaña.map((prov) => (
            <SwiperSlide key={prov}>
              <div
                className="prov-card text-center p-2 rounded shadow-sm"
                onClick={() => redirigirProvincia(prov)}
                style={{ cursor: "pointer", backgroundColor: "#f8f9fa" }}
              >
                <img
                  src="/img/mapa-espana.jpg"
                  alt={prov}
                  className="img-fluid mb-1"
                  style={{ width: "100%", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                />
                <small className="text-muted">{prov}</small>
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
