import os
from supabase import create_client, Client
import pandas as pd
from dotenv import load_dotenv

load_dotenv()


def get_supabase_client()-> Client:
    """
    Initializes and returns the Supabase client.

    Returns:
        Client: An authenticated Supabase client instance.
    """
    url = os.getenv("SUPABASE_URL")
    key = os.getenv("SUPABASE_KEY")

    if not url or not key:
        raise ValueError("SUPABASE_URL or SUPABASE_KEY not found")

    return create_client(url, key)


def upsert_data(supabase: Client, table_name: str, data:list | pd.DataFrame, conflict_key: str | None = None ):
    """
    Performs an upsert (update or insert) operation on a specified Supabase table.

    If a pandas DataFrame is provided, it handles NaN values and converts it to a list of dictionaries before inserting.

    Args:
        supabase (Client): The active Supabase client instance.
        table_name (str): The name of the target table in the database.
        data (Union[List[Dict[str, Any]], pd.DataFrame]): The data to be upserted.
        conflict_key (Optional[str], optional): The column name to check for conflicts. Defaults to None.

    Returns:
        Any: The response object from Supabase, or None if the input data is empty.
    """
    if isinstance(data,pd.DataFrame):
        data = data.replace({float("nan"): None}).to_dict(orient="records")

    if not data:
        print(f"No data to upsert in the table: {table_name}")
        return None
    
    try:
        print(f"Upserting data into: {table_name}...")
        if conflict_key:
                response = (
                    supabase.table(table_name)
                    .upsert(data, on_conflict=conflict_key)
                    .execute()
                )        
        else:
                response = (
                    supabase.table(table_name)
                    .upsert(data)
                    .execute()
                )

        return response

    except Exception as e:
        print(f"error:{e} at the table: {table_name}")
        raise
