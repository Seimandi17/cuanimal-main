import { useState } from "react";
import PedidosHeader from "../../components/provider/pedidos/PedidosHeader";
import ListaPedidos from "../../components/provider/pedidos/ListaPedidos";
import "../../styles/provider/Pedidos.css";

export default function Pedidos() {

  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      servicio: "Paseo de Mascotas",
      cliente: "Juan Pérez",
      fecha: "2025-03-25",
      numPersonas: 1,
      estado: "pendiente",
      direccion: "Calle Falsa 123, Madrid",
      notas: "Mi perro es un golden retriever.",
    },
    {
      id: 2,
      servicio: "Alojamiento",
      cliente: "Lucía García",
      fecha: "2025-03-27",
      numPersonas: 2,
      estado: "aceptado",
      direccion: "Avenida Central 456, Valencia",
      notas: "Llegaremos por la tarde.",
    },
  ]);

  const aceptarPedido = (id) => {
    actualizarEstadoPedido(id, "aceptado");
  };

  const rechazarPedido = (id) => {
    actualizarEstadoPedido(id, "rechazado");
  };

  const completarPedido = (id) => {
    actualizarEstadoPedido(id, "completado");
  };

  const actualizarEstadoPedido = (id, nuevoEstado) => {
    const pedidosActualizados = pedidos.map((p) =>
      p.id === id ? { ...p, estado: nuevoEstado } : p
    );
    setPedidos(pedidosActualizados);
  };

  return (
    <div className="pedidos-page sectionModuls">
      <div className="pedidos-container">
        <PedidosHeader total={pedidos.length} />

        <ListaPedidos
          pedidos={pedidos}
          onAceptar={aceptarPedido}
          onRechazar={rechazarPedido}
          onCompletar={completarPedido}
        />
      </div>
    </div>
  );
}


export const PageInfo = {
  path: "proveedor/pedidos",
  title: "Pedidos",
  homeStats: "Pedidos recibidos",
  logo: "/icons-backoffice/pedidos.svg",
  count: 2,
};
