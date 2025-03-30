import { Route } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import Home from "./Home";
import Adiestramiento from "./pages/Adiestramiento";
import Adopta from "./pages/Adopta";
import AllFriend from "./pages/AllFriend";
import Alojamiento from "./pages/Alojamiento";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Explorer from "./pages/Explorer";
import Paseo from "./pages/Paseo";
import Proveedores from "./pages/Provider";
import Transport from "./pages/Transport";
import Travel from "./pages/Travel";


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
