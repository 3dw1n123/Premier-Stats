import soccerdata as sd
from pathlib import Path
from scrapers.constants import league, season,export_path

def export_league_table()->None:
    file_path = export_path/"league_table.json"
    sofascore = sd.Sofascore(leagues=league,seasons=season)

    table = sofascore.read_league_table()

    table.to_json(path_or_buf=file_path, orient='records')


