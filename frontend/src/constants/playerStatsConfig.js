export const playerStatsConfig = (player) => ({
  general: [
    { label: "Matches", value: player?.matches || 0 },
    { label: "Minutes", value: player?.minutes || 0 }
  ],
  discipline: [
    { label: "Yellow Cards", value: player?.yellow_cards || 0, color: "yellow" },
    { label: "Red Cards", value: player?.red_cards || 0, color: "red" }
  ],
  attack: [
    {label:"goals", value: player.goals},
    {label:"Np goals", value: player.np_goals},
    {label:"Penalty goals", value: player.penalty_goals},
    {label:"Assists", value: player.assists},
    {label:"G+A", value: player["g+a"]},
    {label:"shots", value: player.shots}
  ],

  expected: [
    { label: "xG", value: player.xg },
    { label: "Non-Penalty xG", value: player.np_xg },
    { label: "xA", value: player.xa },
    { label: "Key Passes", value: player.key_passes },
    { label: "xG Chain", value: player.xg_chain },
    { label: "xG Buildup", value: player.xg_buildup }
  ],
  efficiency: [
    { label: "Goals per 90", value: player.gx90 },
    { label: "Assists per 90", value: player.ax90 },
    { label: "G+A per 90", value: player["g+ax90"] },
    { label: "Goals per Shot", value: player.gxshots },
    { label: "G - xG (Diff)", value: player["g-xg"],evaluable: true },
    { label: "A - xA (Diff)", value: player["a-xa"],evaluable: true }
  ]
}); 
 