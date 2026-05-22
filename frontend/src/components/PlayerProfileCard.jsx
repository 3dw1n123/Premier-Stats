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
                    <div className="flex gap-1 font-black">
                        <span className={`italic ${getPerformanceColor(stat)}`}>{stat.value}</span>
                        <span className={`${stat.pct?``:`hidden`}`}>%</span>
                    </div>
                </div>
            ))}
        </div>

    </section>
  )}

    {/*isGeneral?*/}

    {/*:

    <section className="rounded-xl border-t-4 p-6 shadow-lg lg:col-span-3">
          <h2 className="mb-4 border-b pb-2 font-black tracking-widest text-secondary-premier uppercase">{title}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {stats.map((stat,index)=>(
                <div key={index} title={stat.desc}>
                    <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">{stat.label.replaceAll("_", " ")}</span>
                    <span className={`text-3xl font-black italic ${getPerformanceColor(stat)}`}>{stat.value}</span>
                </div>
            ))}
            </div>

    </section>
    

  )*/}

export default PlayerProfileCard
