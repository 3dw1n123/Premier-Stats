import { useState } from 'react'
import Standingtable from './components/static_table'
import Stats_card from './components/stats_card'
import top_scorers from './data/top_Scorers.json'
import top_assist from './data/top_Assist.json'

console.log(top_scorers)

function App() {

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
          <Standingtable/>
        </section>
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
