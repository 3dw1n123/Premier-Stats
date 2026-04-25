import { useParams } from "react-router"
import PageHeader from "./components/PageHeader"
import { usePlayerByID } from "./hooks/usePlayerByID"
import PlayerProfileCard from "./components/PlayerProfileCard";
import {playerStatsConfig } from "./constants/playerStatsConfig";


function PlayerStats(){
    const {id} = useParams();

    const { data: player, isLoading } = usePlayerByID(Number(id));

      if (isLoading) return <p>Loading player stats...</p>;

   const stats = playerStatsConfig(player);

  return (
    <>
        <PageHeader/>
        <main className="mx-auto max-w-[1440px] px-6 py-8 font-Inter">
            <header className="mb-8 rounded-xl border-l-4 p-6 shadow-lg">
                <h1 className="mb-2 text-4xl font-black tracking-tighter uppercase ">{player.player}</h1>
                <div className="flex gap-4 text-sm font-bold tracking-widest text-gray-500 uppercase">
                    <span>{player.position.split(" ")[0]}</span>
                    <span>•</span>
                    <span>{player.team}</span>
                </div>
            </header>

            

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PlayerProfileCard title={"General stats"} stats = {stats.general} isGeneral={true} isBigger={true}/>
                <PlayerProfileCard title={"Discipline"} stats = {stats.discipline} isGeneral={true}/>
                <PlayerProfileCard title={"Offensive Production"} stats = {stats.attack} isGeneral={false}/>
                <PlayerProfileCard title={"Expected Metrics"} stats = {stats.expected} isGeneral={false}/>       
                <PlayerProfileCard title={"Efficiency Metrics"} stats = {stats.efficiency} isGeneral={false}/>                         
                

              
        
      </div>
    </main>

       
        </>

    )

}

export default PlayerStats