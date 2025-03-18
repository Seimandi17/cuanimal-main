import { BrowserRouter, Routes} from "react-router-dom";
import { RoutesBackoffices } from "./Backoffices/routes";
import { RoutesFrontoffices } from "./Frontoffices/routes";
import { RoutesSignInUp } from "./login/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesFrontoffices}
        {RoutesBackoffices}
        {RoutesSignInUp}
      </Routes>
    </BrowserRouter>
  );
}
