const FAQ = () => {
    const faqs = [
      {
        id: "one",
        question: "¿Cómo encontrar los mejores destinos pet-friendly?",
        answer: "Puedes utilizar nuestro buscador y filtrar por ubicación, tipo de servicio y fechas para encontrar el mejor destino para viajar con tu mascota."
      },
      {
        id: "two",
        question: "¿Qué necesito para viajar con mi mascota?",
        answer: "Depende del destino, pero generalmente necesitarás su cartilla de vacunación, su identificación y un transportín si viajas en transporte público o avión."
      },
      {
        id: "three",
        question: "¿Cuanimal ofrece transporte para mascotas?",
        answer: "Sí, contamos con servicios de transporte especializado para mascotas. Puedes marcar la opción 'Solicitar transporte' al hacer tu búsqueda."
      },
      {
        id: "four",
        question: "¿Cómo reservar alojamiento pet-friendly?",
        answer: "En la sección 'Viajar con Ellos', selecciona el destino y filtra por 'Alojamiento'. Podrás ver hoteles y casas de alquiler aptas para mascotas."
      },
      {
        id: "five",
        question: "¿Hay restaurantes pet-friendly?",
        answer: "Sí, en nuestra plataforma puedes encontrar restaurantes que permiten mascotas y ofrecen espacios adaptados para ellas."
      },
      {
        id: "six",
        question: "¿Qué hacer si mi mascota necesita atención veterinaria durante el viaje?",
        answer: "Dentro de cada destino, te mostramos veterinarios y clínicas disponibles para emergencias o consultas regulares."
      }
    ];
  
    return (
      <div className="container py-5">
        <h3 className="fw-bold text-center mb-4">Preguntas frecuentes sobre viajar con mascotas</h3>
        <div className="row g-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="col-md-6">
              <div className="accordion accordion-flush" id={`accordion-${faq.id}`}>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${faq.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${faq.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent={`#accordion-${faq.id}`}
                  >
                    <div className="accordion-body text-muted">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQ;
  