import Hero from '../components/travel/Hero.jsx';
import FeaturedServices from '../components/home/FeaturedServices.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import TravelResults from '../components/travel/TravelResults.jsx';
import PopularDestinations from '../components/travel/PopularDestinations.jsx';
import FAQ from '../components/travel/FAQ.jsx';

export default function Travel() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <main className={`flex-fill pt-4 'container'`}>
          {/* Hero con Filtros de Búsqueda */}
          <Hero />

          {/* Servicios Destacados */}
          <div className="bg-light py-5">
            <div className="container">
              <FeaturedServices />
            </div>
          </div>
          
          <div className="container py-5">
            <Testimonials />
          </div>

          {/*
          <div className="container py-5">
            <TravelResults />
          </div>*/}

          {/* Destinos Populares */}
          <div className="container py-5">
            <PopularDestinations />
          </div>

          {/* Preguntas Frecuentes */}
          <div className="container py-5">
            <FAQ/>
          </div>
        </main>
      </div>
    </>
  );
}

export const PageInfo = {
  path: "viajar-con-ellos",
  title: "Viajar con Ellos",
  homeStats: "Explora destinos pet-friendly",
  logo: "/public/logos/travel.svg",
  count: 10 // Número opcional
};
