const ButtonCard = ({title,icon,bgColor}) => {
  return (

    <div className ={`flex-1 ${bgColor} flex cursor-pointer flex-col justify-between rounded-xl p-4 shadow-lg`}>
                <span className="text-4xl" data-icon="calendar_month">{icon}</span>
                <span className="text-xs leading-tight font-bold tracking-widest text-white uppercase">{title}</span>
    </div>
  )
}

export default ButtonCard