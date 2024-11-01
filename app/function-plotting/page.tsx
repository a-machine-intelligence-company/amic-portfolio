"use client";

import { useState } from "react";

const FunctionPlotting = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    //POST method to submit Text to AWS API Gateway 
    try {
      const response = await fetch("https://7fk274nc3i.execute-api.eu-west-3.amazonaws.com/default/TestFunction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setResponseText(result.message);

      
    } catch (error) {
      console.error("Error submitting text to API:", error);
    }
  };


  return (
    <div>
      <h1>Submit Text to API</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
      
      {/* Display the response from Lambda */}
        <div>
          <h2>Response from API:</h2>
          {responseText ? (
            <p>{responseText}</p> 
          ) : ( 
          <p>No response yet.</p>
          )}
        </div>
      
    </div>
  );
};

export default FunctionPlotting;
