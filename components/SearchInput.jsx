"use client";

import React, { useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    if (!searchQuery) return;

    const GEMINI_API_KEY = "AIzaSyA2J5zcwlqsHFxV7px4VPP3FG-sX8XUIUY"; // Replace with your actual API key
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

    try {
      const result = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `The user asked for a recipe with the following ingredients or preferences: ${searchQuery}. Suggest a recipe with ingredients, instructions, and a link to the full recipe if possible.`
                }
              ]
            }
          ]
        })
      });

      if (!result.ok) {
        throw new Error(`Error: ${result.status} ${result.statusText}`);
      }

      const data = await result.json();
      const botResponse = data.candidates[0].content.parts[0].text.trim();
      setResponse(formatResponse(botResponse));
    } catch (error) {
      setResponse("<p class='text-red-500'>An error occurred while fetching the response.</p>");
    }
  };

  const formatResponse = (responseText) => {
    // Example: Adding basic formatting
    return responseText
      .replace(/Ingredients:/i, "<h4 class='font-semibold text-lg'>Ingredients:</h4><ul class='list-disc ml-5'>")
      .replace(/Instructions:/i, "</ul><h4 class='font-semibold text-lg mt-4'>Instructions:</h4><ol class='list-decimal ml-5'>")
      .replace(/\n/g, "</li><li>")
      .concat("</li></ol>");
  };

  return (
    <div className="flex flex-col justify-center p-2 mt-200">
      <div className="flex">
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
          placeholder="Search for a recipe..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5"
        >
          Search
        </button>
      </div>
      {response && (
        <div
          className="mt-4 p-4 bg-white border rounded shadow"
          dangerouslySetInnerHTML={{ __html: response }}
        />
      )}
    </div>
  );
};

export default SearchInput;
