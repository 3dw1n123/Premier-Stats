const PlayerTable = ({players, observerRef, isFetchingNextPage, hasNextPage}) => {

  return (

    <div className="overflow-y-auto max-h-[600px]">
        <table className="w-full border-collapse text-left">
                        <thead className=" items-center">
                          <tr className="text-white font-bold sticky top-0 bg-primary-premier">
                            <th className=" px-4 py-3  ">Player</th>
                            <th className="  px-2 py-3 text-center">MP</th>
                            <th className="  px-2 py-3 text-center">G</th>
                            <th className="  px-2 py-3 text-center">A</th>
                            <th className="  px-2 py-3 text-center">YC</th>
                            <th className="  px-2 py-3 text-center">RC</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {players.map((player,index)=>(
                                <tr className="hover:bg-gray-100 transition-colors " key={index}>
                                    <td className="px-4 py-2">
                                        <div className="flex flex-col">
                                            <p className="leading-tight font-bold">{player.player}</p>
                                            <div className="flex flex-col text-secondary-premier">
                                                <p className="font-bold text-xs">{player.team}</p>
                                                <p className="font-bold text-xs">{player.position.split(" ")[0]}</p>
                                            </div>  

                                        </div>
                                    </td>
                                    <td className="px-2 py-2 text-center text-xs font-bold">{player.matches}</td>
                                    <td className="px-2 py-2 text-center text-xs font-bold">{player.goals}</td>
                                    <td className="px-2 py-2 text-center text-xs font-bold">{player.assists}</td>
                                    <td className="px-2 py-2 text-center text-xs font-bold">{player.yellow_cards}</td>
                                    <td className="px-2 py-2 text-center text-xs font-bold">{player.red_cards}</td>
                                </tr>
                                    ))}

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