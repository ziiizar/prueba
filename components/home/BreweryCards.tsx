import { Brewery } from '@/types'
import React from 'react'
import BreweryCard from './BreweryCard'
import InfiniteScroll from '../InfiniteScroll'
import NoDataMessage from '../NoDataMessage'
import { Spinner } from '@/components/ui/spinner'

interface BreweryListProps {
  data: Brewery[] | null;
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchMoreData: () => Promise<void>;
}

const BreweryCards = ({data, loading, error, hasMore, fetchMoreData}: BreweryListProps) => {

  const uniqueBreweries = data ? [...new Map(data.map(item => [item.id, item])).values()] : [];

  return (
    <>
      <InfiniteScroll
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
        loading={loading}
        loader={
          <div className="flex justify-center w-full py-4">
            <Spinner className="size-8" />
          </div>
        }
        endMessage={
          uniqueBreweries.length > 0 && (
            <NoDataMessage label="No hay más resultados" className="mt-4" />
          )
        }
        error={error && <div>{error}</div>}
      >
        {uniqueBreweries.length > 0 ? (
          uniqueBreweries.map((item) => (
            <div 
              key={`${item.id}-${item.name}`} 
              className="snap-start shrink-0 first:pl-0 last:pr-4"
            >
              <BreweryCard brewery={item} />
            </div>
          ))
        ) : (
          <h3>No data display</h3>
        )}
      </InfiniteScroll>
      
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      
      {hasMore && !loading && (
        <button 
          onClick={fetchMoreData}
          className="mx-auto mt-4 text-primary hover:underline"
        >
          Cargar más
        </button>
      )}
    </>
  )
}

export default BreweryCards