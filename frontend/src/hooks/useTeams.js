import { useQuery } from "@tanstack/react-query"
import { getTeams } from "../api/services"

export const useTeams =() =>{
    return  useQuery({
    queryKey: ["teams"],  
    queryFn: getTeams,
    staleTime: Infinity,
})
}