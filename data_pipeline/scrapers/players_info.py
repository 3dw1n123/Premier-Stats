import soccerdata as sd
from pathlib import Path
from scrapers.constants import league,season, export_path

def export_players()->None:
    path = export_path/"players.json"
    players = sd.Understat(leagues=league, seasons=season)
    players_season = players.read_player_season_stats()
    players_season.to_json(path_or_buf=path)
    