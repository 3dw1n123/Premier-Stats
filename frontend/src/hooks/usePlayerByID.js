import { useQuery } from "@tanstack/react-query";
import { getPlayerById } from "../api/services";

export const usePlayerByID = (id) =>{
    return  useQuery({
    queryKey: ["player",id],  
    queryFn: () => getPlayerById({ id }),
    staleTime: 1000 * 60 * 5
})
}
