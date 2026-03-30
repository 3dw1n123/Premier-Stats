import { useState, useEffect } from 'react'
import Standingtable from './components/premier_table'
import Stats_card from './components/stats_card'
import top_scorers from './data/top_Scorers.json'
import top_assist from './data/top_Assist.json'
import { supabase } from './api/supabase_client'
import Playertable from './components/player_table'

function App() {

const [table, settable] = useState([])
const [players, setplayers] = useState([])

useEffect (()=>{
  const getData = async()=>{
    try{
      const{data,error} = await supabase.from('Positions').select('*').order('Pts', {ascending:false})
      if (data) 
      {settable(data)}
    }catch(error){
      console.log("error: ",error.message)
    }

  };

  getData()
  console.log(table)
},[])


useEffect (()=>{
  const getData = async()=>{
    try{
      const{data,error} = await supabase.from('Players').select('*')
      if (data) 
      {setplayers(data)}
    }catch(error){
      console.log("error: ",error.message)
    }

  };

  getData()
  console.log(table)
},[])



  return (
    <>
    <div className="h-screen">
        <header className=" h-24 flex bg-purple-900 items-center">
        <div className = "w-screen text-amber-50 font-extrabold text-center text-2xl">
            Premier statistics
        </div>
      </header>
      <main className = "grid lg:grid-cols-[2fr_1fr] gap-6  ">
        <section className = "h-auto">
          {/*<Standingtable table={table}/>*/
          <Playertable players ={players}/>
}        </section>
        <aside className="flex flex-col gap-6 h-full p-8">
          <Stats_card title={"scorer"} list = {top_scorers} stat={"goals"}/>
          <Stats_card title = {"assistant"}  list = {top_assist} stat={"assists"}/>

        </aside>
      </main>
    </div>

    </>
  )
}

export default App
