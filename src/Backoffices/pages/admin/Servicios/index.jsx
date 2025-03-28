import ListaServiciosAdmin from "../../../components/admin/servicios-ofrecidos/ListaServiciosAdmin.jsx";

export default function ServiciosOfrecidos() {
  return (
    <div className="servicios-ofrecidos-admin">
      <ListaServiciosAdmin />
    </div>
  );
}
  export const PageInfo = {
    path: "servicios",
    title: "Servicios ofrecidos",
    homeStats: "Servicios ofrecidos",
    logo: "/icons-backoffice/servicio-admin.svg",
    count: 20,
  };