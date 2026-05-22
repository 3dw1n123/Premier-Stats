const getPerformanceColor = (stat) =>{
    if(!stat.evaluable) return "text-primary-premier";
    if(stat.value>0) return "text-green-500";
    if((stat.value)<0) return "text-red-500";
    return "text-primary-premier";
};
const PlayerProfileCard = ({title,stats}) => {
  return (
    <section className={`rounded-xl border-t-4 border-primary-premier  p-6 shadow-lg }`}>
        <h2 className="mb-4 border-b pb-2  font-black tracking-widest text-secondary-premier uppercase">{title}</h2>    
        <div className="space-y-4">
            {stats.map((stat,index)=>(
                <div className={`flex items-center justify-between border-b border-gray-100 pb-3`} key={index}>
                    <span className="text-gray-700 font-bold cursor-pointer" title={stat.desc}>{stat.label}</span>
                    {stat.isPosition? (
                        <div className="flex gap-1 font-black">
                            {
                                typeof stat.value === 'string' && stat.value.split(" ").map((pos,i)=>(
                                    <span key={i} className="bg-secondary-premier text-white text-xs px-2 py-1 rounded-md">{pos}</span>
                                )
                                )
                            }
                        </div>):(
                            <div className="flex gap-1 font-black">
                                <span className={`italic ${getPerformanceColor(stat)}`}>{stat.value}</span>
                                <span className={`${stat.pct?``:`hidden`}`}>%</span>
                            </div>
                         )
                        
                    }

                </div>
            ))}
        </div>

    </section>
  )}

export default PlayerProfileCard
