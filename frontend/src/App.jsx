import StandingTable from './components/StandingTable'
import StatsCard from './components/StatsCard'
import { FaRegCalendar } from "react-icons/fa6"
import { ImStatsBars } from "react-icons/im"
import PageHeader from './components/PageHeader'
import ButtonCard from './components/ButtonCard'
import SectionHeader from './components/SectionHeader'
import { useStandings } from './hooks/useStandings'

function App() {

const {data,isLoading} = useStandings();



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
                                <span className="bg-primary-container rounded-full px-2 py-0.5 text-[10px] font-bold text-white">MATCHWEEK 28</span>
                              </div>
                              <div className="flex-1 overflow-x-auto overflow-y-auto">

                               {isLoading ? (
                                      <p className="p-6 text-center">Loading standings...</p>
                                    ) : (
                                      <StandingTable table={data}/>
                                    )}
                              </div>

                          </section>

                          <aside className="grid grid-cols-2 lg:col-span-4 gap-4 my-4">
                              <StatsCard title="scorer" player = "Erling Haaland" stat = "goals" amount = "27" team = "Manchester City"/>
                              <StatsCard title="assistant" player = "Bruno Fernandes" stat = "Assist" amount = "16" team = "Manchester United"/>
                              <StatsCard title="G+A" player = "Erling Haaland" stat = "G+A" amount = "32" team = "Manchester City"/>
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
