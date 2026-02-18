import { FaSearch } from "react-icons/fa";

function Searchbar({ value, onChange, placeholder = "Search models..." }) {
  return (
    <div className="searchbar-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
}

export default Searchbar;
