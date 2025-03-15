import { BrowserRouter, Routes} from "react-router-dom";
import { RoutesBackoffices } from "./Backoffices/routes";
import { RoutesFrontoffices } from "./Frontoffices/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesFrontoffices}
        {RoutesBackoffices}
      </Routes>
    </BrowserRouter>
  );
}
