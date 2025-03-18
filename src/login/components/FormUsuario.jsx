export function FormUsuario({callback}) {
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
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="Email"
          name="email"
        />
        <label htmlFor="floatingInput">Email</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <button className="btn btn-primary mt-2" type="submit"> Registrar </button>
   
    </form>
  );
}