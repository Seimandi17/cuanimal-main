import { Outlet } from "react-router-dom";
import '../styles/login.css'


export default function LoginLayout() {
  return (
      <div className="login-layout d-flex flex-column justify-content-center align-items-center">
        <Outlet />
      </div>
  );
}
