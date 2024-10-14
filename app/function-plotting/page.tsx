"use client";

import { useState } from "react";

const FunctionPlotting = () => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Replace with your API endpoint
    const response = await fetch("/api/your-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    });

    const result = await response.json();
    console.log(result);
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
    </div>
  );
};

export default FunctionPlotting;
