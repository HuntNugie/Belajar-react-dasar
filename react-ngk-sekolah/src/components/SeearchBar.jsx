const SearchBar = () => {
  return (
    <div class="flex flex-col items-center">
      <div class="w-full max-w-xl flex items-center bg-white rounded-full shadow-md overflow-hidden">
        <input
          id="searchInput"
          type="text"
          placeholder="Cari nama sekolah..."
          class="flex-1 px-6 py-3 text-gray-700 focus:outline-none"
        />
        <button
          id="searchBtn"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium"
        >
          Cari
        </button>
      </div>
    </div>
  );
};

export default SearchBar