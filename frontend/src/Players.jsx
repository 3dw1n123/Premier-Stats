import PageHeader from "./components/PageHeader"
import { useEffect } from "react"
import PlayerTable from "./components/PlayerTable"
import { useInView } from 'react-intersection-observer';
import SectionHeader from "./components/SectionHeader"
import { usePlayers } from "./hooks/usePlayers";

function Players() {


const {data, fetchNextPage,hasNextPage, isFetchingNextPage} = usePlayers();
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
                    <div className="max-w-[1440px] w-full">
                      <section className=" rounded-xl overflow-x-auto overflow-hidden shadow-lg w-full ">
                                        <PlayerTable players={allPlayers} 
                                          observerRef={ref}
                                          isFetchingNextPage={isFetchingNextPage}
                                          hasNextPage={hasNextPage}
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
