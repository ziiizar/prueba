import { getBreweries } from "@/services/breweries";
import { create } from "zustand";

type BreweryStoreProps = {
    breweries: any[];
    breweriesByCity: any[];
    loading: boolean;
    error: string | null;
    
}

type BreweryStoreActions = {
    fetchBreweries: () => Promise<void>;
    fetchBreweriesByCity: (city: string) => Promise<void>;
    setBreweries: (breweries: any[]) => void;
    setBreweriesByCity: (breweries: any[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

type BreweryStore = BreweryStoreProps & BreweryStoreActions;


    
    




