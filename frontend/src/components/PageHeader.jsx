import { IoMenu } from "react-icons/io5"
import { NavLink } from "react-router"

const PageHeader = () => {
  return (
        <header className="top-0 bg-primary-premier">
          <div className='mx-auto flex w-full max-w-[1440px] items-center justify-between px-12 py-4'>
              
              <div className="flex gap-8 items-center">
                <span className="text-2xl font-black text-white italic">
                  PL stats
                </span>
                <nav className="hidden gap-6 md:flex">
                  <NavLink to={"/"} className={({isActive})=>
                  ` text-xl ${isActive ? "text-secondary-premier border-b-2" 
                    :"text-white hover:text-secondary-premier hover:border-b-2"}`}>
                        Home
                  </NavLink>
                  <NavLink to={"/players"} className={({isActive})=>
                  ` hidden text-xl ${isActive ? "text-secondary-premier border-b-2" 
                    :"text-white hover:text-secondary-premier hover:border-b-2"}`}>
                        Teams
                  </NavLink>
                  <NavLink to={"/players"} className={({isActive})=>
                  ` text-xl ${isActive ? "text-secondary-premier border-b-2" 
                    :"text-white hover:text-secondary-premier hover:border-b-2"}`}>
                        Players
                  </NavLink>
                  <NavLink to={"/players"} className={({isActive})=>
                  `hidden text-xl ${isActive ? "text-secondary-premier border-b-2" 
                    :"text-white hover:text-secondary-premier hover:border-b-2"}`}>
                        Fixtures
                  </NavLink>
                </nav>
              </div>

              <div className="md:hidden">
                <button>
                    <span className="text-2xl">
                      <IoMenu color="white"/>
                    </span>
                </button>
              </div>

          </div>

        </header>
  )
}

export default PageHeader