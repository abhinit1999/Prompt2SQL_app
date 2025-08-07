import os
import sqlite3
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from langchain_groq import ChatGroq
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate

# Load environment variables
load_dotenv()

# FastAPI app
app = FastAPI(title="Prompt2SQL API", version="0.1.0")

# CORS settings
origins = [
    "http://localhost:3000",
    "https://prompt2sql.vercel.app/",            # React local dev
    "http://localhost:8501",            # Streamlit local dev
    "https://prompt2sql.vercel.app",    # Deployed frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class QueryRequest(BaseModel):
    user_query: str

@app.get("/")
def read_root():
    return {
        "message": "👋 Welcome to Prompt2SQL API!",
        "endpoints": {
            "Health Check": "/ping",
            "Query": "/query",
            "Docs": "/docs"
        }
    }

@app.get("/ping")
def ping():
    return {"status": "ok"}

# Convert English to SQL
def get_sql_query(user_query: str) -> str:
    prompt = ChatPromptTemplate.from_template("""
        You are an expert at converting English questions into SQL queries.
        The SQL database is named STUDENT and contains the following columns: NAME, COURSE, SECTION, and MARKS.

        Examples:
        - "How many entries of records are present?" → SELECT COUNT(*) FROM STUDENT;
        - "Tell me all the students studying in Data Science COURSE?" → SELECT * FROM STUDENT WHERE COURSE = "Data Science";

        Instructions:
        - Only return valid SQL queries. Do not include explanations, formatting, or backticks.
        - Never generate queries containing DELETE, DROP, or TRUNCATE.
        - If the question cannot be answered using the STUDENT table or is unclear, respond exactly with:
          Sorry I do not have any idea about it

        Now convert the following English question into a valid SQL query:
        {user_query}
    """)

    llm = ChatGroq(
        groq_api_key=os.getenv("GROQ_API_KEY"),
        model_name="llama3-8b-8192"
    )

    chain = prompt | llm | StrOutputParser()
    try:
        response = chain.invoke({"user_query": user_query}).strip()
    except Exception:
        return "Sorry I do not have any idea about it"

    if (
        not response or
        response.lower().startswith("sorry") or
        any(keyword in response.upper() for keyword in ["DELETE", "DROP", "TRUNCATE"]) or
        ";" not in response or
        "SELECT" not in response.upper()
    ):
        return "Sorry I do not have any idea about it"

    return response

# Execute SQL on SQLite
def execute_sql(sql_query: str):
    if sql_query == "Sorry I do not have any idea about it":
        return sql_query

    try:
        with sqlite3.connect("student.db") as conn:
            return conn.execute(sql_query).fetchall()
    except Exception as e:
        return f"Error executing SQL: {e}"

@app.post("/query")
def query_sql(request: QueryRequest):
    user_query = request.user_query
    sql_query = get_sql_query(user_query)
    result = execute_sql(sql_query)

    if isinstance(result, str) and result.startswith("Error"):
        raise HTTPException(status_code=500, detail=result)

    return {
        "sql_query": sql_query,
        "result": result
    }
