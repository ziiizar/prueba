"use client";

import Carrousel from "@/components/home/Carrousel";
import BreweryCards from "@/components/home/BreweryCards";
import { useBreweriesPagination } from "@/components/useBreweriesPagination";
import { useBreweriesByCityPagination } from "@/components/useBreweriesByCityPagination";
import PromoAlert from "@/components/home/PromoAlert";
export default function Home() {
  const userLocation = "California";
  const limit = 5;

  const {
    breweries: allBreweries,
    hasMore,
    loading,
    error,
    fetchBreweries,
  } = useBreweriesPagination({ limit });

  const {
    breweries: breweriesByState,
    hasMore: hasMoreByState,
    loading: loadingByState,
    error: errorByState,
    fetchBreweries: fetchBreweriesByState,
  } = useBreweriesByCityPagination({ limit, state: userLocation });


  return (
    <>
     
      <main className="flex flex-col w-full bg-background px-4 gap-2 pt-6">
      <PromoAlert />
        <Carrousel title="Todas las opciones">
          <BreweryCards
            data={allBreweries}
            loading={loading}
            error={error}
            hasMore={hasMore}
            fetchMoreData={fetchBreweries}
          ></BreweryCards>
        </Carrousel>
        {/* <Carrousel title="Opciones en California">
          <BreweryCards
            data={breweriesByCity}
            loading={loadingByCity}
            error={errorByCity}
            hasMore={hasMoreByCity}
            fetchMoreData={fetchBreweriesByCity}
          ></BreweryCards>
        </Carrousel> */}
      </main>
    </>
  );
}
