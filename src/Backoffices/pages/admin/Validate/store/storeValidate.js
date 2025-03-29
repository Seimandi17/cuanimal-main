import { BASE_URL } from "../../../../../config/config";
import { checkAuthAndRole } from "../../../../services/authToken";

export async function getData() {
  try {
    const token = checkAuthAndRole(1);

    const response = await fetch(`${BASE_URL}/listProviderPending`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message ||
          `Error al obtener los proveedores: ${response.status}`
      );
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error en getData:", error.message);
    return { success: false, message: error.message };
  }
}

export async function updateData(formData) {
  try {
    const token = checkAuthAndRole(1);

    const response = await fetch(`${BASE_URL}/validateProvider`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message ||
          `Error al actualizar el proveedor: ${response.status}`
      );
    }

    const json = await response.json();
    return { success: true, data: json.data };
  } catch (error) {
    console.error("Error en updateData:", error.message);
    return { success: false, message: error.message };
  }
}