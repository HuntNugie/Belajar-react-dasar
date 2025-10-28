const ResultSearch = ()=>{
    return (
      <div id="resultContainer" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col">
          <img src="https://source.unsplash.com/400x250/?school,building" alt="Sekolah" className="rounded-xl w-full h-48 object-cover"/>
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Nama Sekolah</h2>
          <p className="text-gray-600 text-sm mt-1">Kota, Provinsi</p>
          <p className="text-gray-500 text-sm mt-2 flex-1">Deskripsi singkat sekolah.</p>
          <button 
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    );
}

export default ResultSearch