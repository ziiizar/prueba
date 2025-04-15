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
    <main className="flex flex-col w-full min-h-[calc(100vh-8rem)] bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6 w-full max-w-7xl mx-auto">
        <PromoAlert />
        <section className="space-y-6">
          <Carrousel title="Todas las opciones">
            <BreweryCards
              data={allBreweries}
              loading={loading}
              error={error}
              hasMore={hasMore}
              fetchMoreData={fetchBreweries}
            />
          </Carrousel>

          
            <Carrousel title={`Opciones en ${userLocation || 'California'}`}>
              <BreweryCards
                data={breweriesByState}
                loading={loadingByState}
                error={errorByState}
                hasMore={hasMoreByState}
                fetchMoreData={fetchBreweriesByState}
              />
            </Carrousel>
          
        </section>
      </div>
    </main>
  );
}
