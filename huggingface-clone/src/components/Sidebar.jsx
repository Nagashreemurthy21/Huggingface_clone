import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <Link to="/">Home</Link>
      <Link to="/models">Models</Link>
    </div>
  );
}

export default Sidebar;
