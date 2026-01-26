import axios from "axios";

export async function getPosts(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error al consumir la API:", error.message);
    throw error;
  }
}
