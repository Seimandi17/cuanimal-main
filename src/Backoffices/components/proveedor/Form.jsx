export function Form({callback}) {
  return (
    <form onSubmit={callback}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Nombre"
          name="name"
        />
        <label htmlFor="floatingInput">Nombre</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Apellido"
          name="lastName"
        />
        <label htmlFor="floatingInput">Apellido</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Celular"
          name="phone"
        />
        <label htmlFor="floatingInput">Celular</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="Email"
          name="email"
        />
        <label htmlFor="floatingInput">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Dirección"
          name="address"
        />
        <label htmlFor="floatingInput">Dirección</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Servicio"
          name="services"
        />
        <label htmlFor="floatingInput">Servicio</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Disponibilidad"
          name="availability"
        />
        <label htmlFor="floatingInput">Disponibilidad</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Certificación"
          name="certification"
        />
        <label htmlFor="floatingInput">Certificación</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Descripción"
          name="description"
        />
        <label htmlFor="floatingInput">Descripción</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Evidencia"
          name="evidence"
        />
        <label htmlFor="floatingInput">Evidencia</label>
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
