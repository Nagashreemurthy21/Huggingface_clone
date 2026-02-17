import { useState } from "react";

function ModelDetails() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/run-model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: input
        })
      });

      const data = await response.json();
      setOutput(data.result);

    } catch (error) {
      console.error("Frontend error:", error);
      setOutput("Frontend failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>GPT-2</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter prompt..."
        style={{
          width: "100%",
          height: "120px",
          padding: "15px",
          fontSize: "16px"
        }}
      />

      <br /><br />

      <button
        onClick={handleRun}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Run Model
      </button>

      <br /><br />

      <div
        style={{
          background: "#f4f4f4",
          padding: "20px",
          borderRadius: "8px"
        }}
      >
        {output}
      </div>
    </div>
  );
}

export default ModelDetails;
