import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5"
import { NavLink,useLocation } from "react-router"

const PageHeader = () => {

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const closeMenu = () => setisMenuOpen(false);
  const location = useLocation();

  const handleMobileNav = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
    }
    closeMenu();
  };

  const getLinkClasses = ({isActive}) => 
    `text-xl transition-all duration-200 ${
      isActive
        ? "text-secondary-premier border-b-2 border-secondary-premier"
        : "text-white hover:text-secondary-premier hover:border-b-2 hover:border-secondary-premier"
    }`;

  return (
        <header className="sticky top-0 z-50 bg-primary-premier">
          <div className='relative z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between px-12 py-4'>
              
              <div className="flex gap-8 items-center">
                <span className="text-2xl font-black text-white italic">
                  PL stats
                </span>

                <nav className="hidden gap-6 md:flex">
                  <NavLink to="/" className={getLinkClasses}>Home</NavLink>
                  <NavLink to="/players" className={getLinkClasses}>Players</NavLink>
                </nav>
              </div>

              <div className="md:hidden relative z-60">
                <button onClick={()=>setisMenuOpen(!isMenuOpen)} className="cursor-pointer">
                    <span className="text-2xl">
                      {isMenuOpen ? <IoClose color="white" /> : <IoMenu color="white" />}
                    </span>
                </button>
              </div>
                <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-primary-premier transition-all duration-300 md:hidden 
                  ${ isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
                  <nav className="flex flex-col gap-8 text-center">
                    <NavLink to="/" onClick={(e) => handleMobileNav(e, "/")} className={getLinkClasses}>
                      Home
                    </NavLink>
                    <NavLink to="/teams" onClick={(e) => handleMobileNav(e, "/teams")} className={getLinkClasses}>
                      Teams
                    </NavLink>
                    <NavLink to="/players" onClick={(e) => handleMobileNav(e, "/players")} className={getLinkClasses}>
                      Players
                    </NavLink>
                  </nav>
              </div>

          </div>

        </header>
  )
}

export default PageHeader