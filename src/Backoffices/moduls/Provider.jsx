import { useEffect, useState } from "react";
import { getData, setData } from "../store/provider/storeProvider";
import { FormProveedor } from "../../shared/proveedor/FormProveedor";
import FormValues from "../../shared/services/FormValues";

export default function Provider() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        setProviders(data);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormValues(event, true);
    const data = await setData(formData);
    if (data?.status) {
      console.log("SUCESSFULLY");
    }
  };

  return (
    <section className="sectionModuls">
      <h1> Provider page</h1>
      <p class="d-inline-flex gap-1">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Agregar Proveedor
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <FormProveedor callback={handleSubmit} />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Celular</th>
            <th scope="col">Email</th>
            <th scope="col">Direccion</th>
            <th scope="col">Servicios</th>
            <th scope="col">Disponibilidad</th>
            <th scope="col">Certificado</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Evidencia</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {providers &&
            providers?.map((provider, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{provider.name}</td>
                  <td>{provider.lastName}</td>
                  <td>{provider.phone}</td>
                  <td>{provider.email}</td>
                  <td>{provider.address}</td>
                  <td>{provider.services}</td>
                  <td>{provider.availability}</td>
                  <td>{provider.cretification}</td>
                  <td>{provider.description}</td>
                  <td>{provider.evidence}</td>
                  <td>{provider.status ? "Aprobado" : "Pendiente"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
}

export const PageInfo = {
  path: "proveedor",
  title: "Página de provider",
  homeStats: "Contactos registrados",
  logo: "",
  count: 10,
};
