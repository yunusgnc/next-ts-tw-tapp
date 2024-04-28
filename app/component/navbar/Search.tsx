import React from "react";

const Search = () => {
  return (
    <div className="hidden md:flex flex-1">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-slate-100 rounded-3xl p-3 text-slate-600"
      />
    </div>
  );
};

export default Search;
