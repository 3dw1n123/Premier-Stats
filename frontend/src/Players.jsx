import PageHeader from "./components/PageHeader"
import { useEffect } from "react"
import PlayerTable from "./components/PlayerTable"
import { useInView } from 'react-intersection-observer';
import SectionHeader from "./components/SectionHeader"
import { usePlayers } from "./hooks/usePlayers";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

function Players() {

  const [search, setSearch] = useState("")
  const debounced = useDebounce(search)

  const [sortConfig, setSortConfig] = useState({ column: null, order: "desc" });

  const handleSort = (column) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.column === column && prevConfig.order === "desc") {
        return { column, order: "asc" };
      }
      return { column, order: "desc" };
    });
  };

const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching} = usePlayers({
    search: debounced,
    sortBy: sortConfig.column,
    sortOrder: sortConfig.order
  });
const allPlayers = data?.pages.flat() ?? [];

const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
        <div className="h-screen font-Inter">
                <PageHeader/>
                <div className="mx-auto w-full max-w-[1440px]">
                  <main className="w-full flex-1 p-6">
                    <SectionHeader subtitle={"DAILY UPDATES"} title={"PLAYERS STATISTICS"} description={"Premier League player statistics for the 2025/2026 season"}/>

                      <label className="flex flex-col mb-6 text-[11px] font-extrabold uppercase tracking-widest text-secondary-premier">
                      Search

                      <div className="w-72 flex items-center gap-2 rounded-xl border-2 border-primary-premier px-4 py-2 shadow-sm tracking-normal">
                        <input
                          type="search"
                          value={search}
                          onChange={(ev) => setSearch(ev.target.value)}
                          placeholder="Search player or club..."
                          className="flex-1 min-w-0 text-base font-normal text-black placeholder:text-neutral-400 focus:outline-none"
                        />
                        <FaSearch className="shrink-0 w-5 h-5 text-primary-premier" />
                      </div>
                    </label>                   

                    <div className="max-w-[1440px] w-full">
                      <section className=" rounded-xl overflow-x-auto overflow-hidden shadow-lg w-full ">
                                        <PlayerTable players={allPlayers} 
                                          observerRef={ref}
                                          isFetchingNextPage={isFetchingNextPage}
                                          hasNextPage={hasNextPage}
                                          onSort={handleSort}
                                          sortBy={sortConfig.column}
                                          sortOrder={sortConfig.order}
                                          isFetching={isFetching}
                                          />
                      </section>

                    </div>
                  </main>
                  
                </div>
                
        </div>
    </>
  )
}

export default Players
