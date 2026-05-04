import soccerdata as sd
import pandas as pd

def get_fbref_scraper(league: str, season: int)-> sd.Sofascore:
    """
    Initializes and returns a Sofascore scraper.
    Args:
        league(str): The name or identifier of the league.
        season(int): The year or identifier of the league.
    Returns:
        sd.Sofascore: A configured instance of the Sofascore scraper.
    """
    fbref_scraper = sd.FBref(league,season)
    return fbref_scraper


def get_player_general_stats(scraper: sd.FBref)-> pd.DataFrame:
    """
    Extract the league standing table.

    Args:
        scraper(sd.Sofascore): Active instance of the sofascore scraper.
    Returns:
        pd.DataFrame containing the league table data.
    """
    df = scraper.read_player_season_stats(stat_type="standard")
    return df.reset_index()

def get_player_shooting_stats(scraper: sd.FBref)-> pd.DataFrame:
    """

    """
    df = scraper.read_player_season_stats(stat_type="shooting")
    return df.reset_index()

def get_player_playing_time_stats(scraper: sd.FBref)-> pd.DataFrame:
    """

    """
    df = scraper.read_player_season_stats(stat_type="playing_time")
    return df.reset_index()

def get_player_keeper_stats(scraper: sd.FBref)-> pd.DataFrame:
    """

    """
    df = scraper.read_player_season_stats(stat_type="keeper")
    return df.reset_index()

def get_player_misc_stats(scraper: sd.FBref)-> pd.DataFrame:
    """

    """
    df = scraper.read_player_season_stats(stat_type="misc")
    return df.reset_index()


