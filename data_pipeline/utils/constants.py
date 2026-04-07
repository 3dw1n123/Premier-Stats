from pathlib import Path


league = 'ENG-Premier League'

season = 2025

players_column = ["player","team_id","player_id","position","matches","minutes","goals","xg","np_goals","np_xg","assists","xa","shots","key_passes","yellow_cards","red_cards","xg_chain","xg_buildup","penalty_goals","g+a","g-xg","a-xa","gx90","ax90","g+ax90","gxshots"]

players_position = {"GK":"Goalkeeper",
                    "D":"Defender",
                    "M":"Midfiler",
                    "F":"Forward",
                    "S":"Substitute"}

player_round_columns = {"xg":2,
                        "np_xg":2,
                        "xa":2,
                        "xg_chain":2,
                        "xg_buildup":2,
                        "g+a":2,
                        "g-xg":2,
                        "a-xa":2,
                        "gx90":2,
                        "ax90":2,
                        "g+ax90":2,
                        "gxshots":2}


teams_name_fix = {
    "Brighton":"Brighton & Hove Albion",
    "Leeds":"Leeds United",
    "Tottenham":"Tottenham Hotspur",
    "West Ham":"West Ham United",
    "Wolverhampton Wanderers":"Wolverhampton",
}

player_name_fix = {
    # Manchester City
    "Mathis Cherki": "Rayan Cherki",
    "Sávio": "Savinho",
    
    # Arsenal
    "Gabriel": "Gabriel Magalhães",
    
    # Chelsea
    "Benoit Badiashile Mukinayi": "Benoît Badiashile",
    "João Pedro": "Joao Pedro",
    
    # Liverpool
    "Joseph Gomez": "Joe Gomez",
    
    # Manchester United
    "Amad Diallo Traore": "Amad Diallo",
    
    # Tottenham
    "Iyenoma Destiny Udogie": "Destiny Udogie",
    "Pape Sarr": "Pape Matar Sarr",
    "Guglielmo Vicario": "Vicario",

    #Brentford
    "Igor": "Igor Thiago"
}
