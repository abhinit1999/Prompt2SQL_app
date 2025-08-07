

import React from 'react';

const AppPage = () => {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        📊 Prompt2SQL
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6 max-w-xl">
        This AI-powered tool converts natural language into executable SQL queries. Interact with your database using plain English!
      </p>

      <div className="w-full max-w-6xl h-[80vh]">
        <iframe
          src="https://promptsql.streamlit.app/"
          title="Prompt2SQL Streamlit App"
          className="w-full h-full border rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AppPage;

