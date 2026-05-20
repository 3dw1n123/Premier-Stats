import { Link } from "react-router"
import { getPlayerById } from "../api/services";
import { useQueryClient } from "@tanstack/react-query";

const PlayerTable = ({players, observerRef, isFetchingNextPage, hasNextPage, onSort, sortBy, sortOrder, isFetching}) => {

const queryClient = useQueryClient();

const handlePrefetch = (id) => {
  queryClient.prefetchQuery({
    queryKey: ["player", id],
    queryFn: () => getPlayerById({ id }),
    staleTime: 1000 * 60 * 5,
  });
};

const renderSortIndicator = (columnName) => {
    if (sortBy !== columnName) return null;
    return sortOrder === "asc" ? " ↑" : " ↓";
  };

  return (

    <div className="overflow-y-auto max-h-[600px]">
        <table className="w-full border-collapse text-left">
                        <thead className=" items-center">
                          <tr className="text-white font-bold sticky top-0 bg-primary-premier">
                            <th className=" px-4 py-3  ">Player</th>
                            <th className="  px-2 py-3 text-center cursor-pointer" onClick={() => onSort("matches_played")}>MP{renderSortIndicator("matches_played")}</th>
                            <th className="  px-2 py-3 text-center cursor-pointer" onClick={() => onSort("goals")}>G{renderSortIndicator("goals")}</th>
                            <th className="  px-2 py-3 text-center cursor-pointer" onClick={() => onSort("assists")}>A{renderSortIndicator("assists")}</th>
                            <th className="  px-2 py-3 text-center cursor-pointer" onClick={() => onSort("yellow_cards")}>YC{renderSortIndicator("yellow_cards")}</th>
                            <th className="  px-2 py-3 text-center cursor-pointer" onClick={() => onSort("red_cards")}>RC{renderSortIndicator("red_cards")}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {players.length === 0 && isFetching ? (
                            <tr>
                              <td colSpan="6" className="px-4 py-8 text-center text-gray-500 font-bold">
                                Loading data...
                              </td>
                            </tr>
                          ) : (
                            players.map((player,index)=>(
                                <tr className="hover:bg-gray-100 transition-colors " key={index}>
                                    <td className="px-4 py-2">
                                        <div className="flex flex-col">
                                            <Link to={`/player/${player.id}/${player.player_name.toLowerCase().replace(/\s+/g, '-')}`} className="leading-tight font-bold" onMouseEnter={() => handlePrefetch(player.id)}>{player.player_name}</Link>
                                            <div className="flex flex-col text-secondary-premier">
                                                <p className="font-bold text-xs">{player.team}</p>
                                                <p className="font-bold text-xs">{player.position.split(" ")[0]}</p>
                                            </div>  

                                        </div>
                                    </td>
                                    <td className="px-2 py-2 text-center text-xs font-bold">{player.matches_played}</td>
                                    <td className="px-2 py-2 text-center text-xs font-bold">{player.goals}</td>
                                    <td className="px-2 py-2 text-center text-xs font-bold">{player.assists}</td>
                                    <td className="px-2 py-2 text-center text-xs font-bold">{player.yellow_cards}</td>
                                    <td className="px-2 py-2 text-center text-xs font-bold">{player.red_cards}</td>
                                </tr>
                                    ))
                                  )}

                        </tbody>

                      </table>
                    
        {(hasNextPage || isFetchingNextPage) && (
          <div ref={observerRef} className="w-full flex justify-center p-4 mt-2">
            {isFetchingNextPage ? (
              <span className="text-gray-500 font-medium">loading players...</span>
            ) : (
              <span className="text-transparent">Scroll</span>
            )}
          </div>
        )}
    </div>

    )
}

export default PlayerTable
