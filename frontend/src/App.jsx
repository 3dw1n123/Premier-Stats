import { useState, useEffect } from 'react'
import StandingTable from './components/StandingTable'
import { supabase } from './api/supabase_client'
import StatsCard from './components/StatsCard'
import { FaRegCalendar } from "react-icons/fa6"
import { ImStatsBars } from "react-icons/im"
import PageHeader from './components/PageHeader'
import ButtonCard from './components/ButtonCard'

function App() {

const [table, setTable] = useState([])
const [isLoading, setIsLoading] = useState(true);

useEffect (()=>{
  const getData = async()=>{
    try{
      const{data,error} = await supabase
      .from('positions')
      .select('*')
      .order('Pts', {ascending: false});

      if (error) throw error;
      if (data) {
        setTable(data);
      }
    }catch(error){
      console.log("Error fetching standings: ",error.message)
    } finally {
        setIsLoading(false);
      }

  };

  getData()
  console.log(table)
},[])


  return (
    <>
    <div className="h-screen font-Inter">
      <PageHeader/>
      <div className="mx-auto flex w-full max-w-[1440px] ">
        <main className="w-full flex-1 p-6 ">
                      <header className="mb-10">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-xs font-bold tracking-widest text-secondary-premier">DAILY UPDATES</span>
                        </div>
                        <h1 className="mb-4 -ml-1 text-5xl font-black tracking-tighter md:text-7xl">STANDINGS</h1>
                        <p className=" max-w-xl font-medium">The definitive guide to the 2025/26 Premier League title race. Accurate, real-time data from the world's top league.</p>
                      </header>
                    
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                          <section className="lg:col-span-8 rounded-xl overflow-hidden flex flex-col max-h-[600px]">
                              <div className="shrink-0 bg-primary-premier bg-surface-container-highest flex items-center justify-between px-6 py-4">
                                <h3 className=" label-md:font-bold label-md:uppercase font-['Inter'] text-white">League Table</h3>
                                <span className="bg-primary-container rounded-full px-2 py-0.5 text-[10px] font-bold text-white">MATCHWEEK 28</span>
                              </div>
                              <div className="flex-1 overflow-x-auto overflow-y-auto">
                                {isLoading ? (
                                      <p className="p-6 text-center">Loading standings...</p>
                                    ) : (
                                      <StandingTable table={table} />
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
