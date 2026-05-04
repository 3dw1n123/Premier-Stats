import { useInfiniteQuery } from "@tanstack/react-query";
import { getPlayers } from "../api/services";

export const usePlayers = (search = "") =>{
  return useInfiniteQuery({
  queryKey: ["players", search],
  queryFn: ({pageParam = 0}) => getPlayers({pageParam, search}),
  initialPageParam: 0,
  getNextPageParam: (lastPage, allPages) =>{
        if (lastPage.length < 8) return undefined;
        
        return allPages.length;
  }
})
}
