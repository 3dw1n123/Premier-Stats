import React from 'react'

const StatsCard = ({title,player,stat,amount,team}) => {
  return (
    <div className="flex flex-col p-6 rounded-xl shadow-[0_20px_40px_rgba(55,0,59,0.04)]">
            <div className="relative flex flex-col flex-1">
                <div>
                  <span className="text-primary-premier font-bold uppercase tracking-widest text-[10px] mb-4">Top {title}</span>
                  <h4 className="text-primary-premier font-headline text-2xl xl:text-3xl font-black text-primary-container leading-none mb-2">{player}</h4>
                  <p className="text-secondary-premier text-sm font-bold text-secondary mb-4 uppercase tracking-tighter">{team}</p>
                </div>
            <div className="flex items-end gap-2 mt-auto">
                    <span className="text-primary-premier text-6xl font-black tracking-tighter leading-none">{amount}</span>
                    <span className="text-primary-premier font-bold uppercase tracking-widest text-[11px] mb-2">{stat}</span>
            </div>
        </div>
    </div>
  )
}

export default StatsCard