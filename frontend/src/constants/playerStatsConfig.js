export const playerStatsConfig = (player) => ({
  general: [
    {
      label: "Player name",
      desc: "The full name of the player.",
      value: player.player_name,
    },
    {
      label: "Team",
      desc: "The club the player currently represents.",
      value: player.team,
    },
    {
      label: "Nation",
      desc: "The player's national team or country of citizenship.",
      value: player.nation,
    },
    {
      label: "Position",
      desc: "The primary role the player plays on the pitch.",
      value: player.position,
    },
    {
      label: "Age",
      desc: "The player's current age.",
      value: player.age,
    },
    {
      label: "Birth year",
      desc: "The year the player was born.",
      value: player.birth_year,
    }
  ],

  playingTime: [
    {
      label: "Matches played",
      desc: "Total number of matches the player has appeared in.",
      value: player.matches_played,
    },
    {
      label: "Minutes",
      desc: "Total minutes played across all matches.",
      value: player.minutes,
    },
    {
      label: "Minutes per match",
      desc: "Average minutes played per match appearance.",
      value: player.minutes_per_match,
    },
    {
      label: "90s",
      desc: "Total minutes played divided by 90 (equivalent to full matches played).",
      value: player["90s"],
    },
    {
      label: "Sub in",
      desc: "Number of matches the player entered as a substitute.",
      value: player.sub_in,
    },
    {
      label: "Unused sub",
      desc: "Number of matches the player remained on the bench without playing.",
      value: player.unused_sub,
    },
  ],

  goalscoring:[
    {
      label: "Goals",
      desc: "Total goals scored by the player.",
      value: player.goals,
    },
    {
      label: "xG",
      desc: "The probability that a shot will result in a goal based on historical data (distance, angle, body part, etc.).",
      value: player.xg,
    },
    {
      label: "Shots",
      desc: "Total shots taken by the player.",
      value: player.shots,
    },
    {
      label: "Shots on target",
      desc: "Shots directed on goal that were saved or scored.",
      value: player.shots_on_target,
    },
    {
      label: "G-xG",
      desc: "Measures finishing ability and form. A positive number indicates overperformance (scoring difficult chances); negative indicates underperformance.",
      value: player.g_minus_xg,
      evaluable: true,
    },
    {
      label: "Goals p90",
      desc: "Goals scored per 90 minutes.",
      value: player.goals_p90,
    },
    {
      label: "Penalty goals",
      desc: "Goals scored from penalty kicks.",
      value: player.pk_goals,
    },
  ],

  creation:[
    {
      label: "Assists",
      desc: "Total assists provided by the player.",
      value: player.assists,
    },    
    {
      label: "xA",
      desc: "The likelihood that a given pass will become a goal assist, measuring the quality of chances created for teammates.",
      value: player.xa,
    },
    {
      label: "Assists p90",
      desc: "Assists provided per 90 minutes.",
      value: player.assists_p90,
    },
    {
      label: "Key passes",
      desc: "Passes that directly lead to a shot on goal by a teammate.",
      value: player.key_passes,
    },
    {
      label: "A-xA",
      desc: " Measures playmaker luck and teammate finishing. A positive number means teammates are finishing difficult chances from the player's passes.",
      value: player.a_minus_xa,
      evaluable: true,
    },
    {
      label: "xG Chain",
      desc: "The total xG of every possession the player was involved in. Measures overall contribution to attacking sequences.",
      value: player.xg_chain,
    },
    {
      label: "xG Buildup",
      desc: "The total xG of every possession the player was involved in, excluding shots and key passes. Highlights players crucial in building attacks from deeper areas.",
      value: player.xg_buildup,
    }
  ],

  defense: [
    {
      label: "Tackles won",
      desc: "Successful tackles where the player's team won possession.",
      value: player.tackles_won,
    },
    {
      label: "Interceptions",
      desc: "Number of times the player intercepted an opponent's pass.",
      value: player.interceptions,
    },
    {
      label: "Tackles won p90",
      desc: "Tackles won per 90 minutes.",
      value: player.tackles_won_p90,
    },
    {
      label: "interceptions p90",
      desc: "Interceptions made per 90 minutes.",
      value: player.interceptions_p90,
    },
    {
      label: "Own goals",
      desc: "Goals accidentally scored in the player's own net.",
      value: player.own_goals,
    },
    {
      label: "Penalties conceded",
      desc: "Penalty kicks conceded by the player's foul or handball.",
      value: player.pk_conceded,
    }
  ],

  discipline: [
    {
      label: "Fouls committed",
      desc: "Number of fouls committed by the player.",
      value: player.fouls_committed,
    },
    {
      label: "Fouls drawn",
      desc: "Number of times the player was fouled by an opponent.",
      value: player.fouls_drawn,
    },
    {
      label: "Yellow cards",
      desc: "Total yellow cards received.",
      value: player.yellow_cards,
    },
    {
      label: "Red cards",
      desc: "Total red cards received.",
      value: player.red_cards,
    },
    {
      label: "Total cards",
      desc: "Sum of yellow and red cards.",
      value: player.total_cards,
    },
    {
      label: "Fouls per card",
      desc: "Average number of fouls committed before receiving a card.",
      value: player.fouls_per_card,
    },
  ],

  goalkeeping: [
    {
      label: "Saves",
      desc: "Total saves made by the goalkeeper.",
      value: player.gk_saves,
    },
    {
      label: "Save pct",
      desc: "Percentage of shots on target saved by the goalkeeper.",
      value: player.gk_save_pct,
      pct: true,
    },
    {
      label: "Shots on target faced",
      desc: "Total shots on target faced by the goalkeeper.",
      value: player.gk_shots_on_target_faced,
    },
    {
      label: "Goals against",
      desc: "Total goals conceded by the goalkeeper.",
      value: player.gk_goals_against,
    },
    {
      label: "Goals against p90",
      desc: "Goals conceded per 90 minutes.",
      value: player.gk_goals_against_p90,
    },
    {
      label: "Clean sheets",
      desc: "Full matches where the goalkeeper did not concede a goal.",
      value: player.gk_clean_sheets,
    },
    {
      label: "Clean sheets pct",
      desc: "Percentage of matches resulting in a clean sheet.",
      value: player.gk_clean_sheets_pct,
      pct: true,
    },
    {
      label: "Penalty kicks faced",
      desc: "Total penalty kicks faced by the goalkeeper.",
      value: player.gk_pk_faced,
    },
    {
      label: "penalty kicks saved",
      desc: "Penalty kicks successfully saved by the goalkeeper.",
      value: player.gk_pk_saved,
    },
  ],
})
