import pandas as pd
from pathlib import Path

path = Path("./top_scorer.csv")

df = pd.read_csv(path)

print(df.columns)

print(df.head(5))
scorer = df.copy()
assist = df.copy()


top_scorer = scorer.sort_values(by="goals", ascending=False).head(10)
top_scorer.reset_index()

top_assist = assist.sort_values(by="assists", ascending=False).head(10)

top_scorer.to_json(path_or_buf="../frontend/src/data/top_Scorers.json", orient="records")
top_assist.to_json(path_or_buf="../frontend/src/data/top_Assist.json", orient="records")