import { Route } from "react-router-dom";
import { Login } from "./login";
import { Register } from "./Register";
import LoginLayout from "./layouts/LoginLayout";

export const RoutesSignInUp = [
    <Route key={'/Login'} path="/" element={<LoginLayout />}>
      {/* <Route index element={<Home />} /> */}
      <Route path="Login" element={<Login />} />
      <Route path="Registrar" element={<Register />} />
    </Route>
];