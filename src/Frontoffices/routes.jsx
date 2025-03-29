import { Route } from "react-router-dom";
import Contact from "./pages/Contact/Index";
import PageLayout from "./layouts/PageLayout";
import Home from "./Home";
import Adiestramiento from "./pages/Adiestramiento";
import Alojamiento from "./pages/Alojamiento";
import AllFriend from "./pages/AllFriend";
import Adopta from "./pages/Adopta";
import Blog from "./pages/Blog";
import Paseo from "./pages/Paseo";
import Travel from "./pages/Travel";
import Transport from "./pages/Transport";
import Proveedores from "./pages/Provider"
import Explorer from "./pages/Explorer"

export const RoutesFrontoffices = [
    <Route key={'/frontoffices'} path="/" element={<PageLayout/>}>
      <Route index element={<Home />} />
      <Route path="adiestramiento" element={<Adiestramiento />} />
      <Route path="adopta" element={<Adopta />} />
      <Route path="todo-para-tu-amigo" element={<AllFriend />} />
      <Route path="alojamiento" element={<Alojamiento />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contacto" element={<Contact />} />
      <Route path="explorer" element={<Explorer />} />
      <Route path="paseo" element={<Paseo />} />
      <Route path="proveedores" element={<Proveedores />} />
      <Route path="transporte-de-mascotas" element={<Transport />} />
      <Route path="viajar-con-ellos" element={<Travel />} />
      <Route path="*" element={<h1> 404 </h1>} />
    </Route>
];
