import axios from "axios";
import { getSession } from "next-auth/react"; // Importa la función para obtener la sesión

// Verifica que la URL base esté configurada
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL no está configurado");
}

export const axiosIntance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para añadir el token antes de cada petición
axiosIntance.interceptors.request.use(
  async (config) => {
    const session = await getSession(); // Obtén la sesión de NextAuth

    if (session && session.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`; // Agrega el token al header
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar respuestas
axiosIntance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Error response:", error.response);
      if (error.response.status === 401) {
        console.error("No autorizado");
      } else if (error.response.status === 500) {
        console.error("Error interno del servidor");
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in setting up request:", error.message);
    }

    return Promise.reject(new Error(error));
  }
);

export default axiosIntance;
