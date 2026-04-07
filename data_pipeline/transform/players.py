import pandas as pd
import numpy as np
from utils.constants import players_position,player_name_fix,player_round_columns,players_column

def filter_player_cols(df:pd.DataFrame, columns:list[str])->pd.DataFrame:
    """
    Filter unnecessary columns from the DataFrame.

    Args:
        df(pd.DataFrame): The original player statistics DataFrame.
        columns(list[str]): A list of column names to keep.
    Returns:
        pd.DataFrame: A new DataFrame containing the specified columns. 
    """
    df = df.copy()
    df = df[columns]
    return df


def change_players_positions(df:pd.DataFrame, positions:dict)->pd.DataFrame:
    """
    Changes player positions from single-letter formats to full words.

    Args:
        df(pd.DataFrame): The player statistic DataFrame.
        positions(dict): A dictionary mapping short position codes to their full names (e.g, {'f':'Forward'})
    Returns:
        pd.DataFrame: Dataframe with updated position names.
    """
    df_positions = df.copy()
    
    df_positions["position"] = df_positions["position"].apply(
        lambda x: ' '.join(positions.get(pos,pos) for pos in x.split()) if pd.notna(x) else x)
    
    return df_positions

def create_cols_players(df:pd.DataFrame)->pd.DataFrame:
    """
    Creates new calculated statistical columns for players.

    Args:
        df(pd.DataFrame): The player statistics DataFrame.

    Returns:
        pd.DataFrame: DataFrame containing the newly calculated columns.
    """
    df_new_cols = df.copy()
    df_new_cols["penalty_goals"] = df_new_cols["goals"] - df_new_cols["np_goals"]
    df_new_cols["g+a"] = df_new_cols["goals"] + df_new_cols["assists"]
    df_new_cols["g-xg"] = df_new_cols["goals"] - df_new_cols["xg"]
    df_new_cols["a-xa"] = df_new_cols["assists"] - df_new_cols["xa"]
    df_new_cols["gx90"] = np.where(df_new_cols["minutes"]>0,(df_new_cols["goals"]/df_new_cols["minutes"])*90,0)
    df_new_cols["ax90"] = np.where(df_new_cols["minutes"]>0,(df_new_cols["assists"]/df_new_cols["minutes"])*90,0)
    df_new_cols["g+ax90"] = np.where(df_new_cols["minutes"]>0,(df_new_cols["g+a"]/df_new_cols["minutes"])*90,0)
    df_new_cols["gxshots"] = np.where(df_new_cols["shots"]>0,(df_new_cols["goals"]/df_new_cols["shots"])*90,0)

    return df_new_cols


def fix_players_name(df:pd.DataFrame, name_fix:dict)->pd.DataFrame:
    """
    Manually corrects specific player names to their most known versions.

    Args:
        df(pd.DataFrame):The player statistics DataFrame.
        name_fix (dict): A dictionary mapping raw names to corrected names.

    Returns:
        pd.DataFrame: DataFrame with corrected player names.
    """
    df_name = df.copy()
    df_name["player"] = df_name["player"].replace(name_fix)
    return df_name


def round_player_columns(df: pd.DataFrame, round_columns:dict)->pd.DataFrame:
    """
    Rounds selected columns from the DataFrame to a specific number of decimals.

    Args:
        df (pd.DataFrame): The player statistics DataFrame.
        round_columns (dict): A dictionary mapping column names to 
            the number of decimal places (e.g., {'xg': 2}).

    Returns:
        pd.DataFrame: DataFrame with the specified columns rounded.
    """
    df_round = df.copy()
    df_round = df_round.round(round_columns)

    return df_round


def process_all_players(player_stats: pd.DataFrame)->pd.DataFrame:
    """
    Orchestrates the entire data cleaning and transformation pipeline for players.

    Args:
        player_stats (pd.DataFrame): The raw player statistics DataFrame.

    Returns:
        pd.DataFrame: The fully cleaned and transformed DataFrame.
    """
    try:
        print("Cleaning players data...")
        df_clean = (
            player_stats
            .pipe(change_players_positions,positions = players_position)
            .pipe(create_cols_players)
            .pipe(fix_players_name, name_fix = player_name_fix)
            .pipe(round_player_columns, round_columns = player_round_columns)
            .pipe(filter_player_cols,columns = players_column)

        )
        return df_clean

    except Exception as e:
        print(f"Error processing player data: {e}")
        raise