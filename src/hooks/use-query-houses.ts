import { useInfiniteQuery } from '@tanstack/react-query';
import { listAll } from '@/services/house-service';
export function useQueryHouses() {
  //   const {
  //     data,
  //     error,
  //     fetchNextPage,
  //     hasNextPage,
  //     isFetching,
  //     isFetchingNextPage,
  //     status,
  //   } = useInfiniteQuery({
  //     queryKey: ["houses"],
  //     queryFn: listAll,
  //     getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  //   });
  //   return { data, status, error };
}
