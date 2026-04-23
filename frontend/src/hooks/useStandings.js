import { useQuery } from "@tanstack/react-query";
import { getStandings } from "../api/services";

export const useStandings = () =>{
    return  useQuery({
    queryKey: ["standings"],  
    queryFn: getStandings
})
}
