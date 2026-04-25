import { useInfiniteQuery } from "@tanstack/react-query";
import { getPlayers } from "../api/services";

export const usePlayers = () =>{
  return useInfiniteQuery({
  queryKey: ["players"],
  queryFn: getPlayers,
  initialPageParam: 0,
  getNextPageParam: (lastPage, allPages) =>{
        if (lastPage.length < 8) return undefined;
        
        return allPages.length;
  }
})
}