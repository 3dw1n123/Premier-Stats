import soccerdata as sd
import pandas as pd

def get_understat_scraper(league: str, season: int)->sd.Understat:
    """
    Initializes and returns a Understat scraper.
    Args:
        league(str): The name or identifier of the league.
        season(int): The year or identifier of the league.
    Returns:
        sd.Understat: A configured instance of the Understat scraper.
    """
    return sd.Understat(league,season)



def get_player_stats(scraper: sd.Understat)->pd.DataFrame:
    """
    Extracts player season statistics.

    Args:
        scraper(sd.Understat): Active instance of the Understat scraper.
    
    Returns:
        pd.DataFrame: Dataframe cointaining players statistics.
    """
    df = scraper.read_player_season_stats()

    return df.reset_index()