import GestionServicio from "./GestionServicio";
import '../../styles/provider/ListaServicios.css'
import { getData } from "../../store/products/storeProducts";
import { useEffect, useState } from "react";


const ListaServicios = () => {
  
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        setServices(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="lista-servicios container mt-4">
      <h3 className="text-center fw-bold mb-4">Servicios Agregados</h3>
      {services.length > 0 ? (
        <div className="row">
          {services.map((servicio, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <GestionServicio
                servicio={servicio}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted text-center">Aún no has agregado servicios.</p>
      )}
    </div>
  );
};

export default ListaServicios;