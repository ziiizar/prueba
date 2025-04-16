"use client";

import { useState, useCallback } from "react";
import { getBreweryByState } from "@/services/breweries";
import { Brewery } from "@/types";

export const useBreweriesByStatePagination = ({limit, state}: {limit: number, state: string}) => {
  const [page, setPage] = useState(1);
  const [breweries, setBreweries] = useState<Brewery[] | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBreweries = useCallback(async () => {
    try {
      if (loading) return;
      setLoading(true);

      const currentPage = page;
      const breweries = await getBreweryByState(state, limit, currentPage);
      
      setBreweries((prev) =>
        currentPage === 1 ? breweries : [...(prev ?? []), ...breweries]
      );

      const totalPages = 10;
      setHasMore(totalPages ? currentPage < totalPages : false);
      setPage(currentPage + 1);
    } catch (err) {
      setError("Error al cargar las cervecerías");
    } finally {
      setLoading(false);
    }
  }, [page, loading, state, limit]);

  return { breweries, hasMore, loading, error, fetchBreweries };
};
