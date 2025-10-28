import { useState } from "react";
const SearchBar = ({fnGetKeyword}) => {
    const [search,setSearch] = useState("")
    function handleChange(e){
        const keyword = e.target.value
        setSearch(keyword)
        fnGetKeyword(keyword)
    }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl flex items-center bg-white rounded-full shadow-md overflow-hidden">
        <input
          id="searchInput"
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Cari nama sekolah..."
          className="flex-1 px-6 py-3 text-gray-700 focus:outline-none"
        />
        <button
          id="searchBtn"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium"
        >
          Cari
        </button>
      </div>
    </div>
  );
};

export default SearchBar