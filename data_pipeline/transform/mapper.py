import pandas as pd
import soccerdata as sd
from scrapers.understat import get_player_stats
from scrapers.sofascore import get_league_table
from utils.constants import teams_name_fix

def get_understat_teams(df:pd.DataFrame, team_fix:dict) -> pd.DataFrame:
    """
    Extracts unique teams and their IDs from the Understat DataFrame and normalizes their names.

    Args:
        df (pd.DataFrame): The raw stats DataFrame from Understat.
        team_fix (dict): A dictionary mapping Understat team names to match with the Sofascore team names.

    Returns:
        pd.DataFrame: DataFrame containing standardized team names and their corresponding 'team_id'.
    """
    df = df.copy()
    df_teams = df[["team","team_id"]].drop_duplicates().replace(team_fix).sort_values(by="team").reset_index(drop=True)  
    return df_teams

def get_sofascore_teams(df:pd.DataFrame) -> pd.DataFrame:
    """
    Extracts unique teams from the Sofascore table positions DataFrame.

    Args:
        df (pd.DataFrame): The league standings DataFrame from Sofascore.

    Returns:
        pd.DataFrame: DataFrame containing a sorted list of unique 'team' names.
    """
    df = df.copy()
    df_teams = df[["team"]].sort_values(by="team")
    return df_teams

def mapping_table(sofascore:pd.DataFrame, understat:pd.DataFrame) -> pd.DataFrame:
    """
    Merges Sofascore and Understat team DataFrames to create a mapping table.

    Args:
        sofascore (pd.DataFrame): DataFrame containing unique Sofascore teams.
        understat (pd.DataFrame): DataFrame containing unique Understat teams and IDs.

    Returns:
        pd.DataFrame: A cross-reference table with columns 'team_name' and 'understat_id'.
    """
    df1,df2 = sofascore.copy(), understat.copy()
    mapping = pd.merge(df1, df2, on="team")
    mapping.columns = ["team_name","understat_id"]
    return mapping.reset_index(drop=True)

def process_mapping(df_understat, df_sofascore)->pd.DataFrame:
     try:
        print("Creating team mapping table...")
        understat_teams = get_understat_teams(df_understat, teams_name_fix)
        sofascore_teams = get_sofascore_teams(df_sofascore)

        df_mapped = mapping_table(sofascore_teams, understat_teams)
        return df_mapped
     except Exception as e:
         print(f"Error processing mapping table: {e}")
         raise