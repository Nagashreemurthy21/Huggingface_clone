import { useParams } from "react-router-dom";
import { useState } from "react";
import modelsData from "../data/modelsData";

function ModelDetails() {
  const { id } = useParams();

  const model = modelsData.find(
    (item) => item.id === parseInt(id)
  );

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRun = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setOutput("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: input,
        }),
      });

      const data = await response.json();
      console.log("Backend Response:", data);

      if (!response.ok) {
        setError(data.error || "Something went wrong");
      } else if (Array.isArray(data) && data[0]?.generated_text) {
        setOutput(data[0].generated_text);
      } else {
        setError("Unexpected response format.");
      }

    } catch (err) {
      console.error(err);
      setError("Server not running or request failed.");
    }

    setLoading(false);
  };

  if (!model) return <h2>Model not found</h2>;

  return (
    <div>
      <h1 className="page-title">{model.name}</h1>

      <textarea
        placeholder="Enter your prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="button" onClick={handleRun}>
        Run Model
      </button>

      {loading && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Generating response...
        </p>
      )}

      {error && (
        <div className="output-box" style={{ color: "red" }}>
          {error}
        </div>
      )}

      {output && (
        <div className="output-box">
          {output}
        </div>
      )}
    </div>
  );
}

export default ModelDetails;
