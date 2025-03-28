import { useEffect, useState } from "react";
import { getData } from "../../../../login/store/client/storeClient.js";
import ListaClientes from "../../../components/admin/clientes/ListaClientes";

export default function ListaClientesPage() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const cargarClientes = async () => {
      const todos = await getData();
      const soloClientes = todos?.filter((u) => u.role_id === 3) || [];
      setClientes(soloClientes);
    };

    cargarClientes();
  }, []);

  return (
    <div className="lista-clientes-page">
      <h2 className="mb-4">Lista de Clientes</h2>
      <ListaClientes clientes={clientes} />
    </div>
  );
}

export const PageInfo = {
  path: "clientes/lista-cliente",
  title: "Lista de Clientes",
  homeStats: "Lista de Clientes",
  logo: "/icons-backoffice/list-client.svg",
  count: 20,
};
