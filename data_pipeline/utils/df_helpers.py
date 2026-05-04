import pandas as pd

def replace_values(df:pd.DataFrame, values:dict,col_name:str) -> pd.DataFrame:
    """
    Replace specific values in a specific column of the DataFrame.

    Args:
        df (pd.DataFrame): The original DataFrame.
        values (dict): A dictionary mapping old values to new values.
        col_name (str): The name of the column to update.
        
    Returns:
        pd.DataFrame: A new DataFrame with the replaced values.
    """
    df = df.copy()
    df[col_name] = df[col_name].replace(values)
    return df


def rename_cols(df:pd.DataFrame, rename:dict) -> pd.DataFrame:
    """
    Rename columns in the DataFrame.

    Args:
        df (pd.DataFrame): The original DataFrame.
        rename (dict): A dictionary mapping old column names to new column names.
        
    Returns:
        pd.DataFrame: A new DataFrame with the renamed columns.
    """
    return df.rename(columns=rename)

def filter_cols(df:pd.DataFrame, columns:list[str]) -> pd.DataFrame:
    """
    Filter unnecessary columns from the DataFrame.

    Args:
        df(pd.DataFrame): The original DataFrame.
        columns(list[str]): A list of column names to keep.
        
    Returns:
        pd.DataFrame: A new DataFrame containing the specified columns. 
    """
    df = df.copy()
    df = df[columns]
    return df