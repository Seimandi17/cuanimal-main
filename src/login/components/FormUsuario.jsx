import FormValues from "../../shared/services/FormValues";
import { setData } from "../store/client/storeClient";

const handleSubmit = (event) => {
 const values = new FormValues(event);
 setData(values);
}
export function FormUsuario() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Nombre"
          name="name"
        />
        <label htmlFor="name">Nombre</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Apellido"
          name="lastName"
        />
        <label htmlFor="lastName">Apellido</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          name="email"
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
        />
        <label htmlFor="password">Password</label>
      </div>

      <button className="btn btn-primary mt-2" type="submit"> Registrar </button>
   
    </form>
  );
}