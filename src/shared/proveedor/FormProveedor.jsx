import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setData } from "../../Backoffices/store/provider/storeProvider";

export function FormProveedor() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    businessName: "",
    password:"",
    email: "",
    phone: "",
    category: "",
    description: "",
    termsAccepted: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData); // Depuración
    setData(formData); 
    setIsSubmitted(true);
  };

  return (
    <section className="form-section">
      <div className="form-container">
        {isSubmitted ? (
          // Mensaje de éxito
          <div className="success-message">
            <h2 className="text-center fw-bold mb-3">¡Solicitud Enviada!</h2>
            <p className="text-center">
              Tu solicitud ha sido enviada correctamente. En breve será revisada
              por el administrador.
            </p>
            <button
              className="btn btn-primary w-100 mt-3"
              onClick={() => navigate("/")}
            >
              Volver al Inicio
            </button>
          </div>
        ) : (
          // Formulario de registro
          <>
            <h2 className="text-center fw-bold mb-4">
              Registro de Proveedores
            </h2>
            <form className="provider-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div>
                  <label htmlFor="firstName">Nombre</label>
                  <input
                    type="text"
                    id="firstName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Apellidos</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Tus apellidos"
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div>
                  <label htmlFor="businessName">Nombre de la Empresa</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Nombre de tu negocio"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Tu contraseña"
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category">Tipo de Servicio</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un tipo de servicio</option>
                  <option value="transporte">Transporte de Mascotas</option>
                  <option value="alojamiento">Alojamiento</option>
                  <option value="paseo">Paseo de Perros</option>
                  <option value="adiestramiento">Adiestramiento</option>
                  <option value="veterinario">Servicio Veterinario</option>
                  <option value="tienda">Tienda de Productos</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="description">
                  Descripción de tus Servicios
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe brevemente los servicios que ofreces..."
                  required
                />
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="termsAccepted">
                  Acepto los{" "}
                  <a href="/terminos" className="text-primary">
                    términos y condiciones
                  </a>{" "}
                  y la{" "}
                  <a href="/privacidad" className="text-primary">
                    política de privacidad
                  </a>{" "}
                  de Cuanimal.
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 fw-semibold"
              >
                Enviar Solicitud
              </button>
              <button
                type="button"
                className="btn btn-outline-primary w-100 mt-2"
                onClick={() => navigate(-1)}
              >
                Volver Atrás
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
