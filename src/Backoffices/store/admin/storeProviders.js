import { BASE_URL } from "../../../config/config";

const checkAuthAndRole = (requiredRole) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) {
    throw new Error("No estás autenticado. Por favor, inicia sesión.");
  }

  if (requiredRole && user.role_id !== requiredRole) {
    throw new Error("No tienes permisos para acceder a esta información.");
  }

  return token;
};

export async function getAllProviders() {
  try {
    const token = checkAuthAndRole(1); // Solo admin

    const response = await fetch(`${BASE_URL}/providers`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al obtener proveedores");
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error en getAllProviders:", error.message);
    return [];
  }
}
