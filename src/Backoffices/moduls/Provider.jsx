export default function Provider() {
  return (
    <section className="sectionModuls">
      <h1> Provider page</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">DNI</th>
            <th scope="col">Email</th>
            <th scope="col">Celular</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider,index) => {
            return(
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{provider.name}</td>
              <td>{provider.lastName}</td>
              <td>{provider.dni}</td>
              <td>{provider.email}</td>
              <td>{provider.phone}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </section>
  );
}

export const PageInfo = {
  path: "proveedor",
  title: "Página de provider",
  homeStats: "Contactos registrados",
  logo: "",
  count: 10,
};

const providers = [
  {
    name: "Lucas",
    lastName: "Fernández",
    dni: "32145678",
    email: "lucas.fernandez@example.com",
    phone: "+54 9 11 2345-6789",
  },
  {
    name: "Mariana",
    lastName: "Gómez",
    dni: "29876543",
    email: "mariana.gomez@example.com",
    phone: "+54 9 11 8765-4321",
  },
  {
    name: "Javier",
    lastName: "Pérez",
    dni: "31098765",
    email: "javier.perez@example.com",
    phone: "+54 9 351 6543-2109",
  },
  {
    name: "Sofía",
    lastName: "López",
    dni: "28654321",
    email: "sofia.lopez@example.com",
    phone: "+54 9 223 9876-5432",
  },
  {
    name: "Martín",
    lastName: "Rodríguez",
    dni: "33211234",
    email: "martin.rodriguez@example.com",
    phone: "+54 9 261 1234-5678",
  },
  {
    name: "Carla",
    lastName: "Díaz",
    dni: "30987654",
    email: "carla.diaz@example.com",
    phone: "+54 9 381 4321-8765",
  },
  {
    name: "Fernando",
    lastName: "Martínez",
    dni: "29543210",
    email: "fernando.martinez@example.com",
    phone: "+54 9 11 6789-1234",
  },
  {
    name: "Paula",
    lastName: "Silva",
    dni: "31567890",
    email: "paula.silva@example.com",
    phone: "+54 9 11 7654-3210",
  },
  {
    name: "Ricardo",
    lastName: "Sánchez",
    dni: "28765432",
    email: "ricardo.sanchez@example.com",
    phone: "+54 9 341 8901-2345",
  },
  {
    name: "Laura",
    lastName: "Gutiérrez",
    dni: "31234567",
    email: "laura.gutierrez@example.com",
    phone: "+54 9 351 5678-9012",
  },
  {
    name: "Diego",
    lastName: "Méndez",
    dni: "30345678",
    email: "diego.mendez@example.com",
    phone: "+54 9 379 3456-7890",
  },
  {
    name: "Valentina",
    lastName: "Ramos",
    dni: "29876543",
    email: "valentina.ramos@example.com",
    phone: "+54 9 299 4321-6789",
  },
  {
    name: "Gabriel",
    lastName: "Herrera",
    dni: "28789012",
    email: "gabriel.herrera@example.com",
    phone: "+54 9 264 6789-0123",
  },
  {
    name: "Natalia",
    lastName: "Cruz",
    dni: "32456789",
    email: "natalia.cruz@example.com",
    phone: "+54 9 387 9876-5432",
  },
  {
    name: "Facundo",
    lastName: "Ortega",
    dni: "31123456",
    email: "facundo.ortega@example.com",
    phone: "+54 9 11 8765-4321",
  },
];