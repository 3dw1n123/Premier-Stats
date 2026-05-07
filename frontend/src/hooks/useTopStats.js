import { useQuery } from "@tanstack/react-query";
import { getTopStatsCards } from "../api/services";

export const useTopStats = () => {
    return useQuery({
    queryKey: ["topStatsCards"],  
    queryFn: getTopStatsCards
  });
}