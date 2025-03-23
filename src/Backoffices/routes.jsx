import { Route } from "react-router-dom";
import BackofficesLayout from "./layouts/BackofficesLayouts";
import Home from "./Home";
import Client from "./moduls/Clientes";
import Provider from "./moduls/Provider";
import ListaClientes from "./pages/admin/Clientes/ListaClientes";
import DetalleCliente from "./pages/admin/Clientes/DetalleCliente";
import ListaProveedores from "./pages/admin/Proveedores/ListaProveedores";
import DetalleProveedor from "./pages/admin/Proveedores/DetalleProveedor";
import ServiciosOfrecidos from "./pages/admin/Servicios/ServiciosOfrecidos";
import Configuracion from "./pages/admin/Configuracion";
import MisServicios from "./pages/provider/MisServicios";
import Pedidos from "./pages/provider/Pedidos";
import PerfilProveedor from "./pages/provider/PerfilProveedor";
import MensajesSoporte from "./pages/provider/MensajesSoporte";

export const RoutesBackoffices = [
  <Route key="/backoffice" path="/backoffice" element={<BackofficesLayout />}>
    <Route index element={<Home />} />
    <Route path="clientes" element={<Client />} />
    <Route path="proveedor" element={<Provider />} />
    <Route path="admin/clientes/lista-cliente" element={<ListaClientes />} />
    <Route path="admin/clientes/:id" element={<DetalleCliente />} />
    <Route path="admin/proveedores/lista-proveedores" element={<ListaProveedores />} />
    <Route path="admin/proveedores/:id" element={<DetalleProveedor />} />
    <Route path="admin/servicios" element={<ServiciosOfrecidos />} />
    <Route path="admin/configuracion" element={<Configuracion />} />
    <Route path="proveedor/mis-servicios" element={<MisServicios />} />
    <Route path="proveedor/pedidos" element={<Pedidos />} />
    <Route path="proveedor/mi-perfil" element={<PerfilProveedor />} />
    <Route path="proveedor/mensajes" element={<MensajesSoporte />} />
    <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
  </Route>
];
