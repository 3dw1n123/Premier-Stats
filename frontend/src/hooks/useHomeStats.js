import { useQuery } from "@tanstack/react-query";
import { getHomeStats } from "../api/services";

export const useHomeStats = () => {
    return useQuery({
    queryKey: ["topStatsCards"],  
    queryFn: getHomeStats
  });
}