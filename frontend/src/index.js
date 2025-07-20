import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [topic, setTopic] = useState("");
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    const res = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic })
    });
    const data = await res.json();
    setQuote(data.quote);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>AI Quote Generator</h1>
      <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Enter topic" />
      <button onClick={fetchQuote}>Get Quote</button>
      <p>{quote}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
