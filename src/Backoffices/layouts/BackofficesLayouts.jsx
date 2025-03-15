import { Outlet, Link } from "react-router-dom";
import '../styles/backofficesStyles.css'
import NavBar from "../components/NavBar";

export default function BackofficesLayout() {
  return (
    <div className="d-flex flex-row">
      <NavBar />
      <Outlet />
    </div>
  );
}