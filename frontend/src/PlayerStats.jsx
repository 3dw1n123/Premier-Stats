import { useParams } from "react-router"
import PageHeader from "./components/PageHeader"
import { usePlayerByID } from "./hooks/usePlayerByID"
import PlayerProfileCard from "./components/PlayerProfileCard";
import {playerStatsConfig } from "./constants/playerStatsConfig";
import { PLAYER_STATS_SECTIONS_BY_POSITION } from "./constants/playerStatsByPosition";

function PlayerStats(){
    const {id} = useParams();

    const { data: player, isLoading } = usePlayerByID(Number(id));

      if (isLoading) return <p>Loading player stats...</p>;

   const stats = playerStatsConfig(player);
   const playerPos= player.position.split(" ")[0].toLowerCase()

  return (
    <>
        <PageHeader/>
        <main className="mx-auto max-w-[1440px] px-6 py-8 font-Inter">
            <header className="mb-8 rounded-xl border-l-4 border-secondary-premier p-6 shadow-lg">
                <h1 className="mb-2 text-4xl text-primary-premier font-black tracking-tighter uppercase ">{player.player_name}</h1>
                <div className="flex gap-4 text-sm font-bold tracking-widest text-gray-700 uppercase">
                    <span>{playerPos}</span>
                    <span>•</span>
                    <span>{player.team}</span>
                </div>
            </header>

            

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {
              PLAYER_STATS_SECTIONS_BY_POSITION[playerPos]?.map(({section, title, isGeneral, isBigger}) => (
                  <PlayerProfileCard key={section} title={title} stats = {stats[section]} isGeneral={isGeneral} isBigger={isBigger}/>
              ))
            } 
      </div>
    </main>

       
        </>

    )

}

export default PlayerStats
