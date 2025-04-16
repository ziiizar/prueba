import { Brewery } from "@/types";
import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomImage = async (): Promise<string | null> => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: "Gm8r0aT0ZWBl5_rMe_pKav_hG2IbgRiT0eyf57ElGF0",
        query: "brewery",
      },
    });
    return response.data.urls.regular;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        console.warn("Límite de peticiones excedido en Unsplash API");
      } else {
        console.warn("Error en la petición a Unsplash:", error.message);
      }
    } else {
      console.warn("Error inesperado:", error);
    }
    return null;
  }
};
export const getBreweryImages = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: "Gm8r0aT0ZWBl5_rMe_pKav_hG2IbgRiT0eyf57ElGF0",
        query: "brewery",
        per_page: 3,
      },
    });
    return response.data.results.map((image: any) => image.urls.regular);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching brewery images:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return [];
  }
};
