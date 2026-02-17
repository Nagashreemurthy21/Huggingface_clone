import { useState } from "react";
import modelsData from "../data/modelsData";
import ModelCard from "../components/ModelCard";

function Models() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  let filtered = modelsData.filter((model) =>
    model.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || model.category === category)
  );

  if (sort === "downloads") {
    filtered = [...filtered].sort(
      (a, b) => parseFloat(b.downloads) - parseFloat(a.downloads)
    );
  }

  return (
    <div>
      <h1 className="page-title">AI Models</h1>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Text">Text</option>
          <option value="Image">Image</option>
          <option value="Audio">Audio</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="default">Default</option>
          <option value="downloads">Sort by Downloads</option>
        </select>
      </div>

      <div className="models-grid">
        {filtered.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}

export default Models;
