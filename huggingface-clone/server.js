import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt required" });
  }

  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "phi",
        prompt: prompt,
        stream: false
      })
    });

    const data = await response.json();

    res.json({
      success: true,
      output: data.response
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ollama failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});
