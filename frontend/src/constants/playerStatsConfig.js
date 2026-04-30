export const playerStatsConfig = (player) => ({
  general: [
    {
      label: "player_name",
      desc: "The full name of the player.",
      value: player.player_name,
    },
    {
      label: "team",
      desc: "The club the player currently represents.",
      value: player.team,
    },
    {
      label: "nation",
      desc: "The player's national team or country of citizenship.",
      value: player.nation,
    },
    {
      label: "position",
      desc: "The primary role the player plays on the pitch.",
      value: player.position,
    },
    {
      label: "age",
      desc: "The player's current age.",
      value: player.age,
    },
    {
      label: "birth_year",
      desc: "The year the player was born.",
      value: player.birth_year,
    },
  ],

  playingTime: [
    {
      label: "matches_played",
      desc: "Total number of matches the player has appeared in.",
      value: player.matches_played,
    },
    {
      label: "starts",
      desc: "Number of matches the player started in the first XI.",
      value: player.starts,
    },
    {
      label: "minutes",
      desc: "Total minutes played across all matches.",
      value: player.minutes,
    },
    {
      label: "minutes_per_match",
      desc: "Average minutes played per match appearance.",
      value: player.minutes_per_match,
    },
    {
      label: "90s",
      desc: "Total minutes played divided by 90 (equivalent to full matches played).",
      value: player["90s"],
    },
    {
      label: "matches_completed",
      desc: "Number of full matches (90 minutes) played without being substituted.",
      value: player.matches_completed,
    },
    {
      label: "sub_in",
      desc: "Number of matches the player entered as a substitute.",
      value: player.sub_in,
    },
    {
      label: "unused_sub",
      desc: "Number of matches the player remained on the bench without playing.",
      value: player.unused_sub,
    },
  ],

  attack: [
    {
      label: "goals",
      desc: "Total goals scored by the player.",
      value: player.goals,
    },
    {
      label: "assists",
      desc: "Total assists provided by the player.",
      value: player.assists,
    },
    {
      label: "g_a",
      desc: "Total goals and assists combined.",
      value: player.g_a,
    },
    {
      label: "npg",
      desc: "Non-Penalty Goals (total goals minus penalty goals).",
      value: player.npg,
    },
    {
      label: "shots",
      desc: "Total shots taken by the player.",
      value: player.shots,
    },
    {
      label: "shots_on_target",
      desc: "Shots directed on goal that were saved or scored.",
      value: player.shots_on_target,
    },
    {
      label: "shots_accuracy",
      desc: "Percentage of shots that were on target.",
      value: player.shots_accuracy,
    },
    {
      label: "shots_conversion_rate",
      desc: "Percentage of shots that resulted in a goal.",
      value: player.shots_conversion_rate,
    },
    {
      label: "goal_involvement_pct",
      desc: "Percentage of the team's total goals the player contributed to (goals + assists).",
      value: player.goal_involvement_pct,
    },
    {
      label: "offsides",
      desc: "Number of times the player was caught offside.",
      value: player.offsides,
    },
    {
      label: "goals_p90",
      desc: "Goals scored per 90 minutes.",
      value: player.goals_p90,
    },
    {
      label: "assists_p90",
      desc: "Assists provided per 90 minutes.",
      value: player.assists_p90,
    },
    {
      label: "g_a_p90",
      desc: "Goals and assists per 90 minutes.",
      value: player.g_a_p90,
    },
    {
      label: "npg_p90",
      desc: "Non-Penalty Goals per 90 minutes.",
      value: player.npg_p90,
    },
    {
      label: "shots_p90",
      desc: "Shots taken per 90 minutes.",
      value: player.shots_p90,
    },
    {
      label: "shots_on_target_p90",
      desc: "Shots on target per 90 minutes.",
      value: player.shots_on_target_p90,
    },
  ],

  penalties: [
    {
      label: "pk_goals",
      desc: "Goals scored from penalty kicks.",
      value: player.pk_goals,
    },
    {
      label: "pk_attempted",
      desc: "Total penalty kicks taken.",
      value: player.pk_attempted,
    },
    {
      label: "pk_conversion_rate",
      desc: "Percentage of penalty kicks successfully scored.",
      value: player.pk_conversion_rate,
    },
    {
      label: "pk_won",
      desc: "Penalty kicks won by the player being fouled in the opponent's box.",
      value: player.pk_won,
    },
  ],

  defense: [
    {
      label: "tackles_won",
      desc: "Successful tackles where the player's team won possession.",
      value: player.tackles_won,
    },
    {
      label: "interceptions",
      desc: "Number of times the player intercepted an opponent's pass.",
      value: player.interceptions,
    },
    {
      label: "own_goals",
      desc: "Goals accidentally scored in the player's own net.",
      value: player.own_goals,
    },
    {
      label: "pk_conceded",
      desc: "Penalty kicks conceded by the player's foul or handball.",
      value: player.pk_conceded,
    },
    {
      label: "tackles_won_p90",
      desc: "Tackles won per 90 minutes.",
      value: player.tackles_won_p90,
    },
    {
      label: "interceptions_p90",
      desc: "Interceptions made per 90 minutes.",
      value: player.interceptions_p90,
    },
  ],

  discipline: [
    {
      label: "fouls_committed",
      desc: "Number of fouls committed by the player.",
      value: player.fouls_committed,
    },
    {
      label: "fouls_drawn",
      desc: "Number of times the player was fouled by an opponent.",
      value: player.fouls_drawn,
    },
    {
      label: "yellow_cards",
      desc: "Total yellow cards received.",
      value: player.yellow_cards,
      color: "yellow"
    },
    {
      label: "red_cards",
      desc: "Total red cards received.",
      value: player.red_cards,
      color: "red"
    },
    {
      label: "second_yellow_cards",
      desc: "Second yellow cards resulting in a red card.",
      value: player.second_yellow_cards,
    },
    {
      label: "total_cards",
      desc: "Sum of yellow and red cards.",
      value: player.total_cards,
    },
    {
      label: "fouls_per_card",
      desc: "Average number of fouls committed before receiving a card.",
      value: player.fouls_per_card,
    },
  ],

  teamImpact: [
    {
      label: "plus_minus",
      desc: "Team goal difference while the player was on the pitch.",
      value: player.plus_minus,
    },
    {
      label: "team_goals_scored",
      desc: "Team goals scored while the player was on the pitch.",
      value: player.team_goals_scored,
    },
    {
      label: "team_goals_conceded",
      desc: "Team goals conceded while the player was on the pitch.",
      value: player.team_goals_conceded,
    },
  ],

  goalkeeping: [
    {
      label: "gk_saves",
      desc: "Total saves made by the goalkeeper.",
      value: player.gk_saves,
    },
    {
      label: "gk_save_pct",
      desc: "Percentage of shots on target saved by the goalkeeper.",
      value: player.gk_save_pct,
    },
    {
      label: "gk_saves_per_goal",
      desc: "Average number of saves made for every goal conceded.",
      value: player.gk_saves_per_goal,
    },
    {
      label: "gk_shots_on_target_faced",
      desc: "Total shots on target faced by the goalkeeper.",
      value: player.gk_shots_on_target_faced,
    },
    {
      label: "gk_goals_against",
      desc: "Total goals conceded by the goalkeeper.",
      value: player.gk_goals_against,
    },
    {
      label: "gk_goals_against_p90",
      desc: "Goals conceded per 90 minutes.",
      value: player.gk_goals_against_p90,
    },
    {
      label: "gk_clean_sheets",
      desc: "Full matches where the goalkeeper did not concede a goal.",
      value: player.gk_clean_sheets,
    },
    {
      label: "gk_clean_sheets_pct",
      desc: "Percentage of matches resulting in a clean sheet.",
      value: player.gk_clean_sheets_pct,
    },
    {
      label: "gk_pk_faced",
      desc: "Total penalty kicks faced by the goalkeeper.",
      value: player.gk_pk_faced,
    },
    {
      label: "gk_pk_allowed",
      desc: "Penalty goals allowed by the goalkeeper.",
      value: player.gk_pk_allowed,
    },
    {
      label: "gk_pk_saved",
      desc: "Penalty kicks successfully saved by the goalkeeper.",
      value: player.gk_pk_saved,
    },
    {
      label: "gk_pk_missed_against",
      desc: "Penalty kicks missed by the opponent (off target) against the goalkeeper.",
      value: player.gk_pk_missed_against,
    },
    {
      label: "gk_pk_save_pct",
      desc: "Percentage of penalty kicks saved by the goalkeeper.",
      value: player.gk_pk_save_pct,
    },
  ],
})
