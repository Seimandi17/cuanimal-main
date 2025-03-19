import { BASE_URL } from "../../../config/config";

export async function setData(formData) {
  try {
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


