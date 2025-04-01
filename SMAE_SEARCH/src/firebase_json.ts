// Importa Firebase y Firestore
import { initializeApp } from "firebase/app";
import axios from "axios";
import { SmaeResponse } from "./interface/SmaeResponse";



// Configuración de Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "smae-77888.firebaseapp.com",
  databaseURL: "https://smae-77888-default-rtdb.firebaseio.com/.json",
  projectId: "smae-77888",
  storageBucket: "smae-77888.firebasestorage.app",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
// Establece el tiempo de expiración en cache (en milisegundos)
const CACHE_EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 24 horas


export const consumirJSON = async (): Promise<SmaeResponse[]> => {
    const cachedData = localStorage.getItem("smaeData");
    const cachedTimestamp = localStorage.getItem("smaeDataTimestamp");
  
    if (cachedData && cachedTimestamp) {
      const currentTime = new Date().getTime();
      if (currentTime - parseInt(cachedTimestamp) < CACHE_EXPIRATION_TIME) {
        console.log("¡Usando datos de cache por 24 horas!");
        return JSON.parse(cachedData); // almacenamos todos los datos correctamente
      }
    }

    try {
      console.log("Iniciando petición a smae2.json...");
      const response = await axios.get<SmaeResponse[]>(`${app.options.databaseURL}`);
  
      if (!response.data) {
        throw new Error("No se recibieron datos desde Firebase");
      }
      console.log("Datos recibidos de Firebase:", response.data);
  
      //Guardar TODOS los campos, incluyendo Categoría
      localStorage.setItem("smaeData", JSON.stringify(response.data));
      localStorage.setItem("smaeDataTimestamp", new Date().getTime().toString());
  
      return response.data;
    } catch (error) {
      console.error("Error al buscar datos:", error);
      throw new Error("Un error ocurrió " + error);
    }
  };
/*consumirJSON()
  .then((data) => console.log("Resultados de consumir json: ", data))
  .catch((error) => console.error("Error:", error));
*/

// Llamar la función para probar
//consumirJSON()//.then((data)=>console.log(data));

export const buscarCategoria = async (categoria: string): Promise<SmaeResponse[]> => {
  try {
    if (!categoria) throw new Error("¡La categoría no puede estar vacía!");

    // Obtener los datos en caché
    const cachedData = localStorage.getItem("smaeData");

    if (!cachedData) {
      console.log("No hay datos en caché, realizando petición...");
      await consumirJSON(); // Carga los datos en caché si aún no están
    }

    const dataJSON: SmaeResponse[] = JSON.parse(localStorage.getItem("smaeData")!);
    
    console.log("Datos obtenidos del caché:", dataJSON); // Debugging
    // Verificar si hay datos sin "Categoría"
    const sinCategoria = dataJSON.filter((item) => item.Categoría === undefined);
    if (sinCategoria.length > 0) {
      console.warn(" Hay elementos sin 'Categoría' en los datos:", sinCategoria);
    }

    // Filtrar solo elementos que tengan la propiedad "Categoria" definida
    const resultado = dataJSON.filter(
      (elemento) => elemento.Categoría && elemento.Categoría.toLowerCase() === categoria.toLowerCase().trim()
    );

    return resultado;
  } catch (error) {
    console.error("Error al buscar categoría:", error);
    throw new Error("Ocurrió un error: " + error);
  }
};

// Probar buscarCategoria
/*buscarCategoria("verduras")
  .then((data) => console.log("Resultados de la categoría 'verduras':", data))
  .catch((error) => console.error("Error:", error));
*/
  export const buscarAlimento = async (comida: string): Promise<SmaeResponse[]> => {
    try {
      if (!comida) throw new Error("¡El alimento no puede estar vacío!");
  
      // Obtener los datos en caché
      const cachedData = localStorage.getItem("smaeData");
  
      if (!cachedData) {
        console.log("No hay datos en caché, realizando petición...");
        await consumirJSON(); // Carga los datos en caché si aún no están
      }
  
      const dataJSON: SmaeResponse[] = JSON.parse(localStorage.getItem("smaeData")!);
  
      // Normalizar los nombres a minúsculas
      const jsonLower = dataJSON.map((elemento) => ({
        ...elemento,
        Alimento: elemento.Alimento.toLowerCase(),
      }));
  
      // Filtrar por alimento
      const regex = new RegExp(`\\b${comida.toLowerCase().trim()}\\b`, "i");
      const comidaArr = jsonLower.filter((elemento) => regex.test(elemento.Alimento));
  
      return comidaArr;
    } catch (error) {
      console.error("Error al buscar comida:", error);
      throw new Error("Ocurrió un error: " + error);
    }
  };
  
// Probar buscarAlimento
/*buscarAlimento("apio")
  .then((data) => console.log("Resultados del alimento 'apio':", data))
  .catch((error) => console.error("Error:", error));*/
