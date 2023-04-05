import React from "react";

const SearchForm = ({ inputSearch, setInputSearch }) => {
  return (
    <div className="w-[740px] text-center">
      <input
        type="text"
        placeholder="searchUser"
        value={inputSearch}
        onChange={e => setInputSearch(e.target.value)}
        className="border-s-2 border-t-2 border-b-2 p-1 rounded-s-lg w-4/5"
      />
      <i
        className="fa-solid fa-xmark bg-[#F3D411] p-2.5 rounded-e-lg cursor-pointer"
        onClick={() => setInputSearch("")}
      />
    </div>
  );
};

export default SearchForm;
