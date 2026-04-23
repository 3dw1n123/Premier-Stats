const StandingTable = ({table}) => {
  return (
    <div className = "">
         <table className="w-full border-collapse">
            <thead>
                <tr className= "sticky top-0 bg-white z-10 border-none">
                    <th className = "px-6 py-4 text-[11px] font-bold tracking-widest">Pos</th>   
                    <th className = "px-6 py-4 text-[11px] font-bold tracking-widest text-left">CLUB</th>   
                    <th className = "hidden md:table-cell px-6 py-4 text-[11px] font-bold tracking-widest">MP</th>
                    <th className = "hidden md:table-cell px-6 py-4 text-[11px] font-bold tracking-widest">W</th>
                    <th className = "hidden md:table-cell px-6 py-4 text-[11px] font-bold tracking-widest">D</th>
                    <th className = "hidden md:table-cell px-6 py-4 text-[11px] font-bold tracking-widest">L</th>
                    <th className = "hidden lg:table-cell px-6 py-4 text-[11px] font-bold tracking-widest">GD</th>
                    <th className = "px-6 py-4 text-[11px] font-bold tracking-widest  ">PTS</th>
                </tr>
                

            </thead>

            <tbody className="">
           
                {table.map((team, index) => (
                <tr className="" key={index}>
                    <td className="px-6 py-4 font-bold text-center">{index+1}</td> 
                    <td className="flex items-center gap-3 px-6 py-4">
                        <span className="font-bold">{team.team}</span>
                    </td>
                    <td className="hidden md:table-cell px-6 py-4 text-center font-medium">{team.MP}</td>
                    <td className="hidden md:table-cell  px-6 py-4 text-center font-medium">{team.W}</td>
                    <td className="hidden md:table-cell  px-6 py-4 text-center font-medium">{team.D}</td>
                    <td className="hidden md:table-cell  px-6 py-4 text-center font-medium">{team.L}</td>
                    <td className="hidden lg:table-cell px-6 py-4 text-center font-medium">{team.GD}</td>
                    <td className="text-primary-container px-6 py-4 text-center text-lg font-black">{team.Pts}</td>
                </tr>
            ))}
            </tbody>   
        </table>
        
    </div>
  )
}

export default StandingTable