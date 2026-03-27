from supabase import create_client, Client
from dotenv import load_dotenv
import os
from pathlib import Path
from scrapers.league_table import export_league_table
from scrapers.players_info import export_players


def setup_database()->Client:
    load_dotenv()
    url = os.getenv("SUPABASE_URL")
    key = os.getenv("SUPABASE_KEY")
    return create_client(url,key)


def upload_data(supabase: Client, table_name: str, data: list):
    if not data:
        print(f"No data to insert on {table_name}")
        return
    try:
        response = (supabase.table(table_name).insert(data).execute())
        return response
    
    except Exception as e:
        print("error: {e}")


def main():
    supabase = setup_database()
    table = export_league_table()
    players = export_players()

    upload_data(supabase, "Positions",table)
    upload_data(supabase, "Players",players)


if __name__=="__main__":
    main()
