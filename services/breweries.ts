import api from "@/lib/axios";
import { Brewery } from "@/types";

export const getBreweries = async (limit: number = 10, page: number = 1): Promise<Brewery[]> => {
    try {
        const response = await api.get("/breweries", {params: {per_page: limit, page}});
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}


export const getBreweryByState = async (state: string, limit: number = 10, page: number = 1): Promise<Brewery[]> => {
    try {
        const response = await api.get('/breweries', {params: {by_state: state, per_page: limit, page}});
        console.log('stateee');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getBreweryById = async (brewery_id: string): Promise<Brewery | null> => {
    try {
        const response = await api.get(`/breweries/${brewery_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

