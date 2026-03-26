import league_table from '../data/league_table.json';


import React from 'react'

const Standingtable = () => {
  return (
    <div class = "grid place-items-center">
         <table class=" border-spacing-2 mt-8 lg:w-3/4 text-center bg-gray-50 rounded-2xl">
            <thead class="bg-gray-100, border-b-2 border-gray-200">
                <tr>
                    <th class = "p-3 tracking-wide ">Position</th>   
                    <th class = "p-3 tracking-wide text-left">Club</th>   
                    <th class = "p-3 tracking-wide ">Points</th>
                    <th class = "p-3 tracking-wide">Matches</th>
                    <th class = "p-3 tracking-wide ">Wins</th>
                    <th class = "p-3 tracking-wide ">Draws</th>
                    <th class = "p-3 tracking-wide ">Loss</th>
                </tr>
                

            </thead>

            <tbody>
           
                {league_table.map((team, index) => (
                <tr class="border-b border-gray-100" key={index}>
                    <td class="p-1 font-bold">{index+1}</td> 
                    <td class="p-1 text-left">{team.team}</td>
                    <td class="p-1">{team.Pts}</td>
                    <td class="p-1">{team.MP}</td>
                    <td class="p-1">{team.W}</td>
                    <td class="p-1">{team.D}</td>
                    <td class="p-1">{team.L}</td>
                </tr>
            ))}
            </tbody>   
        </table>
        
    </div>
  )
}

export default Standingtable