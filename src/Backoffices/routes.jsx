import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import BackofficesLayout from "./layouts/BackofficesLayouts";
import Provider from "./moduls/Provider";
import Client from "./moduls/Clientes";

export const RoutesBackoffices = [
    <Route key={'/backoffices'} path="/backoffice" element={<BackofficesLayout />}>
      <Route index element={<Home />} />
      <Route path="proveedor" element={<Provider />} />
      <Route path="clientes" element={<Client />} />
      <Route path="/backoffice/*" element={<h1> 404 </h1>} />
    </Route>
];
