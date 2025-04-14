'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface InfiniteScrollProps<T> {
  fetchMoreData: () => Promise<void>;
  hasMore: boolean;
  loading: boolean;
  loader?: ReactNode;
  endMessage?: ReactNode;
  children: ReactNode;
  error?: ReactNode;
}

const InfiniteScroll = <T,>({
  fetchMoreData,
  hasMore,
  loading,
  loader,
  endMessage,
  children,
  error
}: InfiniteScrollProps<T>) => {
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          try {
            await fetchMoreData();
          } catch (err) {
            console.error('Error fetching more data:', err);
          }
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [fetchMoreData, hasMore, loading]);

  return (
    <>
      {children}
      <div ref={observerTarget}>
        {loading && (loader || <div className='text-foreground'>Loading...</div>)}
        {!hasMore && endMessage}
        {error}
      </div>
    </>
  );
};

export default InfiniteScroll;