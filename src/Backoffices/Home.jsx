import { modules } from "./services/ModulsExport";

export default function Home() {
  return (
    <div className="dashboard sectionModuls">
      <header>
        <h2> Dashboard </h2>
      </header>
      <main className="dashboard-stats d-flex gap-3">
        {modules.map((module, index) => (
          <div
            key={index}
            className="card text-center dashboard-card"
            
          >
            <img
              src={module.logo}
              className="card-img-top logoImg mt-5"
              alt="Logo"
            />

            <div className="card-body">
              <h5> {module.homeStats}</h5>
              <strong>{module.count}</strong>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
