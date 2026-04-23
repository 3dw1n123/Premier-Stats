import { useInfiniteQuery } from "@tanstack/react-query";
import { getPlayers } from "../api/services";

export const usePlayers = () =>{
  return useInfiniteQuery({
  queryKey: ["players"],
  queryFn: getPlayers,
  initialPageParam: 0,
  getNextPageParam: (lastPage, allPages) =>{
        // Si la última página vino vacía o incompleta, paramos
        if (lastPage.length < 8) return undefined;
        
        // De lo contrario, devolvemos el número de la siguiente página
        return allPages.length;
  }
})
}