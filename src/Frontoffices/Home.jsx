import Hero from './components/home/Hero.jsx';
import PopularDestinations from './components/home/PopularDestinations.jsx';
import FeaturedServices from './components/home/FeaturedServices.jsx';
import Testimonials from './components/home/Testimonials.jsx';
import { Link } from 'react-router-dom';
export default function Home () {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <main className={`flex-fill pt-4 'container'`}>
      <Hero />

      <div className="bg-light py-5">
        <div className="container">
          <FeaturedServices />
        </div>
      </div>

      <div className="container py-5">
        <Testimonials />
      </div>

      <div className="container py-5">
        <PopularDestinations />
      </div>

      <div className="container py-5">
        <div className="container py-5">
          <h3 className="fw-bold text-center mb-4">Preguntas frecuentes sobre Cuanimal</h3>
          <div className="row g-4">
            <div className="col-md-6 accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  ¿Cómo encuentro las mejores ofertas en Cuanimal?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  ¿Cómo puedo solicitar servicios especializados en Cuanimal?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
          </div>
          <div className="col-md-6 accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  ¿Por qué Cuanimal es la mejor plataforma para tu mascota?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  ¿Qué es un proveedor de Cuanimal?
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
      </main>
    </div>
    </>
  );
}