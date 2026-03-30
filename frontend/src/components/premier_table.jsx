import React from 'react'

const Standingtable = ({table}) => {
    console.log(table)
  return (
    <div className = "grid place-items-center">
         <table className=" border-spacing-2 mt-8 lg:w-3/4 text-center bg-gray-50 rounded-2xl">
            <thead className="bg-gray-100, border-b-2 border-gray-200">
                <tr>
                    <th className = "p-3 tracking-wide ">Position</th>   
                    <th className = "p-3 tracking-wide text-left">Club</th>   
                    <th className = "p-3 tracking-wide ">Points</th>
                    <th className = "p-3 tracking-wide">Matches</th>
                    <th className = "p-3 tracking-wide ">Wins</th>
                    <th className = "p-3 tracking-wide ">Draws</th>
                    <th className = "p-3 tracking-wide ">Loss</th>
                </tr>
                

            </thead>

            <tbody>
           
                {table.map((team, index) => (
                <tr className="border-b border-gray-100" key={index}>
                    <td className="p-1 font-bold">{index+1}</td> 
                    <td className="p-1 text-left">{team.team}</td>
                    <td className="p-1">{team.Pts}</td>
                    <td className="p-1">{team.MP}</td>
                    <td className="p-1">{team.W}</td>
                    <td className="p-1">{team.D}</td>
                    <td className="p-1">{team.L}</td>
                </tr>
            ))}
            </tbody>   
        </table>
        
    </div>
  )
}

export default Standingtable