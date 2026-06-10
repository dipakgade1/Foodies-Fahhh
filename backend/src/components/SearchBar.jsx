import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mt-6 mb-4">
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 w-80 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}

export default SearchBar;