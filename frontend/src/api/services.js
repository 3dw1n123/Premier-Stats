import { supabase } from "./supabase_client";

export const getStandings = async() =>{    
                const {data,error} = await supabase
                .from('positions')
                .select('*')
                .order('Pts', {ascending: false});

      if (error) throw new Error(error.message); 
        return data;
  }

export const getPlayers = async({pageParam, search}) =>{
                const items_per_page = 8;
                const from = pageParam * items_per_page;
                const to = from + items_per_page - 1;

                let query = supabase
                  .from('players_stats')
                  .select('*')
              
                if (search) {
                  query = query.or(`player_name.ilike.%${search}%,team.ilike.%${search}%`)
                }
                
                const {data,error} = await query.range(from, to) 

      if (error) throw new Error(error.message); 
      return data;
  }

export const getPlayerById = async({id}) =>{
    const{data, error} = await supabase
    .from('players_stats')
    .select('*')
    .eq("id", id)
    .single();

      if (error) throw new Error(error.message);  
      console.log(data)
      return data;
}


export const getTopScorer = async() =>{
                const {data,error} = await supabase
                .from('players_stats')
                .select('player_name, team, goals, id')
                .order('goals', { ascending: false })
                .limit(1).single();

      if (error) throw new Error(error.message); 
        return data;
}

export const getTopAssister = async() =>{
                const {data,error} = await supabase
                .from('players_stats')
                .select('player_name, team, assists, id')
                .order('assists', { ascending: false })
                .limit(1).single();

      if (error) throw new Error(error.message); 
        return data;
}

export const getTopGoalkeeper = async() =>{
                const {data,error} = await supabase
                .from('players_stats')
                .select('player_name, team, gk_clean_sheets, id')
                .order('gk_clean_sheets', { ascending: false })
                .limit(1).single();

      if (error) throw new Error(error.message); 
        return data;
}

export const getTopStatsCards = async () => {
  const [scorer, assister, goalkeeper] = await Promise.all([
    getTopScorer(),
    getTopAssister(),
    getTopGoalkeeper()
  ]);

  return {
    scorer,
    assister,
    goalkeeper
  };
}