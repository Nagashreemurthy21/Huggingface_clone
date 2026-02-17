import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/run-model", async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log("Prompt received:", prompt);

    if (!prompt) {
      return res.status(400).json({ result: "Prompt missing" });
    }

    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/gpt2",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
        }),
      }
    );

    const data = await response.json();

    console.log("HF RESPONSE:", data);

    if (data.error) {
      return res.status(500).json({ result: data.error });
    }

    res.json({
      result: data[0]?.generated_text || "No output",
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({ result: "HF failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
