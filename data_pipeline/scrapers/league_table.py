import soccerdata as sd
from scrapers.constants import league, season,export_path

def export_league_table()->None:
    sofascore = sd.Sofascore(leagues=league,seasons=season)

    table = sofascore.read_league_table()

    return table.to_dict(orient='records')


