import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import PageLayout from "./layouts/PageLayout";
import Home from "./Home";
import Travel from "./pages/Travel";
import Transport from "./pages/Transport";

export const RoutesFrontoffices = [
    <Route key={'/frontoffices'} path="/" element={<PageLayout/>}>
      <Route index element={<Home />} />
      <Route path="contacto" element={<Contact />} />
      <Route path="viajar-con-ellos" element={<Travel />} />-
      <Route path="transporte-de-mascotas" element={<Transport />} />-
      <Route path="*" element={<h1> 404 </h1>} />
    </Route>
];
