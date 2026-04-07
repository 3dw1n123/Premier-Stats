import pandas as pd
from pathlib import Path
#scrapers
from scrapers.sofascore import get_sofascore_scraper,get_league_table
from scrapers.understat import get_understat_scraper,get_player_stats
from utils.constants import league, season

#Transformers
from transform.standings import process_league_table
from transform.players import process_all_players
from transform.mapper import process_mapping

#Databasee
from db.engine import upsert_data, get_supabase_client

def get_data() -> tuple[pd.DataFrame]:
    """
    Extracts raw data from all web sources.

    Returns:
        tuple[pd.DataFrame]: A tuple containing the raw league table DataFrame and the raw player stats DataFrame.
    """
    sofascore_scraper = get_sofascore_scraper(league, season)
    understat_scraper = get_understat_scraper(league, season)

    league_table = get_league_table(sofascore_scraper)
    player_stats = get_player_stats(understat_scraper)

    return league_table, player_stats

def cleaning_data(league_table:pd.DataFrame, player_stats:pd.DataFrame)->tuple[pd.DataFrame]:
    """
    Executes the transformation and cleaning pipelines for all datasets.

    Args:
        league_table (pd.DataFrame): The raw league standings DataFrame.
        player_stats (pd.DataFrame): The raw player stats DataFrame.

    Returns:
        tuple[pd.DataFrame]: A tuple containing the cleaned league table, cleaned player stats, and the team mapping table.
    """
    clean_league_table = process_league_table(league_table)
    clean_player_stats = process_all_players(player_stats)
    clean_mapping = process_mapping(player_stats, league_table)

    return clean_league_table, clean_player_stats, clean_mapping



def main():
    """
    Main orchestrator for the ETL pipeline.

    Extracts raw data, transforms it, and loads the cleaned datasets into the Supabase database.
    """
    #Extract
    league_table, player_stats = get_data()
    
    #Transform
    clean_league_table, clean_player_stats, clean_mapping = cleaning_data(league_table, player_stats)

    #Load
    supabase = get_supabase_client()

    upsert_data(supabase, "team_mapping", clean_mapping, "team_name")
    upsert_data(supabase, "players",clean_player_stats,"player")
    upsert_data(supabase, "positions", clean_league_table,"team")

    print("ETL process completed successfully!")


if __name__=="__main__":
    main()
