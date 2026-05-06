import soccerdata as sd
import pandas as pd
import os

def get_sofascore_scraper(league: str, season: int)-> sd.Sofascore:
    """
    Initializes and returns a Sofascore scraper.
    Args:
        league(str): The name or identifier of the league.
        season(int): The year or identifier of the league.
    Returns:
        sd.Sofascore: A configured instance of the Sofascore scraper.
    """
    proxy_url = os.environ.get("HTTP_PROXY")
    sofascore_scraper = sd.Sofascore(league, season, proxy=proxy_url)
    return sofascore_scraper


def get_league_table(scraper: sd.Sofascore)-> pd.DataFrame:
    """
    Extract the league standing table.

    Args:
        scraper(sd.Sofascore): Active instance of the sofascore scraper.
    Returns:
        pd.DataFrame containing the league table data.
    """
    df = scraper.read_league_table()

    return df.reset_index(drop=True)