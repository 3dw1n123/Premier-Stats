import { useInfiniteQuery } from "@tanstack/react-query";
import { getPlayers } from "../api/services";

export const usePlayers = (filters) =>{
  return useInfiniteQuery({
  queryKey: ["players", filters],
  queryFn: ({pageParam = 0}) => getPlayers({pageParam, ...filters}),
  initialPageParam: 0,
  getNextPageParam: (lastPage, allPages) =>{
        if (lastPage.length < 8) return undefined;
        
        return allPages.length;
  },
  keepPreviousData: true
})
}
