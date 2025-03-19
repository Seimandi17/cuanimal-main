export function FormProveedor({callback}) {
  return (
    <form onSubmit={callback}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="nameProvider"
          placeholder="Nombre"
          name="name"
        />
        <label htmlFor="nameProvider">Nombre</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="lastNameProvider"
          placeholder="Apellido"
          name="lastName"
        />
        <label htmlFor="lastNameProvider">Apellido</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="phoneProvider"
          placeholder="Celular"
          name="phone"
        />
        <label htmlFor="phoneProvider">Celular</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="emailProvider"
          placeholder="Email"
          name="email"
        />
        <label htmlFor="emailProvider">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="addressProvider"
          placeholder="Dirección"
          name="address"
        />
        <label htmlFor="addressProvider">Dirección</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="servicesProvider"
          placeholder="Servicio"
          name="services"
        />
        <label htmlFor="servicesProvider">Servicio</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="availabilityProvider"
          placeholder="Disponibilidad"
          name="availability"
        />
        <label htmlFor="availabilityProvider">Disponibilidad</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="certificationProvider"
          placeholder="Certificación"
          name="certification"
        />
        <label htmlFor="certificationProvider">Certificación</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="descriptionProvider"
          placeholder="Descripción"
          name="description"
        />
        <label htmlFor="descriptionProvider">Descripción</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="evidenceProvider"
          placeholder="Evidencia"
          name="evidence"
        />
        <label htmlFor="evidenceProvider">Evidencia</label>
      </div>
      <button className="btn btn-primary" type="submit"> Enviar Solicitud </button>
      {/* <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div> */}
   
    </form>
  );
}
