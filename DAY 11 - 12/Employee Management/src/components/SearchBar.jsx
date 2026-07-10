import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar({
  searchTerm,
  setSearchTerm,
  placeholder = "Search employees...",
}) {
  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="card border-0 shadow-sm mb-4">

      <div className="card-body">

        <div className="input-group">

          <span className="input-group-text bg-primary text-white">
            <FaSearch />
          </span>

          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button
              className="btn btn-outline-danger"
              onClick={handleClear}
            >
              <FaTimes />
            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default SearchBar;