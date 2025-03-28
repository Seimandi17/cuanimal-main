//EN PROCESO...
class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, method = "GET", data = null, headers = {}) {
    const token = localStorage.getItem("token");
    const defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...headers,
    };

    const options = {
      method,
      headers: defaultHeaders,
      body: data ? JSON.stringify(data) : null,
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Error en la petición");
      }

      return responseData;
    } catch (error) {
      console.error("Error en la petición:", error.message);
      throw error;
    }
  }

  get(endpoint, headers = {}) {
    return this.request(endpoint, "GET", null, headers);
  }

  post(endpoint, data, headers = {}) {
    return this.request(endpoint, "POST", data, headers);
  }

  put(endpoint, data, headers = {}) {
    return this.request(endpoint, "PUT", data, headers);
  }

  delete(endpoint, headers = {}) {
    return this.request(endpoint, "DELETE", null, headers);
  }
}