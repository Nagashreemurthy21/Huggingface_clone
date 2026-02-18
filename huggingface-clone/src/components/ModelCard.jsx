import { useNavigate } from "react-router-dom";

function ModelCard({ model }) {
  const navigate = useNavigate();

  return (
    <div className="model-card">
      <div className="model-badge">{model.category}</div>

      <h3>{model.name}</h3>

      <p>{model.description}</p>

      <div className="model-stats">
        ⭐ {model.rating} | 👥 {model.users}
      </div>

      <button
        className="primary-btn"
        onClick={() => navigate(`/model/${model.id}`)}
      >
        Open Playground →
      </button>
    </div>
  );
}

export default ModelCard;
