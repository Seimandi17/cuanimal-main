import { Route } from "react-router-dom";
import BackofficesLayout from "./layouts/BackofficesLayouts";
import Home from "./Home";
import ListaClientes from "./pages/admin/Clientes";
import ListaProveedores from "./pages/admin/Proveedores";
import ServiciosOfrecidos from "./pages/admin/Servicios";
import Configuracion from "./pages/admin/Config";
import MisServicios from "./pages/provider/Servicios";
import Pedidos from "./pages/provider/Pedidos";
import MiPerfil from "./pages/provider/Perfil";
import MensajesSoporte from "./pages/provider/Soporte";
import ValidarCuentas from "./pages/admin/Validate";
import HistorialServicios from "./pages/provider/History";

export const RoutesBackoffices = [
  <Route key="/backoffice" path="/backoffice" element={<BackofficesLayout />}>
    <Route index element={<Home />} />
    <Route path="admin/validaciones" element={<ValidarCuentas />} />
    <Route path="admin/clientes/lista-cliente" element={<ListaClientes />} />
    <Route path="admin/proveedores/lista-proveedores" element={<ListaProveedores />} />
    <Route path="admin/servicios" element={<ServiciosOfrecidos />} />
    <Route path="admin/configuracion" element={<Configuracion />} />
    <Route path="proveedor/mis-servicios" element={<MisServicios />} />
    <Route path="proveedor/pedidos" element={<Pedidos />} />
    <Route path="proveedor/mi-perfil" element={<MiPerfil />} />
    <Route path="proveedor/historial" element={<HistorialServicios />} />
    <Route path="proveedor/soporte" element={<MensajesSoporte />} />
    <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
  </Route>
];
