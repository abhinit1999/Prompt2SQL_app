

import React, { useState } from 'react';
import { FaCopy, FaSpinner } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const DemoPage = () => {
  const [userQuery, setUserQuery] = useState('');
  const [sqlResult, setSqlResult] = useState([]);
  const [generatedSQL, setGeneratedSQL] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSqlResult([]);
    setGeneratedSQL('');

    try {
      const response = await fetch('http://127.0.0.1:8000/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_query: userQuery })
      });

      const data = await response.json();

      if (!response.ok || !data.sql_query) {
        setGeneratedSQL("Sorry, I do not have any idea about it.");
        setSqlResult([]);
        toast.error("I couldn't understand the query.");
      } else {
        setGeneratedSQL(data.sql_query);
        // Ensure result is always an array
        setSqlResult(Array.isArray(data.result) ? data.result : []);
        toast.success('SQL query generated successfully!');
      }

      setUserQuery('');
    } catch (error) {
      console.error(error);
      setGeneratedSQL("Sorry, I do not have any idea about it.");
      setSqlResult([]);
      toast.error('Failed to fetch SQL query.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedSQL) {
      navigator.clipboard.writeText(generatedSQL);
      toast.success('Copied to clipboard!');
    }
  };

  const renderTable = () => {
    if (!sqlResult || sqlResult.length === 0) return null;

    const isArrayOfObjects = typeof sqlResult[0] === 'object' && !Array.isArray(sqlResult[0]);
    const headers = isArrayOfObjects ? Object.keys(sqlResult[0]) : sqlResult[0].map((_, i) => `Column ${i + 1}`);

    return (
      <div className="overflow-x-auto mt-4">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">Query Result</h3>
        <table className="min-w-full bg-gray-800 text-white rounded-md">
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="text-left px-4 py-2 border-b border-gray-700">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sqlResult.map((row, i) => (
              <tr key={i}>
                {isArrayOfObjects
                  ? headers.map((key, j) => (
                      <td key={j} className="px-4 py-2 border-b border-gray-700">{row[key]}</td>
                    ))
                  : row.map((cell, j) => (
                      <td key={j} className="px-4 py-2 border-b border-gray-700">{cell}</td>
                    ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <Toaster />
      <div className="max-w-3xl mx-auto border border-yellow-500 rounded-xl shadow-xl p-6 bg-gradient-to-b from-black via-gray-900 to-black text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Prompt2SQL using AI</h1>
        <p className="mb-6 text-gray-300">Convert natural language into SQL queries using AI</p>

        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            className="w-full bg-gray-950 border border-blue-500 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            rows="4"
            placeholder="Enter your question (e.g. List all students in Data Science)..."
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-blue-500 to-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:from-blue-400 hover:to-yellow-300 flex items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin"><FaSpinner /></span>
            ) : (
              'Generate SQL'
            )}
          </button>
        </form>

        {generatedSQL && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-yellow-400">Generated SQL</h3>
              {generatedSQL !== "Sorry, I do not have any idea about it." && (
                <button onClick={handleCopy} className="text-blue-300 hover:text-yellow-300 transition-all">
                  <FaCopy />
                </button>
              )}
            </div>
            <div className="bg-gray-800 text-white p-4 rounded-md font-mono whitespace-pre-wrap">
              {generatedSQL}
            </div>
          </div>
        )}

        {renderTable()}
      </div>
    </div>
  );
};

export default DemoPage;
