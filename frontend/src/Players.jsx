import PageHeader from "./components/PageHeader"
import { useEffect } from "react"
import PlayerTable from "./components/PlayerTable"
import { useInView } from 'react-intersection-observer';
import SectionHeader from "./components/SectionHeader"
import { usePlayers } from "./hooks/usePlayers";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useTeams } from "./hooks/useTeams";
import { RiArrowDropDownLine } from "react-icons/ri";
import FilterSelect from "./components/FilterSelect";
import { POSITION_OPTIONS } from "./constants/playersPositions";

function Players() {

  const [search, setSearch] = useState("")
  const debounced = useDebounce(search)

  const [sortConfig, setSortConfig] = useState({ column: null, order: "desc" });
  const [teamFilter, setTeamFilter] = useState("");
  const [positionFilter, setPositionFilter] = useState("");

  const handleSort = (column) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.column === column && prevConfig.order === "desc") {
        return { column, order: "asc" };
      }
      return { column, order: "desc" };
    });
  };

const { data: teams = [], isLoading: isLoadingTeams } = useTeams();
const clubOptions = [
    { value: "", label: "All Clubs" },
    ...teams.map(teamName => ({ value: teamName, label: teamName }))
  ];
  
const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching} = usePlayers({
    search: debounced,
    sortBy: sortConfig.column,
    sortOrder: sortConfig.order,
    team: teamFilter,
    position: positionFilter
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
                      <div className="mb-6 flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
                        <label className="flex flex-col text-[11px] font-extrabold uppercase tracking-widest text-secondary-premier">
                          Search

                          <div className="flex w-full items-center gap-2 rounded-xl border-2 border-primary-premier px-4 py-2 shadow-sm tracking-normal md:w-72">
                            <input
                              type="search"
                              value={search}
                              onChange={(ev) => setSearch(ev.target.value)}
                              placeholder="Search player..."
                              className="flex-1 min-w-0 text-base font-normal text-black placeholder:text-neutral-400 focus:outline-none"
                            />
                            <FaSearch className="shrink-0 w-5 h-5 text-primary-premier" />
                          </div>
                        </label>  

                        <div className="flex w-full gap-4 md:w-auto">
                                        
                                        <FilterSelect
                                          label="Clubs"
                                          value={teamFilter}
                                          onChange={setTeamFilter}
                                          options={clubOptions}
                                          disabled={isLoadingTeams}
                                        />
                                        
                                        <FilterSelect
                                          label="Positions"
                                          value={positionFilter}
                                          onChange={setPositionFilter}
                                          options={POSITION_OPTIONS}
                                        />

                                      </div>  
            
                      </div>
                      
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
