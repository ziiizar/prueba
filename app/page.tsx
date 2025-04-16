"use client";

import Carrousel from "@/components/home/Carrousel";
import BreweryCards from "@/components/home/BreweryCards";
import { useBreweriesPagination } from "@/components/useBreweriesPagination";
import { useBreweriesByStatePagination } from "@/components/useBreweriesByStatePagination";
import PromoAlert from "@/components/home/PromoAlert";
import { useSession } from "next-auth/react";
export default function Home() {
  const session = useSession();
  const userLocation = session.data?.user?.state || "California";
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
  } = useBreweriesByStatePagination({ limit, state: userLocation  });

  return (
    <main className="flex flex-col w-full min-h-[calc(100vh-8rem)] bg-background">
      <div className=" sm:px-6 lg:px-8 py-6 space-y-6 w-full max-w-7xl mx-auto">
        <PromoAlert />
        <section className="space-y-6 px-4">
          <Carrousel title="Todas las opciones">
            <BreweryCards
              data={allBreweries}
              loading={loading}
              error={error}
              hasMore={hasMore}
              fetchMoreData={fetchBreweries}
            />
          </Carrousel>

          {userLocation && (
            <Carrousel title={`Opciones en ${userLocation }`}>
              <BreweryCards
                data={breweriesByState}
                loading={loadingByState}
                error={errorByState}
                hasMore={hasMoreByState}
                fetchMoreData={fetchBreweriesByState}
              />
            </Carrousel>
          )}
        </section>
      </div>
    </main>
  );
}
