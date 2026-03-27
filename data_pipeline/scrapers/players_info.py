import soccerdata as sd
from scrapers.constants import league,season, export_path

def export_players()->None:
    players = sd.Understat(leagues=league, seasons=season)
    players_season = players.read_player_season_stats().reset_index()
    return players_season.to_dict(orient="records")
    