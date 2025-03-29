export const checkAuthAndRole = (requiredRole) => {
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