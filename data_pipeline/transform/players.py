import pandas as pd
import numpy as np
from utils.constants import agg_list, player_rename_col, rounding_overrides,players_understat_columns, player_name_fix, team_name_merged_fix, teams_name_fix,understat_tranfers, rename_columns, players_position
from utils.df_helpers import rename_cols,replace_values, filter_cols
from rapidfuzz import utils, process

def clean_cols_multiindex(dfs:list[pd.DataFrame]) -> list[pd.DataFrame]:
    """
    Flattens multi-level column indexes (MultiIndex) in a list of Fbref DataFrames.

    Args:
        dfs (list[pd.DataFrame]): A list of DataFrames containing statistics from Fbref with MultiIndex columns.

    Returns:
        list[pd.DataFrame]: A list of DataFrames with flattened, single-level column names.
    """
    dfs_clean = [df.copy() for df in dfs]
    for df in dfs_clean:
        new_cols = []

        for col in df.columns:
            if "Unnamed" in col[0]:
                new_cols.append(col[0])
            elif col[1]!="":
                level_0 = col[0].strip().replace(" ", "_")
                level_1 = col[1].strip()
                new_cols.append(f"{level_0}_{level_1}")
            else:
                new_cols.append(col[0]) 

        df.columns = new_cols
    return dfs_clean

def group_fbref_dfs(dfs:list[pd.DataFrame], agg_list:list[dict])->list[pd.DataFrame]:
    """
    Groups Fbref DataFrames by player to handle duplicates and filter columns.

    This function iterates through a list of DataFrames and a corresponding list of aggregation dictionaries. It groups each DataFrame by the "player" column and applies the specific aggregation rules provided in the dictionary, resolving duplicate player entries and keeping only the relevant columns.

    Args:
        dfs (list[pd.DataFrame]): A list of Fbref DataFrames containing player statistics.
        agg_list (list[dict]): A list of dictionaries specifying the aggregation functions for the columns of each DataFrame.

    Returns:
        list[pd.DataFrame]: A list of grouped DataFrames with unique players.
    """
    dfs_grouped = []
    for df,current_Agg in zip(dfs,agg_list):
        df_group = df.groupby(by = "player", as_index=False).agg(current_Agg)
        dfs_grouped.append(df_group)
    return dfs_grouped


def merge_dataframes(dfs:list[pd.DataFrame], col:str)->pd.DataFrame:
    """
    Merges a list of DataFrames sequentially using a left join.

    Args:
        dfs (list[pd.DataFrame]): A list of DataFrames to merge.
        col (str): The name of the column to use as the merge key.

    Returns:
        pd.DataFrame: A single, consolidated DataFrame containing unique columns from all input DataFrames, with NaN values replaced by 0.
    """
    dfs = [df.copy() for df in dfs]
    final_df = dfs[0]

    for df in dfs[1:]:
        cols_to_use = df.columns.difference(final_df.columns).to_list()+[col]
        final_df = final_df.merge(right = df[cols_to_use], how = "left", on = col)
    return final_df.fillna(0)

def player_transfer_understat(df: pd.DataFrame, corrections: dict) -> pd.DataFrame:
    """
    Updates the team assigned to specific players in an Understat DataFrame

    Args:
        df (pd.DataFrame): The Understat DataFrame containing player statistics.
        corrections (dict): A dictionary mapping player names to their correct 
                            team names (e.g., {"Player Name": "New Team"}).

    Returns:
        pd.DataFrame: A DataFrame with the updated player teams.
    """
    df = df.copy()
    for player, correct_team in corrections.items():
        df["team"] = np.where(df["player_name"] == player, 
                              correct_team, 
                              df["team"])
    
    return df

def update_player_names(df_l:pd.DataFrame, df_r: pd.DataFrame, threshold: float = 85.0) -> pd.DataFrame:
    """
    Harmonizes player names in a secondary DataFrame using a primary reference DataFrame.

    Args:
        df_l (pd.DataFrame): The primary reference DataFrame (e.g., Fbref) with the standardized player names.
        df_r (pd.DataFrame): The secondary DataFrame (e.g., Understat) whose player names need to be updated.
        threshold (float, optional): The minimum fuzzy match score (0-100) required to automatically replace a name. Defaults to 85.0.

    Returns:
        pd.DataFrame: A copy of the secondary DataFrame (`df_r`) with updated player names.
    """
    df_r = df_r.copy()
    
    # get teams
    teams = set(df_l["team"].unique()).intersection(set(df_r["team"].unique()))
    
    unmatched_results = []
    name_replacements = {}  

    for team in teams:
        names_l = df_l[df_l["team"] == team]["player_name"].unique().tolist()
        names_r = df_r[df_r["team"] == team]["player_name"].unique().tolist()

        unmatched_r = [n for n in names_r if n not in names_l]

        for name_r in unmatched_r:
            if not names_l:
                continue
                
            match = process.extractOne(
                name_r,
                names_l,
                processor=utils.default_process
            )

            if match:
                suggested_name_l, score, _ = match

                if score >= threshold:
                    name_replacements[name_r] = suggested_name_l
            
                else:
                    unmatched_results.append({
                        "Team": team,
                        "Original Name (DF_R)": name_r,
                        "Best Match (DF_L)": suggested_name_l,
                        "Similarity (%)": round(score, 2)
                    })

    if name_replacements:
        df_r = replace_values(df_r,name_replacements,"player_name")

    unmatched_df = pd.DataFrame(unmatched_results)
    
    if unmatched_df.empty:
        print("Success! All unmatched players were updated and passed the threshold.")
    else:
        print(f"Warning: {len(unmatched_df)} players didn't meet the {threshold}% threshold.")
        print("\n--- Unmatched Players ---")
        print(unmatched_df.to_string(index=False)) 
        print("-------------------------\n")

    return df_r

def change_players_positions(df:pd.DataFrame, positions:dict)->pd.DataFrame:
    """
    Changes player positions from short formats to full words.

    Args:
        df(pd.DataFrame): The player statistic DataFrame.
        positions(dict): A dictionary mapping short position codes to their full names (e.g, {"FW":"Forward"})
    Returns:
        pd.DataFrame: Dataframe with updated position names.
    """
    df_positions = df.copy()
    
    df_positions["position"] = df_positions["position"].apply(
        lambda x: " ".join(positions.get(pos,pos) for pos in x.split(",")) if pd.notna(x) else x)
    
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
    df_new_cols["90s"] = df_new_cols["minutes"]/90
    df_new_cols["npg"] = df_new_cols["goals"] - df_new_cols["pk_goals"]
    df_new_cols["g_a"] = df_new_cols["goals"] + df_new_cols["assists"]
    df_new_cols["minutes_per_match"] = np.where(df_new_cols["matches_played"] > 0,df_new_cols["minutes"]/df_new_cols["matches_played"], 0)
    df_new_cols["shots_conversion_rate"] = np.where(df_new_cols["shots"] > 0, df_new_cols["goals"]/df_new_cols["shots"], 0)
    df_new_cols["pk_conversion_rate"] = np.where(df_new_cols["pk_attempted"] > 0,df_new_cols["pk_goals"]/df_new_cols["pk_attempted"], 0)
    df_new_cols["shots_accuracy"] = np.where(df_new_cols["shots"] > 0, df_new_cols["shots_on_target"]/df_new_cols["shots"], 0)
    df_new_cols["goal_involvement_pct"] = np.where(df_new_cols["team_goals_scored"] > 0, (df_new_cols["goals"] + df_new_cols["assists"]) / df_new_cols["team_goals_scored"], 0)
    df_new_cols["total_cards"] = df_new_cols["yellow_cards"] + df_new_cols["red_cards"]
    df_new_cols["fouls_per_card"] = np.where(df_new_cols["total_cards"] > 0,df_new_cols["fouls_committed"]/df_new_cols["total_cards"], 0)
    df_new_cols["gk_saves_per_goal"] = np.where(df_new_cols["gk_goals_against"] > 0,df_new_cols["gk_saves"]/df_new_cols["gk_goals_against"], 0)
    df_new_cols["g_minus_xg"] = df_new_cols["goals"] - df_new_cols["xg"]
    df_new_cols["a_minus_xa"] = df_new_cols["assists"] - df_new_cols["xa"]

    p90_metrics = ["npg", "goals", "assists","g_a", "shots", "shots_on_target", "interceptions", "tackles_won","gk_goals_against"]
    
    for col in p90_metrics:
        df_new_cols[f"{col}_p90"] = np.where(df_new_cols["minutes"] > 0, (df_new_cols[col] / df_new_cols["90s"]), 0)

    return df_new_cols

def get_player_age(df:pd.DataFrame) -> pd.DataFrame:
    """
    Extracts the player's age in years from the standard Fbref format.
    Fbref typically formats player ages as "years-days" (e.g., "25-124").This function splits that string representation and retains only the years portion for easier analysis.
    
    Args:
        df (pd.DataFrame): The DataFrame containing player statistics with an "age" column.

    Returns:
        pd.DataFrame: A copy of the DataFrame with the "age" column updated to contain only the years.
    """
    df = df.copy()
    df["age"] = df["age"].str.split("-").str[0]

    return df

def auto_round_player_columns(df: pd.DataFrame, overrides: dict = None) -> pd.DataFrame:
    """
    Rounds numeric columns dynamically based on their magnitude.
    Small values get more decimals, large values get fewer.

    Args:
        df (pd.DataFrame): The player statistics DataFrame.
        overrides (dict): Optional. A dictionary to force specific decimal 
                          places for certain columns (e.g., {"xg": 3}).

    Returns:
        pd.DataFrame: DataFrame with the dynamically rounded columns.
    """
    df_round = df.copy()
    overrides = overrides or {}
    
    numeric_cols = df_round.select_dtypes(include=[np.number]).columns

    dynamic_round_dict = {}
    
    for col in numeric_cols:
        if col in overrides:
            dynamic_round_dict[col] = overrides[col]
            continue
            
        max_val = df_round[col].abs().max()
        
        if pd.isna(max_val) or max_val == 0:
            dynamic_round_dict[col] = 0
        elif max_val < 10:
            dynamic_round_dict[col] = 2 
        elif max_val < 100:
            dynamic_round_dict[col] = 1 
        else:
            dynamic_round_dict[col] = 0 

    return df_round.round(dynamic_round_dict)

def process_all_players(fbref_dfs:list[pd.DataFrame], understat:pd.DataFrame)->pd.DataFrame:
    """
    Orchestrates the entire data cleaning and transformation pipeline for players.

    Args:
        dfs (list[pd.DataFrame]): A list of raw player statistics DataFrames

    Returns:
        pd.DataFrame: The fully cleaned and transformed DataFrame.
    """
    try:
        print("Cleaning players data...")
        fbref_dfs = [df.copy() for df in fbref_dfs]
        understat = understat.copy()

        #Fbref clean
        fbref_cleaned = clean_cols_multiindex(fbref_dfs)
        dfs_grouped = group_fbref_dfs(fbref_cleaned, agg_list)
        merged_df = merge_dataframes(dfs_grouped, "player")

        # Standardize Fbref names and teams for future merges
        merged_df = rename_cols(merged_df,player_rename_col)
        merged_df = replace_values(merged_df, player_name_fix,"player_name")
        merged_df = replace_values(merged_df, team_name_merged_fix, "team")
        merged_df = replace_values(merged_df, teams_name_fix, "team")

        #Understat
        understat_clean = (
            understat
            .pipe(filter_cols, players_understat_columns)
            .pipe(rename_cols, player_rename_col)
            .pipe(replace_values,teams_name_fix,"team")
            .pipe(replace_values,player_name_fix,"player_name")
            .pipe(player_transfer_understat, understat_tranfers)
        )

        # Harmonize Understat names to match Fbref
        understat_clean = update_player_names(merged_df, understat_clean, 85.0)

        #Final merge
        underxfbref = merge_dataframes([merged_df, understat_clean], "player_name")

        df_clean = (
            underxfbref
            .pipe(rename_cols, rename_columns)
            .pipe(change_players_positions, positions=players_position)
            .pipe(create_cols_players)
            .pipe(get_player_age)
            .pipe(auto_round_player_columns, rounding_overrides)
        )

        return df_clean

    except Exception as e:
        print(f"Error processing player data: {e}")
        raise