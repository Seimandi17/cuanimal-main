const testimonials = [
  {
    id: 1,
    name: 'Ana García',
    location: 'Madrid',
    text: 'Gracias a Cuanimal encontré un hotel donde aceptaron a mi perro sin problemas. ¡Vacaciones perfectas!',
    image: '/img/avatar-1.jpg'
  },
  {
    id: 2,
    name: 'Carlos Martínez',
    location: 'Barcelona',
    text: 'Encontrar un cuidador para mi gato nunca había sido tan fácil. El servicio fue excelente y mi mascota estuvo feliz.',
    image: '/img/avatar-3.jpg'
  },
  {
    id: 3,
    name: 'Laura Sánchez',
    location: 'Valencia',
    text: 'El transporte que contraté a través de Cuanimal fue muy profesional. Mi perro llegó tranquilo y sin estrés a nuestro destino.',
    image: '/img/avatar-2.jpeg'
  }
];

const Testimonials = () => {
  return (
    <div className="container py-5">
      {/* Título */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Lo que dicen nuestros usuarios</h2>
        <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
          Miles de dueños de mascotas confían en Cuanimal para sus viajes y servicios.
        </p>
      </div>

      {/* Testimonios en columnas */}
      <div className="row g-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-md-4">
            <div className="card border-0 shadow-sm p-4">
              <div className="d-flex align-items-center mb-3">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle me-3"
                  style={{ width: '50px', height: '50px' }}
                />
                <div>
                  <h3 className="h6 fw-semibold mb-0">{testimonial.name}</h3>
                  <p className="text-secondary small">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-secondary fst-italic">"{testimonial.text}"</p>
              <div className="text-warning mt-3">
                ★★★★★
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
