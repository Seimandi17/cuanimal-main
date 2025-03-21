import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesBackoffices } from "./Backoffices/routes";
import { RoutesFrontoffices } from "./Frontoffices/routes";
import { RoutesSignInUp } from "./login/routes";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas (SignInUp) */}
        {RoutesSignInUp}

        {/* Rutas protegidas para usuarios autenticados (Frontoffices) */}
        <Route element={<ProtectedRoute />}>{RoutesFrontoffices}</Route>

        {/* Rutas protegidas solo para administradores (Backoffices) */}
        <Route element={<ProtectedRoute requiredRole={1} />}>
          {RoutesBackoffices}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
