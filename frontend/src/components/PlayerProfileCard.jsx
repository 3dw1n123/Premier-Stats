const colorStyles = {
  yellow: "border-l-4 border-yellow-400 bg-yellow-50 p-3 rounded-lg",
  red: "border-l-4 border-red-500 bg-red-50 p-3 rounded-lg",
};

const getPerformanceColor = (stat) =>{
    if(!stat.evaluable) return "";
    if(stat.value>0) return "text-green-500";
    if((stat.value)<0) return "text-red-500";
    return "text-gray-500";
};

const PlayerProfileCard = ({title,stats,isGeneral,isBigger}) => {
  return (
    isGeneral?
    <section className={`rounded-xl border-t-4  p-6 shadow-lg  ${isBigger?`lg:col-span-2`:``}`}>
        <h2 className="mb-4 border-b pb-2  font-black tracking-widest text-secondary-premier uppercase">{title}</h2>    
        <div className="space-y-4">
            {stats.map((stat,index)=>(
                <div className={`flex items-center justify-between ${colorStyles[stat.color]}`} key={index} title={stat.desc}>
                    <span className="text-sm font-bold first-letter:uppercase">{stat.label.replaceAll("_", " ")}</span>
                    <span className="text-2xl font-black italic">{stat.value}</span>
                </div>
            ))}
        </div>

    </section>
    
    :

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
    

  )
}

export default PlayerProfileCard
