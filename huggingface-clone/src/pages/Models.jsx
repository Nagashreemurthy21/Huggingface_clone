import { useState } from "react";
import modelData from "../data/modelData";
import ModelCard from "../components/ModelCard";

function Models() {
  const [search, setSearch] = useState("");

  const filteredModels = modelData.filter((model) =>
    model.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2 className="section-title">Explore AI Models</h2>

      <input
        type="text"
        placeholder="Search models..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="model-grid">
        {filteredModels.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </>
  );
}

export default Models;
