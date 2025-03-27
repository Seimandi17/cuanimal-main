import { BASE_URL } from "../../../config/config";

// Permite múltiples roles
const checkAuthAndRole = (requiredRole) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) {
    throw new Error("No estás autenticado. Por favor, inicia sesión.");
  }

  if (requiredRole) {
    if (Array.isArray(requiredRole)) {
      if (!requiredRole.includes(user.role_id)) {
        throw new Error("No tienes permisos para realizar esta acción.");
      }
    } else if (user.role_id !== requiredRole) {
      throw new Error("No tienes permisos para realizar esta acción.");
    }
  }

  return token;
};

export async function getData() {
  try {
    const token = checkAuthAndRole([1, 2]); // Admin y Proveedor

    const response = await fetch(`${BASE_URL}/products`, {
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
        errorData.message || `Error al obtener los productos: ${response.status}`
      );
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error en getData:", error.message);
    return { success: false, message: error.message };
  }
}

export async function setData(formData) {
  try {
    const token = checkAuthAndRole([1, 2]); // Admin y Proveedor

    // Obtener el token CSRF
    await fetch(`${BASE_URL}/sanctum/csrf-cookie`, {
      method: "GET",
      credentials: "include",
    });

    // Enviar la solicitud POST
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Error al crear el producto: ${response.status}`
      );
    }

    const json = await response.json();
    return { success: true, data: json.data };
  } catch (error) {
    console.error("Error en setData:", error.message);
    return { success: false, message: error.message };
  }
}

export async function updateData(formData, id) {
  try {
    const token = checkAuthAndRole([1, 2]); // Admin y Proveedor

    await fetch(`${BASE_URL}/sanctum/csrf-cookie`, {
      method: "GET",
      credentials: "include",
    });

    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Error al actualizar el producto: ${response.status}`
      );
    }

    const json = await response.json();
    return { success: true, data: json.data };
  } catch (error) {
    console.error("Error en updateData:", error.message);
    return { success: false, message: error.message };
  }
}
/* export async function getAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al obtener los productos');
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error en getAllProducts:", error.message);
    return [];
  }
}*/

export async function deleteData(id) {
  try {
    const token = checkAuthAndRole([1, 2]); // Admin y Proveedor

    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Error al eliminar el producto: ${response.status}`
      );
    }

    const json = await response.json();
    return { success: true, data: json.data };
  } catch (error) {
    console.error("Error en deleteData:", error.message);
    return { success: false, message: error.message };
  }
}

export async function changeStatus(id, newStatus) {
  try {
    const token = checkAuthAndRole(1); // Solo el Admin puede hacerlo

    await fetch(`${BASE_URL}/sanctum/csrf-cookie`, {
      method: "GET",
      credentials: "include",
    });

    const response = await fetch(`${BASE_URL}/products/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: newStatus }),
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Error al cambiar el estado: ${response.status}`
      );
    }

    const json = await response.json();
    return { success: true, data: json.data };
  } catch (error) {
    console.error("Error en changeStatus:", error.message);
    return { success: false, message: error.message };
  }
}
