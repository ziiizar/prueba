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
  return (
    <>
      <InfiniteScroll
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
        loading={loading}
        loader={
            <Spinner className="size-8" />
        }
        endMessage={
          data &&
          data.length > 0 && (
            <NoDataMessage label="No hay más resultados" className="mt-4" />
          )
        }
        error={error && <div>{error}</div>}
      >
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="snap-start shrink-0 first:pl-0 last:pr-4">
              <BreweryCard brewery={item} />
            </div>
          ))
        ) : (
          <h3>No data display</h3>
        )}
      </InfiniteScroll>
      
      {loading && (
        <div className="mx-auto size-8 mt-4">
          <Spinner className="size-8" />
        </div>
      )}
      
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