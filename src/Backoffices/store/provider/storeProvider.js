import { BASE_URL } from "../../../config/config";

// Función para verificar autenticación y permisos
const checkAuthAndRole = (requiredRole) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) {
    throw new Error("No estás autenticado. Por favor, inicia sesión.");
  }

  if (requiredRole && user.role_id !== requiredRole) {
    throw new Error("No tienes permisos para realizar esta acción.");
  }

  return token;
};

// Obtener lista de proveedores (GET /proveedor)
export async function getData() {
  try {
    const token = checkAuthAndRole(1);

    const response = await fetch(`${BASE_URL}/proveedor`, {
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

// Crear un nuevo proveedor (POST /proveedor)
export async function setData(formData) {
  try {
    // Verificar autenticación y permisos (solo administradores)
    // const token = checkAuthAndRole(1);

    const response = await fetch(`${BASE_URL}/proveedor`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Error al crear el proveedor: ${response.status}`
      );
    }

    const json = await response.json();
    return { success: true, data: json.data };
  } catch (error) {
    console.error("Error en setData:", error.message);
    return { success: false, message: error.message };
  }
}

// Actualizar un proveedor existente (PUT /proveedor/{id})
export async function updateData(formData, id) {
  try {
    // Verificar autenticación y permisos (solo administradores)
    const token = checkAuthAndRole(1);

    const response = await fetch(`${BASE_URL}/proveedor/${id}`, {
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

// Eliminar un proveedor (DELETE /proveedor/{id})
export async function deleteData(id) {
  try {
    // Verificar autenticación y permisos (solo administradores)
    const token = checkAuthAndRole(1);

    const response = await fetch(`${BASE_URL}/proveedor/${id}`, {
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
        errorData.message ||
          `Error al eliminar el proveedor: ${response.status}`
      );
    }

    const json = await response.json();
    return { success: true, data: json.data };
  } catch (error) {
    console.error("Error en deleteData:", error.message);
    return { success: false, message: error.message };
  }
}
