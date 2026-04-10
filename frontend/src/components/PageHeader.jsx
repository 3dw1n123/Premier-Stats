import { IoMenu } from "react-icons/io5"

const PageHeader = () => {
  return (
        <header className="top-0 bg-primary-premier">
          <div className='mx-auto flex w-full max-w-[1440px] items-center justify-between px-12 py-4'>
              
              <div className="flex gap-8 items-center">
                <span className="text-2xl font-black text-white italic">
                  PL stats
                </span>
                <nav className="hidden gap-6 md:flex">
                  <a className="text-white hover:text-secondary-premier hover:border-b-2 text-xl " href="">Home</a>
                  <a className="hidden text-white hover:text-secondary-premier hover:border-b-2 text-xl " href="">Teams</a>
                  <a className="hidden text-white hover:text-secondary-premier hover:border-b-2 text-xl " href="">Players</a>
                  <a className="hidden text-white hover:text-secondary-premier hover:border-b-2 text-xl " href="">Fixtures</a>
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