const BASE_URL = "http://localhost:8000/api";

export async function getData() {
  try {
    const response = await fetch(`${BASE_URL}/proveedor`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function setData(formData) {
  try {
    console.log(formData);
    const response = await fetch(`${BASE_URL}/proveedor`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      }
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

export async function updateData(formData, id) {
  try {
    const response = await fetch(`${BASE_URL}/proveedor/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      }
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
    const response = await fetch(`${BASE_URL}/proveedor/${id}`, {
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
