import { useEffect, useState } from "react";
import ListaHistorial from "./components/ListaHistorial";
import "./styles/Historial.css";
import { getHistorialProveedor } from "./store/storeHistorial";

export default function HistorialServicios() {
    const [historial, setHistorial] = useState([]);
    const [cargando, setCargando] = useState(true);
  
    useEffect(() => {
      const cargarHistorial = async () => {
        const datos = await getHistorialProveedor();
        setHistorial(datos);
        setCargando(false);
      };
  
      cargarHistorial();
    }, []);
  
    return (
      <div className="historial-servicios-page sectionModuls">
        <h2 className="mb-4">Historial de Servicios Contratados</h2>
  
        {cargando ? (
          <p className="mensaje-cargando">Cargando historial...</p>
        ) : (
          <ListaHistorial historial={historial} />
        )}
      </div>
    );
  }

export const PageInfo = {
  path: "historial",
  title: "Historial de Servicios",
  homeStats: "Historial de Servicios",
  logo: "/icons-backoffice/history.svg",
  count: 1,
};
