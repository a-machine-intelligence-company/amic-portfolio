"use client";

import { useState } from "react";

const FunctionPlotting = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // POST-Methode, um Text an AWS API Gateway zu senden
    try {
      const response = await fetch("https://7fk274nc3i.execute-api.eu-west-3.amazonaws.com/default/TestFunction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP-Fehler! Status: ${response.status}`);
      }

      const result = await response.json();
      setResponseText(result.message);

 
    } catch (error) {
      console.error("Fehler beim Senden des Textes an die API:", error);
    }
  };


  return (
    <div>
      <h1>Text an die API senden</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Text eingeben"
        />
        <button type="submit">Senden</button>
      </form>
      
      {/* Antwort der Lambda-Funktion anzeigen */}
        <div>
          <h2>Antwort der API:</h2>
          {responseText ? (
            <p>{responseText}</p> 
          ) : ( 
          <p>Noch keine Antwort.</p>
          )}
        </div>
      
    </div>
  );
};

export default FunctionPlotting;
