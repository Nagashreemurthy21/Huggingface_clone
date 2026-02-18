import { useParams } from "react-router-dom";
import { useState } from "react";

function ModelDetails() {
  const { id } = useParams();
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runModel = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();
      setOutput(data.output || "No response");
    } catch (err) {
      setOutput("Error: API failed");
    }

    setLoading(false);
  };

  return (
    <div className="playground-wrapper">
      <div className="playground-card">
        <h2>AI Playground</h2>
        <p className="model-id">Model ID: {id}</p>

        <textarea
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button onClick={runModel} disabled={loading}>
          {loading ? "Generating..." : "Run Model"}
        </button>

        <div className="output-section">
          <h4>Output</h4>
          <div className="output-box">
            {output || "Your AI response will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelDetails;
