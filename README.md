# Propmt2SQL App

Convert natural language into SQL queries using LLMs like Mixtral via Groq and LangChain.  
Frontend in React, backend in FastAPI.

## Features

- Natural Language to SQL converter
- LangChain & Groq integration
- SQLite database querying
- FastAPI backend
- Modern React frontend

## Frontend

- Vite + React
- Hosted at: [https://prompt2sql.vercel.app](https://prompt2sql.vercel.app)

## Backend

- FastAPI + LangChain + Groq + SQLite
- Hosted at: [https://promptsql.streamlit.app](https://promptsql.streamlit.app) *(if this is your Streamlit test)*

## Local Development

### Backend (FastAPI)
```bash
cd server_prompt2sql
python -m venv .venv
source .venv/bin/activate # or .\.venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload
