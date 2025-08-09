# Prompt2SQL App

Convert natural language into SQL queries using LLMs like Mixtral via Groq and LangChain.  
Frontend in React, backend in FastAPI.

## Featuress

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
- Hosted at: [https://promptsql.streamlit.app](https://promptsql.streamlit.app)

## Local Development

### Backend (FastAPI)

cd server_prompt2sql
python -m venv .venv
source .venv/bin/activate # or .\.venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload

## Front End (react)
cd SQLgenie
npm install
npm run dev

```bash
git add README.md
git commit -m "Add README"
git push
