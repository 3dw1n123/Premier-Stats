import { Link } from "react-router"
const ButtonCard = ({title,icon,bgColor,route}) => {
  return (
    
    <Link to={route} className ={`flex-1 ${bgColor} flex cursor-pointer flex-col justify-between rounded-xl p-4 shadow-lg`}>
                <span className="text-4xl" data-icon="calendar_month">{icon}</span>
                <span className="text-xs leading-tight font-bold tracking-widest text-white uppercase">{title}</span>
    </Link>
  )
}

export default ButtonCard