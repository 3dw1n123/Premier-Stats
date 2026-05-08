import StandingTable from './components/StandingTable'
import StatsCard from './components/StatsCard'
import { FaRegCalendar } from "react-icons/fa6"
import { ImStatsBars } from "react-icons/im"
import PageHeader from './components/PageHeader'
import ButtonCard from './components/ButtonCard'
import SectionHeader from './components/SectionHeader'
import { useStandings } from './hooks/useStandings'
import { useHomeStats } from './hooks/useHomeStats'

function App() {

const {data: standings,isLoading: loadinStandings} = useStandings();
const {data: topStats, isLoading: loadingStats, isError} = useHomeStats();
console.log(topStats)


  return (
    <>
    <div className="h-screen font-Inter">
      <PageHeader/>
      <div className="mx-auto flex w-full max-w-[1440px] ">
        <main className="w-full flex-1 p-6 ">
                    <SectionHeader subtitle={"DAILY UPDATES"} title={"STANDINGS"} description={"The definitive guide to the 2025/26 Premier League title race. Accurate, real-time data from the world's top league."}/>
                    
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 " >
                          <section className="lg:col-span-8 rounded-xl overflow-hidden flex flex-col max-h-[600px] shadow-lg">
                              <div className="shrink-0 bg-primary-premier bg-surface-container-highest flex items-center justify-between px-6 py-4">
                                <h3 className=" label-md:font-bold label-md:uppercase font-['Inter'] text-white">League Table</h3>
                                <span className="bg-primary-container rounded-full px-2 py-0.5 text-[10px] font-bold text-white">MATCHWEEK {topStats?.matchweek?.MP}</span>
                              </div>
                              <div className="flex-1 overflow-x-auto overflow-y-auto">

                               {loadinStandings ? (
                                      <p className="p-6 text-center">Loading standings...</p>
                                    ) : (
                                      <StandingTable table={standings}/>
                                    )}
                              </div>

                          </section>

                          <aside className="grid grid-cols-2 lg:col-span-4 gap-4 my-4">
                              {loadingStats ? (
                                <div className="col-span-2 p-6 flex items-center justify-center">
                                  <p className="text-gray-500 font-medium">Loading player stats...</p>
                                </div>
                              ) : isError ? (
                                <div className="col-span-2 p-6 flex items-center justify-center">
                                  <p className="text-red-500 font-medium">Error loading stats.</p>
                                </div>
                              ) : (
                              <>
                                <StatsCard title="scorer" player={topStats?.scorer?.player_name} stat="goals" amount={topStats?.scorer?.goals} team={topStats?.scorer?.team} id={topStats?.scorer?.id}/>

                                <StatsCard title="assistant" player={topStats?.assister?.player_name} stat="Assist" amount={topStats?.assister?.assists} team={topStats?.assister?.team} id={topStats?.assister?.id}/>
                                
                                <StatsCard title="Clean sheets" player={topStats?.goalkeeper?.player_name} stat="Clean sheets" amount={topStats?.goalkeeper?.gk_clean_sheets} team={topStats?.goalkeeper?.team} id={topStats?.goalkeeper?.id}/>
                              </>
                            )}
                              <div className="flex flex-col gap-4">
                                <ButtonCard 
                                  title="Next Fixtures" 
                                  icon={<FaRegCalendar color="white"/>} 
                                  bgColor="bg-primary-premier" 
                                />
                                <ButtonCard 
                                  title="Advanced Metrics" 
                                  icon={<ImStatsBars color="white" />} 
                                  bgColor="bg-secondary-premier" 
                                />
                              </div>
                          </aside>

                      </div>
        </main>
      </div>


    </div>

    </>
  )
}

export default App
