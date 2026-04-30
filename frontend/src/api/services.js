import { supabase } from "./supabase_client";

export const getStandings = async() =>{    
                const {data,error} = await supabase
                .from('positions')
                .select('*')
                .order('Pts', {ascending: false});

      if (error) throw new Error(error.message); 
        return data;
  }

export const getPlayers = async({pageParam}) =>{
                const items_per_page = 8;
                const from = pageParam * items_per_page;
                const to = from + items_per_page - 1;

                const {data,error} = await supabase
                .from('players_stats')
                .select('*')
                .range(from,to);
      
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
