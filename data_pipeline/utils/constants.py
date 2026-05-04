league = "ENG-Premier League"

season = 2025

agg_general = {
        "team": lambda x: " - ".join(x.unique()),
        "nation": "first",
        "pos" : "first",
        "age" : "first",
        "born": "first",
        "Playing_Time_MP": "sum",
        "Playing_Time_Starts": "sum",
        "Playing_Time_Min":"sum",
        "Performance_Gls":"sum",
        "Performance_Ast":"sum",
        "Performance_PK":"sum",
        "Performance_PKatt":"sum",
        "Performance_CrdY":"sum",
        "Performance_CrdR":"sum"
    }

agg_playing_time = {
    "Starts_Compl":"sum",
    "Subs_Subs":"sum",
    "Subs_unSub":"sum",
    "Team_Success_onG":"sum",
    "Team_Success_onGA":"sum",
    "Team_Success_+/-":"sum",
}

agg_shooting_stats = {
    "Standard_Sh":"sum",
    "Standard_SoT":"sum",
    "Standard_SoT":"sum"
}

agg_misc_stats = {
    "Performance_2CrdY":"sum",
    "Performance_Fls":"sum",
    "Performance_Fld":"sum",
    "Performance_Off":"sum",
    "Performance_Int":"sum",
    "Performance_TklW":"sum",
    "Performance_PKwon":"sum",
    "Performance_PKcon":"sum",
    "Performance_OG":"sum",
}

agg_gk_stats = {
    "Performance_GA":"sum",
    "Performance_SoTA":"sum",
    "Performance_Saves":"sum",
    "Performance_Save%":"sum",
    "Performance_CS":"sum",
    "Performance_CS%":"sum",
    "Penalty_Kicks_PKatt":"sum",
    "Penalty_Kicks_PKA":"sum",
    "Penalty_Kicks_PKsv":"sum",
    "Penalty_Kicks_PKm":"sum",
    "Penalty_Kicks_Save%":"sum",

}

agg_list = [agg_general,agg_playing_time,agg_shooting_stats, agg_misc_stats, agg_gk_stats]

player_rename_col = {
    "player":"player_name"
}

players_understat_columns = ["player","team","xg","np_xg","xa","key_passes","xg_chain","xg_buildup"]

player_name_fix = {
    "Mathis Cherki": "Rayan Cherki",
    "Sávio": "Savinho",
    "Gabriel": "Gabriel Magalhães",
    "Benoit Badiashile Mukinayi": "Benoît Badiashile",
    "João Pedro": "Joao Pedro",
    "Joseph Gomez": "Joe Gomez",
    "Amad Diallo Traore": "Amad Diallo",
    "Iyenoma Destiny Udogie": "Destiny Udogie",
    "Pape Sarr": "Pape Matar Sarr",
    "Guglielmo Vicario": "Vicario",
    "Thiago": "Igor Thiago",
    "Alejandro Jiménez": "Álex Jiménez",
    "Jair": "Jair Cunha",
    "Emi Buendía": "Emiliano Buendía",
    "Lesley Ugochukwu": "Chimuanya Ugochukwu",
    "Mateo Kovačić": "Mateo Kovacic",
    "Matty Cash": "Matthew Cash",
    "Radu Drăgușin": "Radu Dragusin",
    "Saša Lukić": "Sasa Lukic",
    "Tomáš Souček": "Tomas Soucek",
    "Đorđe Petrović": "Djordje Petrovic"
}

team_name_merged_fix = {
    "Fulham - West Ham United": "West Ham United",
    "Bournemouth - Manchester City": "Manchester City",
    "Crystal Palace - Tottenham Hotspur": "Crystal Palace",
    "Aston Villa - Nottingham Forest": "Aston Villa",
    "Arsenal - Crystal Palace": "Arsenal",
    "Aston Villa - Crystal Palace": "Crystal Palace",
    "Chelsea - Leeds United": "Leeds United",
    "Aston Villa - Liverpool": "Aston Villa",
    "Burnley - West Ham United": "Burnley",
    "Crystal Palace - Wolves": "Crystal Palace",
    "Chelsea - Sunderland": "Chelsea",
    "Crystal Palace - Manchester City": "Manchester City",
    "Fulham - Manchester City": "Fulham",
    "Chelsea - Everton": "Everton"
}

teams_name_fix = {
    "Wolves": "Wolverhampton",
    "Manchester Utd": "Manchester United",
    "Brighton": "Brighton & Hove Albion",
    "Leeds":"Leeds United",
    "Tottenham":"Tottenham Hotspur",
    "West Ham":"West Ham United",
    "Wolverhampton Wanderers":"Wolverhampton"
}

understat_tranfers = {
    "Adama Traoré": "West Ham United",
    "Antoine Semenyo": "Manchester City",
    "Evann Guessand": "Crystal Palace",
    "Facundo Buonanotte": "Leeds United",
    "Tyrique George": "Everton",
    "Marc Guehi": "Manchester City",
}

rename_columns = {  "player":"player_name",
                    "pos":"position",
                    "born":"birth_year", 
                    "Playing_Time_MP":"matches_played",
                    "Playing_Time_Starts":"starts",
                    "Playing_Time_Min":"minutes", 
                    "Performance_Gls":"goals",
                    "Performance_Ast":"assists",
                    "Performance_PK": "pk_goals",
                    "Performance_CrdY":"yellow_cards", 
                    "Performance_CrdR":"red_cards",
                    "Performance_PKatt":"pk_attempted",
                    "Starts_Compl":"matches_completed",
                    "Subs_Subs":"sub_in",
                    "Subs_unSub":"unused_sub",
                    "Team_Success_+/-":"plus_minus",
                    "Team_Success_onG":"team_goals_scored",
                    "Team_Success_onGA":"team_goals_conceded",
                    "Standard_Sh":"shots",
                    "Standard_SoT":"shots_on_target",
                    "Performance_2CrdY":"second_yellow_cards",
                    "Performance_Fld":"fouls_drawn",
                    "Performance_Fls":"fouls_committed",
                    "Performance_Int":"interceptions",
                    "Performance_OG":"own_goals",
                    "Performance_Off":"offsides",
                    "Performance_PKcon":"pk_conceded",
                    "Performance_PKwon":"pk_won",
                    "Performance_TklW":"tackles_won",
                    "Penalty_Kicks_PKA":"gk_pk_allowed",
                    "Penalty_Kicks_PKatt":"gk_pk_faced",
                    "Penalty_Kicks_PKm":"gk_pk_missed_against",
                    "Penalty_Kicks_PKsv":"gk_pk_saved",
                    "Penalty_Kicks_Save%":"gk_pk_save_pct",
                    "Performance_CS":"gk_clean_sheets",
                    "Performance_CS%":"gk_clean_sheets_pct",
                    "Performance_GA":"gk_goals_against",
                    "Performance_Save%":"gk_save_pct",
                    "Performance_Saves":"gk_saves",
                    "Performance_SoTA":"gk_shots_on_target_faced"}
                    
players_position = {"GK":"Goalkeeper",
                    "DF":"Defender",
                    "MF":"Midfiler",
                    "FW":"Forward"}

rounding_overrides = {
    "xg": 2, "np_xg": 2, "xa": 2, "xg_buildup": 2, "xg_chain": 2,
    "g_minus_xg": 2, "a_minus_xa": 2,
    "shots_conversion_rate": 3, "pk_conversion_rate": 3, "shots_accuracy": 3, 
    "goal_involvement_pct": 3, "gk_save_pct": 3, "gk_clean_sheets_pct": 3, 
    "gk_pk_save_pct": 3,
    "fouls_per_card": 2, "gk_saves_per_goal": 2,
    "npg_p90": 2, "goals_p90": 2, "assists_p90": 2, "g_a_p90": 2, 
    "shots_p90": 2, "shots_on_target_p90": 2, "interceptions_p90": 2, 
    "tackles_won_p90": 2, "gk_goals_against_p90": 2
}