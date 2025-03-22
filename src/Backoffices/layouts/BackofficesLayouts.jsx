import { Outlet } from "react-router-dom";
import '../styles/backofficesStyles.css';
import NavBar from "../components/NavBar";

export default function BackofficesLayout() {
  return (
    <div className="backoffice-layout d-flex">
      <NavBar />
      <div className="backoffice-content">
        <Outlet />
      </div>
    </div>
  );
}
