import { Brewery } from "@/types";
import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomImage = async () : Promise<string | null> => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: "Gm8r0aT0ZWBl5_rMe_pKav_hG2IbgRiT0eyf57ElGF0",
        query: "brewery",
      },
    });
    console.log(response.data);
    const imageUrl = response.data.urls.raw;
    return imageUrl;
  } catch (error) {
    console.error("Error fetching random image:", error);
    return null;
  }
};

export const getBreweryImages = async () : Promise<string[]> => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: "Gm8r0aT0ZWBl5_rMe_pKav_hG2IbgRiT0eyf57ElGF0",
        query: "brewery",
        per_page: 3,
      },
    });
    const imageUrls = response.data.results.map((image: any) => image.urls.raw);

    return imageUrls;
  } catch (error) {
    console.error("Error fetching brewery images:", error);
    return [];
  }
};
