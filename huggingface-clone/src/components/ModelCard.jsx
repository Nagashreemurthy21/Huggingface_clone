import { Link } from "react-router-dom";

function ModelCard({ model }) {
  return (
    <div className="model-card">
      <h3>{model.name}</h3>
      <p>{model.description}</p>
      <p><strong>Category:</strong> {model.category}</p>
      <p><strong>Downloads:</strong> {model.downloads}</p>

      <Link to={`/models/${model.id}`} className="button">
        View Details
      </Link>
    </div>
  );
}

export default ModelCard;
