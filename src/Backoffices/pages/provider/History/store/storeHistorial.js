import { BASE_URL } from "../../../../../config/config.js";

// Obtener historial de servicios contratados para el proveedor autenticado
export async function getHistorialProveedor() {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${BASE_URL}/historial`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener el historial");
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error en getHistorialProveedor:", error.message);
    return [];
  }
}