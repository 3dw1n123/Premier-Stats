import React from 'react'

const Stats_card = ({title,list,stat}) => {
    const top = list.slice(0,5)
    return (
    <div className = "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"> 
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider">Top {title}</h3>
            </div>
            <ul className = "divide-y divide-gray-100">
                {top.map((player,index)=>(
                    <li className="flex justify-between items-center hover:bg-gray-50 transition-colors px-4 py-3" key={index}>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-400 w-4">
                                {index + 1}
                            </span>
                            <span className="font-semibold text-gray-700">
                                {player.player}
                            </span>
                        </div>
                        
                        <div className="text-right">

                                    <div className="text-2xl  font-black text-sky-600 leading-none">
                                        {player[stat]}
                                    </div>

                         </div>      
                    </li>

                ))}
                

            </ul>
    </div>
  )
}

export default Stats_card