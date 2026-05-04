import pandas as pd
from utils.df_helpers import replace_values


def order_league_table(df:pd.DataFrame)->pd.DataFrame:
    """
    Sorts the league table alphabetically by team name.

    Args:
        df (pd.DataFrame): The raw league standings DataFrame.

    Returns:
        pd.DataFrame: A new DataFrame sorted by the team column.
    """
    df = df.copy()
    return df.sort_values(by= "team")


def process_league_table(league_table: pd.DataFrame)-> pd.DataFrame: 
    """
    Orchestrates the data transformation pipeline for the league standings.

    Args:
        league_table (pd.DataFrame): The raw league standings DataFrame extracted from the scraper.

    Returns:
        pd.DataFrame: The cleaned and transformed standings DataFrame.
    """   
    try:
        df_clean =  (
            league_table
            .pipe(order_league_table)
            .pipe(replace_values,{"Liverpool FC":"Liverpool"},"team")
        )

        return df_clean

    except Exception as e:
        print(f"Error processing standings data: {e}")
        raise
