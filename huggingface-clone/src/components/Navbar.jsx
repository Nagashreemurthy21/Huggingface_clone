import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        🤗 <span className="logo-text">HuggingFace Clone</span>
      </div>

      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/models">Models</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
}

export default Navbar;
