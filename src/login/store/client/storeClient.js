import { BASE_URL } from "../../../config/config";
export async function getData() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error.message);
  }
}
export async function loginUser(formData) {
  try {
      const response = await fetch(`${BASE_URL}/login`, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
      });

      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error al iniciar sesión');
      }

      const data = await response.json();
      const { user, token } = data.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      window.location.href = "/";
      return { success: true, message: `Inicio de sesión exitoso. Bienvenido, ${user.name}!` };
  } catch (error) {
      console.error('Error:', error);
      return { success: false, message: error.message || 'Error al iniciar sesión' };
  }
}

export async function setData(formData) {
  try {
      const response = await fetch(`${BASE_URL}/register`, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
      });

      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error al registrarse');
      }

      const data = await response.json();
      const { user } = data.data;
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = "/";
      return { success: true, message: `Registro exitoso. Bienvenido, ${user.name}!` };
  } catch (error) {
      console.error('Error:', error);
      return { success: false, message: error.message || 'Error al registrarse' };
  }
}

export async function logoutUser() {
    try {
        // Obtener el token de API desde localStorage
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('No se encontró el token de autenticación');
        }

        // Cerrar sesión
        const response = await fetch(`${BASE_URL}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`, // Enviar el token de API
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al cerrar sesión');
        }

        localStorage.removeItem('user');
        localStorage.removeItem('token');
        return { success: true, message: 'Sesión cerrada con éxito' };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: error.message || 'Error al cerrar sesión' };
    }
}

export async function updateData(formData, id) {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteData(id) {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error.message);
  }
}
