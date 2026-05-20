import { supabase } from "./supabase_client";

export const getStandings = async() =>{    
                const {data,error} = await supabase
                .from('positions')
                .select('*')
                .order('Pts', {ascending: false});

      if (error) throw new Error(error.message); 
        return data;
  }

export const getPlayers = async({pageParam, search, sortBy, sortOrder, team, position}) =>{
                const items_per_page = 8;
                const from = pageParam * items_per_page;
                const to = from + items_per_page - 1;

                let query = supabase
                  .from('players_stats')
                  .select('*')
              
                if (search) {
                  query = query.or(`player_name.ilike.%${search}%`)
                }

                if (team) {
                  query = query.eq('team', team);
                }

                if (position) {
                  query = query.ilike('position', `%${position}%`);
                }

                if (sortBy) {
                const isAscending = sortOrder === 'asc';
                query = query.order(sortBy, { ascending: isAscending, nullsFirst: false });
                } else {
                  query = query.order('player_name', { ascending: true });
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

export const getMatchWeek = async() =>{    
                const {data,error} = await supabase
                .from('positions')
                .select('MP')
                .order('MP', {ascending: false})
                .limit(1).single();

      if (error) throw new Error(error.message); 
        return data;
}

export const getHomeStats = async () => {
  const [scorer, assister, goalkeeper, matchweek] = await Promise.all([
    getTopScorer(),
    getTopAssister(),
    getTopGoalkeeper(),
    getMatchWeek()
  ]);

  return {
    scorer,
    assister,
    goalkeeper,
    matchweek
  };
}

export const getTeams = async() => {
                const {data,error} = await supabase
                .from('positions')
                .select('team')
                .order('team',{ascending: true});

        if (error) throw new Error(error.message);
          return data.map(item => item.team);
                
}