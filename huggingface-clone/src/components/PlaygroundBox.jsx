import { useState } from "react";

function PlaygroundBox() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runModel = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();
      setOutput(data.output);
    } catch (err) {
      setOutput("Error: API failed");
    }

    setLoading(false);
  };

  return (
    <div className="playground-card">
      <h3>AI Playground</h3>

      <textarea
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="playground-textarea"
      />

      <button
        onClick={runModel}
        className="primary-btn"
        disabled={loading}
      >
        {loading ? "Generating..." : "Run Model"}
      </button>

      <div className="output-section">
        <h4>Output</h4>
        <div className="output-box">
          {output || "Your AI response will appear here..."}
        </div>
      </div>
    </div>
  );
}

export default PlaygroundBox;
