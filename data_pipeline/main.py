import pandas as pd
#scrapers
from scrapers.sofascore import get_sofascore_scraper,get_league_table
from scrapers.understat import get_understat_scraper,get_player_stats
from utils.constants import league, season
from scrapers.fbref import get_player_general_stats, get_fbref_scraper,get_player_playing_time_stats, get_player_keeper_stats,get_player_misc_stats,get_player_shooting_stats

#Transformers
from transform.standings import process_league_table
from transform.players import process_all_players

#Databasee
from db.engine import upsert_data, get_supabase_client

def get_data() -> tuple[pd.DataFrame,list[pd.DataFrame],pd.DataFrame]:
    """
    Extracts raw data from from SofaScore, Understat, and Fbref web sources.

    Returns:
        tuple[pd.DataFrame]: tuple[pd.DataFrame, list[pd.DataFrame], pd.DataFrame]: A tuple containing:
            - league_table (pd.DataFrame): The raw league standings DataFrame.
            - dfs (list[pd.DataFrame]): A list of five raw Fbref player stat DataFrames.
            - player_understat (pd.DataFrame): The raw Understat player stats DataFrame.
    """
    #sofascore_scraper = get_sofascore_scraper(league, season)
    understat_scraper = get_understat_scraper(league, season)
    fbref_scraper = get_fbref_scraper(league,season)

    #league_table = get_league_table(sofascore_scraper)
    player_stats = get_player_general_stats(fbref_scraper)
    playing_time = get_player_playing_time_stats(fbref_scraper)
    shooting_stats = get_player_shooting_stats(fbref_scraper)
    gk_stats = get_player_keeper_stats(fbref_scraper)
    misc_stats = get_player_misc_stats(fbref_scraper) 
    player_understat = get_player_stats(understat_scraper)

    dfs = [player_stats,playing_time,shooting_stats,misc_stats,gk_stats]


    return dfs,player_understat

def cleaning_data(dfs: list[pd.DataFrame],understat: pd.DataFrame) -> tuple[pd.DataFrame, pd.DataFrame]:
    """
    Executes the transformation and cleaning pipelines for all datasets.

    Args:
        league_table (pd.DataFrame): The raw league standings DataFrame.
        dfs (list[pd.DataFrame]): A list of raw player statistics DataFrames from Fbref.
        understat (pd.DataFrame): The raw player statistics DataFrame from Understat.

    Returns:
            tuple[pd.DataFrame, pd.DataFrame]: A tuple containing:
            - clean_league_table (pd.DataFrame): The processed league table DataFrame.
            - clean_player_stats (pd.DataFrame): The fully cleaned and merged player stats DataFrame.
    """

    #clean_league_table = process_league_table(league_table)
    clean_player_stats = process_all_players(dfs,understat)

    return clean_player_stats



def main() -> None:
    """
    Main orchestrator for the ETL pipeline.

    This function executes the complete end-to-end data pipeline:
    1. Extract: Retrieves raw data from web sources (Fbref, Understat, SofaScore).
    2. Transform: Cleans, merges, and standardizes the datasets.
    3. Load: Upserts the fully processed data into the Supabase database.
    """
    #Extract
    dfs,understat = get_data()
    
    #Transform
    clean_player_stats = cleaning_data(dfs, understat)


    #Load
    supabase = get_supabase_client()
    upsert_data(supabase, "players_stats", clean_player_stats, "player_name")
    #upsert_data(supabase, "positions", clean_league_table, "team")
    
    print("ETL process completed successfully!")



if __name__=="__main__":
    main()
