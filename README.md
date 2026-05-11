# ⚽ Premier-Stats
![Python](https://img.shields.io/badge/Python-3.12+-blue.svg)
![React](https://img.shields.io/badge/React-18.0+-blue.svg)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-blue.svg)
![Soccerdata](https://img.shields.io/badge/Soccerdata-Scraping-orange.svg)
## 📖 Overview
This project is an end-to-end data engineering pipeline and interactive dashboard designed to track, consolidate, and visualize advanced Premier League statistics exclusively for the **2025/2026 season**. 

Instead of relying on a single data source, this system automatically extracts data using the **`soccerdata`** library to combine traditional stats from FBref and advanced expected metrics (xG, xA) from Understat. The clean, unified data is loaded into a **Supabase** (PostgreSQL) database and served through a lightning-fast React frontend.

## ✨ Key Features
* **Automated ETL Pipeline:** Modular Extract, Transform, and Load architecture built with Python.
* **Smart Entity Resolution:** Uses `rapidfuzz` to match player names across different data providers accurately.
* **Database Optimization:** Leverages Supabase (PostgreSQL) with Materialized Views and Triggers to handle complex table joins efficiently.
* **High-Performance Frontend:** Built with React and TanStack Query for instantaneous data caching, dynamic filtering, and infinite scrolling without unnecessary re-fetching.
* **Advanced Metrics:** Displays expected goals (xG), expected assists (xA), and Per 90 metrics alongside traditional stats for the current 25/26 campaign.

## 🎥 Demo
[premier-stats-demo.webm](https://github.com/user-attachments/assets/4c5cafa3-c4ba-47a7-9894-d598c83ff909)
