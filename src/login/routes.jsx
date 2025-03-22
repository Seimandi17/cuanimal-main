import { Route } from "react-router-dom";
import { Login } from "./login";
import { Register } from "./Register";
import { FormUsuario } from "./components/FormUsuario";
import { FormProveedor } from "../shared/proveedor/FormProveedor";
import LoginLayout from "./layouts/LoginLayout";

export const RoutesSignInUp = [
  <Route key={'/Login'} path="/" element={<LoginLayout />}>
    <Route path="Login" element={<Login />} />
    <Route path="Registrar" element={<Register />} />

    {/* Rutas nuevas para los formularios */}
    <Route path="Registrar/usuario" element={<FormUsuario />} />
    <Route path="Registrar/proveedor" element={<FormProveedor />} />
  </Route>
];
